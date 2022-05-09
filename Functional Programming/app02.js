// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add([...arr],bookName) {
  
  arr.push(bookName);
  return arr;
  
  // Change code above this line
}

// Change code below this line
function remove([...arr],bookName) {
  
  const book_index = arr.indexOf(bookName);
  
  if (book_index >= 0) {

    arr.splice(book_index, 1);
    return arr;

    // Change code above this line
    }
}


let books = add(bookList,"Anne of Green Gables")
console.log(books)
console.log(remove(books,"Anne of Green Gables"))