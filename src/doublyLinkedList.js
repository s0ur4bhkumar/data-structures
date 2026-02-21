function doublyLinkedList(value) {
  let head = Node(value);
  return {
    append(val) {
      function recurAppend(val, node = head) {
        let newNode = Node(val);
        if (head.data === null) {
          head = newNode;
          node = head;
          return;
        } else {
          if (node.next === null) {
            node.next = newNode;
            newNode.previous = node;
            return;
          }
        }
        recurAppend(val, node.next);
      }
      return recurAppend(val);
    },
    prepend(val) {
      let newNode = Node(val);
      head.previous = newNode;
      newNode.next = head;
      head = newNode;
    },
    size() {
      function recurSize(node = head) {
        let count = 1;
        if (node === null) {
          return 0;
        }
        return count + recurSize(node.next);
      }
      return recurSize();
    },
    remove(val) {
      if (head.data === val) {
        head = head.next;
        head.previous.next = null;
        head.previous = null;
        return;
      }
      if (this.getTail().data === val) {
        this.getTail().previous.next = null;
        this.getTail().previous = null;
        return;
      } else {
        recurRemoveVal(val);
      }
      function recurRemoveVal(val, node = head) {
        if (node.data === val) {
          node.previous.next = node.next;
          node.next.previous = node.previous;
          node.previous = null;
          return "";
        }
        return recurRemoveVal(val, node.next);
      }
      return "";
    },
    indexOf(val) {
      if (head.data === val) {
        return 0;
      }
      if (this.getTail().data === val) {
        return this.size() - 1;
      } else {
        return recurIndexOf(val);
      }
      function recurIndexOf(val, node = head) {
        let count = 1;
        if (node.data === val) {
          return count - 1;
        }
        return count + recurIndexOf(val, node.next);
      }
    },
    atIndex(idx) {
      if (idx === 0) {
        return head.data;
      } else if (idx === this.size() - 1) {
        return this.getTail().data;
      } else if (idx >= this.size()) {
        throw "out of range";
      } else {
        return recurAtIndex(idx);
      }
      function recurAtIndex(idx, node = head) {
        if (idx === 0) {
          return node.data;
        }
        return recurAtIndex(idx - 1, node.next);
      }
    },
    insertAt(idx, val) {
      if (idx === 0) {
        this.prepend(val);
        return;
      }
      if (idx === this.size() - 1) {
        this.append(val);
        return;
      }
      if (idx >= this.size()) {
        throw "index out of range";
      } else {
        return recurInsert(idx, val);
      }
      function recurInsert(idx, val, node = head) {
        let newNode = Node(val);
        if (idx === 0) {
          newNode.next = node;
          node.previous.next = newNode;
          newNode.previous = node.previous;
          node.previous = newNode;
          return;
        }
        return recurInsert(idx - 1, val, node.next);
      }
    },
    removeAt(idx) {
      if (idx === 0) {
        head = head.next;
        head.next.previous = null;
        return;
      }
      if (idx === this.size() - 1) {
        console.log("hello");
        this.getTail().previous.next = null;
        this.getTail().previous = null;
        return;
      } else {
        return recurRemove(idx);
      }
      function recurRemove(idx, node = head) {
        if (idx === 0) {
          node.previous.next = node.next;
          node.next.previous = node.previous;
          node.previous = null;
          return;
        }
        return recurRemove(idx - 1, node.next);
      }
    },
    getHead() {
      let result = head.data;
      this.removeAt(0);
      return result;
    },
    pop() {
      let result = this.getTail().data;
      this.removeAt(this.size() - 1);
      return result;
    },
    contains(val) {
      function recurContain(val, node = head) {
        if (node.data === val) {
          return true;
        }
        if (node.next === null) {
          return false;
        }
        return recurContain(val, node.next);
      }
      return recurContain(val);
    },
    Head() {
      return head;
    },
    getTail() {
      function getTail(node = head) {
        if (node.next === null) {
          return node;
        }
        return getTail(node.next);
      }
      return getTail();
    },
    toString() {
      function print(node = head) {
        if (node === null) {
          return "";
        }
        if (node.next === null) {
          return `${node.data}`;
        }
        return `${node.data}<==>${print(node.next)}`;
      }
      return print();
    },
  };
}

function Node(data = null) {
  return {
    previous: null,
    data: data,
    next: null,
  };
}

let lst = doublyLinkedList();
lst.append(2);
// console.log(lst)
lst.append(23);
lst.append(26);
lst.append(34);
lst.prepend(0);
console.log(lst.toString());
console.log(lst.size());
// lst.remove(0);
// console.log(lst.toString());
// console.log(lst.size());
// console.log(lst.head())
// console.log(lst.tail())
// lst.remove(23);
// console.log(lst.toString());
// console.log(lst.size());
// console.log(lst.indexOf(26));
// console.log(lst.atIndex(2));
// lst.insertAt(0, 1);
// lst.insertAt(5, 10);
lst.insertAt(3, 10);
lst.removeAt(3);
console.log(lst.toString());
console.log(lst.contains(1))
