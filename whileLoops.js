// Loops looping through things
// DRY dont repeat your self
// while (some conditon){
//   run some code
//   code will run when while loop is true

// }

// printing numbers 1-5

var count = 1;
while(count< 6){
  console.log(" count is: " + count);
  count ++;
}

// printing hello
var str = 'hello';
// first character always starts at 0
// var count = 0;
// while( count< str.length){
  // count prints out the whole word
//   console.log(str[count]);
//   count ++;
// }
// prints the odd numbers between 1-10
var num = 1;
// while(num <= 10) {
//   console.log(num);
//   num +=2;
// }
// print all numbers between -10 and 19
// var num = -10;
// while(num <20){
//   console.log(num);
//   num ++;
// }
// print all even numbers between 10 and 40
// var num = 10;
// while(num <= 40){
//   console.log(num);
//   num +=2;
// }

// print all odd numbers between 300 and 333
var num = 300;
while(num <= 333){
if(num % 2 !==0){
  console.log(num);
    }
  num +=1;
}
// print all numbers divisible by 5 and 3 between 5 and 50

var num = 5;

while(num <=50) {
  if (num %5 ===0 && num % 3 === 0){


console.log(num);
}
num+=1;
}