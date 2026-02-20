function queue() {
  let arr = [];
  return {
    enqueue(val) {
      arr.push(val);
    },
    dequeue() {
      if (this.isEmpty()) {
        return "queue is empty";
      }
      return arr.shift();
    },
    peek() {
      if (this.isEmpty()) {
        return "queue is empty";
      }
      return arr[0];
    },
    isEmpty() {
      return arr.length === 0;
    },
    size() {
      return arr.length;
    },
    clear() {
      return (arr.length = 0);
    },
    print() {
      console.log(arr.join("-->"));
    },
  };
}
