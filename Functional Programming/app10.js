// Only change code below this line
// Only change code below this line
function urlSlug(title) {
    return title.trim().split(/\s+/).map(word=>word.toLowerCase()).join("-")
    }
    // Only change code above this line
    console.log(urlSlug(" Winter Is  Coming"));