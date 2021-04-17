/** @format */

class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    //console.log ('coucou')
    //let item = 0;
    this.items.push(item);
    this.length++;

    this.items.sort(function (a, b) {
      return a - b;
    });
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items.indexOf(pos);

  }

  max(arr) {
    if (arr.length === 0) {
      throw new Error("OutOfBounds");
    }
    return Math.max(...arr);
  }

  min(arr) {
    if (arr.length === 0) {
      throw new Error("OutOfBounds");
    }
    return Math.min(...arr);
  }

  sum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum
  }

  avg() { }
}

module.exports = SortedList;
