function sumAll(arr) {

    let begin=arr[0];
    let final=arr[1];
    let sum = 0;
  
    if(arr[0]>=arr[1]) {
      begin = arr[1]
      final = arr[0]
    } 
    
    for(let i = begin; i <= final; i++){
      sum += i;
    }
  
    return sum;
  }
  
  let solution = sumAll([10, 5]);
  
  console.log(solution)