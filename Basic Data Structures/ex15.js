function repeatStringNumTimes(str, num) {
    if(num<0){
      return "";
    }
    let repeatstr = ""
    for(let i = 0; i<num;i++){
      repeatstr+=str
    }
    return repeatstr;
  }
  
   console.log(repeatStringNumTimes("abc", 4));