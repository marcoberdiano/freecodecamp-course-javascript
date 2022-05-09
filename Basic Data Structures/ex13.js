function largestOfFour(arr) {

    let largestArr = [];
    
    for(let arr2 of arr){
      let largest = arr2[0];
      for(let num of arr2){
        if(num>=largest){
          largest = num;
        }
      }
      largestArr.push(largest);
    }
    
      return largestArr;
    }
    
    console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));