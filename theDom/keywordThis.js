// The keyword this
// In JavaScript, the thing called this, is the object that "owns" the JavaScript code. The value of this, when used in a function, is the object that "owns" the function. The value of this, when used in an object, is the object itself. The this keyword in an object constructor does not have a value.

var comments ={};
comments.data =[ 'good job','bye', 'you are great'];
function print(arr){
  arr.forEach(function(com){
    console.log(com)
  })
}
// prints the comments
comments.print()
