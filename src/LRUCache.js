class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key) {
    if (this.map.get(key)) {
      let tmpVal = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, tmpVal);
      return tmpVal;
    } else {
      return -1;
    }
  }

  put(key, val) {
    // only change
    if (this.map.has(key)) {
      this.map.delete(key);
      this.map.set(key, val);
    } else if (!this.map.has(key) && this.map.size < this.capacity) {
      this.map.set(key, val);
    } else {
      this.map.set(key, val);
      this.map.delete(this.map.keys().next().value);
    }
  }
}
