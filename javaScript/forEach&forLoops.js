for loops and for each are used to iterate through arrays

  // array of colors
var colors = ['red','blue','green','white'];
// using a for loop
for(var i = 0; i <colors.length; i++){
  console.log(colors[i]);
}
// using a for each to loop through the array
// placeHolder can be any name
colors.forEach(function(placeHolder){
alert(placeHolder);
});
// using a while loop to loop through the colors array
var count = 0;
while(count<colors.length){
  console.log(colors[count]);
  count ++;
}

// testing functions
function printColor(color){
  console.log(color);
}
printColor('red');
// printing the numbers that are divisible by 3
var numbers =[1,2,3,4,5,6,7,8,9,10];
numbers.forEach(function(count){
  if(count % 3=== 0){
    console.log(count);
  }
});