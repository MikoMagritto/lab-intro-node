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

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
