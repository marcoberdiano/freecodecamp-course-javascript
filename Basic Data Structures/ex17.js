function titleCase(str) {

    let newstr = str.split(" ");
    let newarr = []
    let caparr
    
    for(let word of newstr) {
      let firstL = word.substring(0,1).toUpperCase()
      let lastL = word.substring(1).toLowerCase()
      newarr.push(firstL+lastL)
    }
    
    caparr = newarr.join(" ");
    
    
      return caparr;
    }
    
    console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
    
    console.log(titleCase("sHoRt AnD sToUt"));
    
    console.log(titleCase("I'm a little tea pot"));

    console.log(titleCase("ERIKA e LINDA"));