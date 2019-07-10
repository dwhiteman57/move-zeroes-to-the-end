let moveZeros = function (arr) {
  for(let i=0; i<arr.length; i++){
    arr.push(arr.splice(arr.indexOf(0), 1)[0]);
  }
  return arr;
}


console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))
console.log(moveZeros([0,0,4,9,3,0,0,5]))
