const squareList = arr => {
    // Only change code below this line
    let arrPositiveInteger = [];
    
    arrPositiveInteger = arr.filter(val=>val>0 && Number.isInteger(val));
  
    
    arr = arrPositiveInteger.map(val => val*val)
    
    return arr;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);