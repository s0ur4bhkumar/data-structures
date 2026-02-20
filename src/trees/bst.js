const Node = (data) => {
  return {
    left: null,
    data: data,
    right: null,
  };
};

const bst = (arr) => {
  let newArr = [...new Set(arr)].sort((a, b) => a - b);
  let root = (function build(arr = newArr, start = 0, end = arr.length - 1) {
    if (start > end) {
      return null;
    }
    let mid = Math.floor((start + end) / 2);
    let root = Node(arr[mid]);
    root.left = build(arr, start, mid - 1);
    root.right = build(arr, mid + 1, end);
    return root;
  })();
  return {
    prettyPrint(node = root, prefix = "", isLeft = true) {
      if (node === null || node === undefined) {
        return;
      }

      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false,
      );
      console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    },
    includes(val) {
      let node = root;
      while (node !== null) {
        if (node.data === val) {
          return true;
        } else if (node.data > val) {
          node = node.left;
        } else {
          node = node.right;
        }
      }
      return false;
    },
    insert(val) {
      let node = root;
      let previous;
      while (node !== null) {
        if (node.data === val) {
          throw "value already exist";
        } else if (node.data > val) {
          [previous, node] = [node, node.left];
        } else {
          [previous, node] = [node, node.right];
        }
      }
      if (val > previous.data) {
        previous.right = Node(val);
      } else {
        previous.left = Node(val);
      }
    },
    max() {
      let node = root.right;
      while (node.right !== null) {
        node = node.right;
      }
      return node.data;
    },

    min() {
      let node = root.left;
      while (node.left !== null) {
        node = node.left;
      }
      return node.data;
    },

    printRoot() {
      console.log(root);
    },
  };
};

let ar = [10, 5, 15, 3, 7, 12, 20];
let root = bst(ar);
// root.insert(8);
// root.insert(2.5);
// root.insert(2.6);
root.prettyPrint();
console.log(
  "-----------------------------------------------operations------------------------------",
);
// console.log(root.max());
root.delete(7);
root.delete(15)
root.prettyPrint();
// console.log(root.includes(10))
