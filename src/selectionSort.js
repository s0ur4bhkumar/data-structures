let arr = [7, 12, 9, 11, 3];

for (let i = 0; i < arr.length; i++) {
  let min_index = i
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[i]) {
      min_index = j
    }
  }
  [arr[i],arr[min_index]] = [arr[min_index],arr[i]]
}
console.log(arr);
