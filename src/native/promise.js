class MyPromise {
  constructor(fn) {
    this.state = "pending";
    this.successFn = [];
    this.failFn = [];
    let resolve = (val) => {
      if (this.state !== "pending") return;
      this.state = "success";
      setTimeout(() => {
        this.successFn.forEach((fn) => fn.call(this, val));
      });
    };
    let reject = (err) => {
      if (this.state !== "pending") return;
      this.state = "fail";
      setTimeout(() => {
        this.failFn.forEach((fn) => fn.call(this, err));
      });
    };

    try {
      fn(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(resolveCb, rejectCb) {
    resolveCb = typeof resolveCb === "function" ? resolveCb : (val) => val;
    rejectCb = typeof rejectCb === "function" ? rejectCb : (val) => val;
    return new MyPromise((resolve, reject) => {
      this.successFn.push((val) => {
        try {
          let x = resolveCb(val);
          // !important
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
        } catch (error) {
          reject(error);
        }
      });

      this.failFn.push((val) => {
        try {
          let x = rejectCallback(val);
          // !important
          x instanceof MyPromise ? x.then(resolve, reject) : reject(x);
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  // todo
  static all(promiseArr) {}
}
