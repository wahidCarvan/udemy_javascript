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
function area (lenagth, width){
  console.log(length * width);
}

area(5,9);