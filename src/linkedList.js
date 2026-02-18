const linkedList = (value) => {
  let head = Node(value);
  return {
    append: (value) => {
      if (head.value === null) {
        head = Node(value);
      } else {
        let current = head;
        while (current.nextNode !== null) {
          current = current.nextNode;
        }
        current.nextNode = Node(value);
      }
    },
    prepend: (value) => {
      head = Node(value, head);
    },
    size() {
      let count = 0;
      let current = head;
      while (current.nextNode !== null) {
        count++;
        current = current.nextNode;
      }
      return count + 1;
    },
    Head: () => {
      return head.value;
    },
    Tail: () => {
      let current = head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      return current.value;
    },
    at: (index) => {
      let count = 0;
      let current = head;
      while (count < index) {
        count++;
      }
      return current.value;
    },
    pop: () => {
      let val = head.value;
      head = head.nextNode;
      return val;
    },
    contains: (value) => {
      let current = head;
      while (current.value !== null) {
        if (current.value === value) {
          return true;
        }
        current = current.nextNode;
      }
      return false;
    },
    findIndex: (value) => {
      let count = 0;
      let current = head;
      while (current.value !== value) {
        count++;
        current = current.nextNode;
      }
      return count;
    },
    atIndex: (idx, val) => {
      let count = 0;
      let current = head;
      let element = Node(val);
      let previous;
      while (count < idx) {
        [previous, current] = [current, current.nextNode];
        count++;
      }
      previous.nextNode = element;
      element.nextNode = current;
    },
    removeAt(idx) {
      let count = 0;
      let current = head;
      let previous;
      if (idx === 0) {
        head = head.nextNode;
      } else if (idx === this.size() - 1) {
        while (count < idx) {
          [previous, current] = [current, current.nextNode];
          count++;
        }
        previous.nextNode = null;
      } else if (idx >= this.size()) {
        throw "range Error";
      } else {
        while (count < idx) {
          [previous, current] = [current, current.nextNode];
          count++;
        }
        previous.nextNode = current.nextNode.nextNode;
      }
    },
    toString: () => {
      let result = "";
      let current = head;
      if (head.value === null) {
        return "list is empty";
      }
      while (current.nextNode !== null) {
        result += `(${current.value}) ==> `;
        current = current.nextNode;
      }
      result += `(${current.value})`;
      console.log(result);
      return ``;
    },
  };
};

const Node = (value = null, nextNode = null) => {
  return {
    value: value,
    nextNode: nextNode,
  };
};

export default linkedList;
