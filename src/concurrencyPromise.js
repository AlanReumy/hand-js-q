// 实现一个有并发请求的promise
class Scheduler {
  constructor(maxCount) {
    this.queue = [];
    this.runCount = 0;
    this.maxCount = maxCount;
  }

  add(time, order) {
    const promiseCreator = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(order);
          resolve();
        }, time);
      });
    };
    this.queue.push(promiseCreator);
  }

  taskStart() {
    for (let i = 0; i < this.maxCount; i++) {
      this.request();
    }
  }

  request() {
    if (!this.queue || !this.queue.length || this.runCount >= this.maxCount) {
      return;
    }
    this.runCount++;
    this.queue
      .shift()()
      .then(() => {
        this.runCount--;
        this.request();
      });
  }
}

// const scheduler = new Scheduler(2);
// const addTask = (time, order) => {
//   scheduler.add(time, order);
// };
// addTask(1000, "1");
// addTask(500, "2");
// addTask(300, "3");
// addTask(400, "4");
// scheduler.taskStart();
