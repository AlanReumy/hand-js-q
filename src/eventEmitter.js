// 消息订阅与发布
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(name, cb) {
    if (!this.events[name]) {
      this.events[name] = [cb];
    } else {
      this.events[name].push(cb);
    }
  }

  off(name, cb) {
    if (!this.events[name]) {
      return;
    }
    this.events[name] = this.events[name].filter((item) => item !== cb);
  }

  once(name, cb) {
    const wrapper = () => {
      cb();
      this.off(name, cb);
    };
    this.on(name, wrapper);
  }

  emit(name, ...rest) {
    this.events[name] &&
      this.events[name].forEach((cb) => {
        cb.apply(this, rest);
      });
  }
}
