// for loops 

// for( intiitalize; condition; step){
//   // run some code
// }

// // printing the number 1-5 using a for loop

// var count =1;
// for(var count = 0; count<6; count++){
//   console.log(count);
// }

// // using a while loop to print the numbers 1-5

// var count = 1;

// while(count<6){
//   console.log("count is: " + count);
//   count ++;
// }

// // printing each character in a string using a for loop
// var str= 'hello';
// for(var i =0; i <str.length; i++){
//   console.log(str[i]);
// }
// // starts at h since 1 is  and prints every other letter
// var str = 'ahceclwlxo';
// for (var i = 1; i < str.length; i+=2){
//   console.log(str[i]);
// }

// writing forloops
// print all numbers between -10 and 19

for(var count =-10; count <=19; count++){
  console.log(count);
}
// print all even numbers between 10 and 40


for(var i =10; i <=40; i+=2){
  console.log(i);
}
// another better way of doing it.
for( var i =10; i <=40; i +=1){ if(i % 2===0){

  console.log(i);
}
  }
// print all odd numbers between 300 and 333

for(var i =300; i<= 333; i++){
  if(i %2 !===0){
     console.log(i);
  }
 
}

// print all numbers divisible by 5 and 3 between the number 5 and 50


for(var i =5; i<=50; i++){
  if(i % 5 ===0 && i % 3===0){
    console.log(i);
  }
  
}