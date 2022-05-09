function confirmEnding(str, target) {
    let exist = false;
    if(str.substring(str.length-target.length)==target)
    {
      exist = true;
    }
    return exist;
  }
  
  console.log(confirmEnding("Bastian", "n"));
  console.log(confirmEnding("Congratulation", "on"));
  console.log(confirmEnding("Connor", "n"));
  
  console.log(confirmEnding("He has to give me a new name", "name"));