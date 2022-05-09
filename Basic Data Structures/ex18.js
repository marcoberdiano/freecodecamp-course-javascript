function frankenSplice(arr1, arr2, n) {
    let newarr2 = arr2.slice();

  for(let elem = arr1.length-1; elem >= 0; elem--) {
    newarr2.splice(n,0,arr1[elem])
  }

  return newarr2;
}

console.log(frankenSplice([1, 2], ["a", "b"], 1));