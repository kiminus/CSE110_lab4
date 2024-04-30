function modifyArray(arr, cb) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(cb(arr[i]));
  }
  return res;
}

function ds(num) {
  return num * 2;
}

console.log(modifyArray([1, 2, 3], ds));
