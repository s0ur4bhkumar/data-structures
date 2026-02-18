import linkedList from "./linkedList.js";

const hashMap = (load_factor = 0.75, capacity = 16) => {
  let arr = Array(capacity);
  return {
    set: (key, val) => {
      let h = hash(key);
      if (arr[h] === undefined) {
        arr[h] = linkedList();
      }
      let found = false;
      for (let i = 0; i < arr[h].size(); i++) {
        if (arr[h].at(i)) {
          if (arr[h].at(i).length === 2 && arr[h].at(i)[0] === key) {
            arr[h].at(i)[1] = val;
            found = true;
          }
        }
      }
      if (!found) {
        arr[h].append([key, val]);
      }
      console.log(arr[h].toString());
    },
    get: (key) => {
      let h = hash(key);
      let found = false;
      for (let i = 0; i < arr[h].size(); i++) {
        if (arr[h].at(i)) {
          if (arr[h].at(i).length === 2 && arr[h].at(i)[0] === key) {
            found = true;
            return arr[h].at(i)[1];
          }
        }
      }
      if (!found) {
        return null;
      }
    },
    remove: (key) => {
      let h = hash(key);
      let found = false;
      for (let i = 0; i < arr[h].size(); i++) {
        if (arr[h].at(i)) {
          if (arr[h].at(i).length === 2 && arr[h].at(i)[0] === key) {
            found = true;
            arr[h].removeAt(i);
            return found;
          }
        }
      }
      return found;
    },
    has: (key) => {
      let h = hash(key);
      for (let i = 0; i < arr[h].size(); i++) {
        if (arr[h].at(i)) {
          if (arr[h].at(i).length === 2 && arr[h].at(i)[0] === key) {
            return true;
          }
        }
      }
      return false;
    },
    length: () => {
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined) {
          for (let j = 0; j < arr[i].size(); j++) {
            if (arr[i].at(j)[0] !== null) {
              count++;
            }
          }
        }
      }
      return count;
    },
    keys: () => {
      let keys = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined) {
          for (let j = 0; j < arr[i].size(); j++) {
            keys.push(arr[i].at(j)[0]);
          }
        }
      }
      return keys;
    },
    values: () => {
      let values = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined) {
          for (let j = 0; j < arr[i].size(); j++) {
            values.push(arr[i].at(j)[1]);
          }
        }
      }
      return values;
    },
    entries: () => {
      let entries = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined) {
          for (let j = 0; j < arr[i].size(); j++) {
            entries.push(arr[i].at(j));
          }
        }
      }
      return entries;
    },
    clear: () => {
      return arr.splice(0, arr.length - 1);
    },
  };
};

function hash(key) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
  }

  return hashCode;
}

let map = hashMap();

map.set("a", 36);
map.set("b", 36);
map.set("sara", 36);
map.set("rasa", 32);
map.set("ab", 43);
map.set('abc',54)
map.keys();
console.log(map.get('abc'))
console.log(map.remove("abc"));
console.log(map.has('abc'))
console.log(map.length());
console.log(map.values());
console.log(map.entries());
