function chunkArrayInGroups(arr, size) {
  
    let novoarr = [];
    let tamanho = arr.length;
    let quantidade = tamanho / size;
    let step = 0;
    
    for(let i = 0; i < quantidade; i++) {
        novoarr.push(arr.slice(step,size+step))
        step+=size;
    }
    
      return novoarr;
    }
    
    console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 4, 5, 7], 3));