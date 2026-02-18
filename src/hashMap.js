import linkedList from './linkedList.js'

const hashMap = (load_factor = 0.75, capacity = 16) => {
  let arr = Array(capacity)
  return {
    set: (key, val) => {
      let idx = hash(key)
      arr[idx] = linkedList()
    }
  }
}

function hash(key) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = (primeNumber * hashCode + key.charCodeAt(i))%16;
  }

  return hashCode;
} 

