// functions
// define function than call it

function sayHi() {
  console.log("hello");
  console.log('goodbye');
}
// calling the function
sayHi();
// singing twinkle little star
function singSong(){
  console.log('twinkle, twinkle, little star');
  console.log('How I wonder what you are');
  console.log('Up so High');
  console.log('You are so cute');

}
// calling the code over and over
singSong();
singSong();
singSong();
singSong();

// we want functions to take arguments to help us out

function square(num){
  console.log(num * num);
}

square(5);
// say hello
function sayHello(){
  console.log('hello there');
}
// prints hello there wahid
function sayHi(name){
  console.log('hello there ' + name + '!');
}
sayHi('wahid');
// functions with multiple arguments
//prints 45
function area (length, width){
  console.log(length * width);
}

area(5,9);

// hi

function greet(person1, person2, person3){
  console.log("hi " + person1);
  console.log("hi " + person2);
  console.log("hi " + person3);
}
greet("ant", 'mike', 'dan');
// return key word used to capture the value thats coming out the function
// input
// function
// output
  
  function square(x){
    console.log(x * x);
  } 
  square(4);  
// using the return keyword
  function square(x){
    return(x * x);
  }  
 "4 squared is " + square(4);
var result= square(9);
// this function capitalizes the first char(character) in a string;
function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}
var city = 'paris';
var capital = capitalize(city);

// the return key word stops execution of a function
function capitalize(str){
if(typeof str ===='number'){
  return " that's not a string!"
}
return str.charAt(0).toUpperCase() + str.slice(1);
}
var city= 'paris';
var capital = captalize(city);
var num =47
var capialize(num);

// function delcaration
function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}
// function expression
var capitalize = function(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function test(x){
  return x*2;
  // none of the code runs after return once return is hit all other code stops
  console.log(x);
  return x/2;
}
test(40);

// write a function if number is even returns true otherwise return false
function isEven(num){
if(num % 2===0){
  return true;
}else {
  return false;
  }
}
// same code as above in a shorter way
function isEven(num){
  return num %2 ===0;
}
// write a fucntion factorial which takes a single numeric argument and returns the factorial of that number
function factorial(num){
  // define a result variable
var result =1;
// calculate factorial and store in result
for(var i =2; i<=num; i++){
  result = result *1;
}

}
// factorial(4)4 x 3 x 2 x 1
// replacing strings from kebab case to snake case
function kebabToSnake(str){
  // replace all -'s with underscores
  var newStr = str.replace(/-/g , "_");
  return newStr;
}
kebabToSnake('hey-love');
//returns hey_love

// scope is the context that code is executed in 
// the variable x is inside of the function
function doMath(){
  var x=40;
  console.log(x);
}
// x is not defined outside of the above scope
// x becomes a global scope which can be accessed anywhere even in the function

var x ='hello';
x will return 'hello'
// returns 99
var y =99;
function doMoreMath(){
  console.log(y);
}
doMoreMath();
// stays 100 when called using the function
function doMoreMath(){
  y =100;
  console.log(y);
}
// everyfunction has its scope
// higher order functions
// we can pass fucntions into other functions
// setInterval times things out
function sing(){
  console.log("hey how are ya?");
  console.log("I am well.");
}
setInterval(sing,1000);
// clearInterval(the number console gives ends the functions excution);
// setInterval(name of function, and time);
// 1000=1 second

// using an annoymous function that will only be used once they are used when nesting in to other functions
setInterval(function(){
console.log("I am an anonymous function!");
console.log("we are getting there");
},2000);
