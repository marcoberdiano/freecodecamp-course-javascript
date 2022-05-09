function mutation(arr) {
    let arr1 = [...arr[0]];
    let arrResult = [];
      
      for(let val of arr[1]) {
        let result = false;
        for(let i = 0; i < arr1.length; i++){
          if(val.toUpperCase()===arr1[i].toUpperCase()){
            result = true;
          }        
        }
        arrResult.push(result);
      }
  
      /*for(let finalResult of arrResult) {
        if(!finalResult){
          return false;
        }
      }*/

      
      if(arrResult.every( elem => elem=== true)){
        return true
      }  else {
        return false;
      }
      
  
    //return true;
  }
  
  console.log(mutation(["hello", "hey"]));