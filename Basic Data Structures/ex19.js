function getIndexToIns(arr, num) {
    arr.sort((a, b) =>  a - b);
    console.log(arr)
     if(arr.length==0){
       return 0
     }
   
     let index;
   
     for(let elem of arr){
       if(num<=elem){
         index = arr.indexOf(elem)
         break
       } else {
         index = arr.length
       }
     }
     return index;
   }
   
   console.log(getIndexToIns([2, 5, 10], 15));
   console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
   console.log(getIndexToIns([3, 10, 5], 3));