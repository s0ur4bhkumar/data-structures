function merge(l1, l2) {
  let result = [];
  let k = 0;
  let i = 0;
  let j = 0;
  while (i < l1.length && j < l2.length) {
    if (l1[i] < l2[j]) {
      result[k] = l1[i];
      i++;
      k++;
    } else {
      result[k] = l2[j];
      j++;
      k++;
    }
  }
  result.push(...l1.slice(i), ...l2.slice(j));
  return result;
}


function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let result = [];
  let mid = Math.round(arr.length / 2);
  let right = arr.slice(mid);
  let left = arr.slice(0, mid);
  return result.concat(merge(mergeSort(left),mergeSort(right)))
}

console.log(mergeSort([4]))
