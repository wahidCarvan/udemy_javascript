// adding methods to objects
// objects can hold any types of data
// a method is function inside of an object
// the purpose of using methods to objects so we can use the same names stored in different objects
var obj ={
  name: 'wahid',
  age: 31,
  isCool: true,
  friends: ['billy','disco'],
  add: function(x,y){
    return x + y;
  }
}
// calling add 
obj.add(13,33)
// returns the sum 46

function speak() {
  return "MEOW!"
}
//calling the function
speak()
// returns MEOW

function speak() {
  return "WOOF!"
}
//calling the function
speak()
//returns woof
// we can use speak only onetime unless we add it to a object
// adding methods to an object
var dogSpace = {};
dogSpace.speak = function(){
  return 'WOOF!'
}
var catSpace = {};
catSpace.speak = function(){
  return "MEOW!"
}
//returns woof
dogSpace.speak()
"WOOF!"
//returns meow
catSpace.speak()
"MEOW!"