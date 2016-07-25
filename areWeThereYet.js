// are we there yet app using if else statements

var answer = prompt('are we there yet?');
// check users input

if(answer === 'yes'){
  alert("yes, we made it");

}else{
  var answer = prompt('are we there yet?')
}
// using a while loop
var answer = prompt('are we there yet?');
while(answer !== 'yes' !=='yeah'){
  var answer = prompt('are we there yet?')
}
alert(' yes, we made it.')
// entering any phrase that has any string yes or yeah in it.

var answer = prompt('are we there yet?');
//  means the word does not exist in our answer
while(answer.indexOf('yes')===-1){
  var answer = prompt('are we there yet?')
}
alert(' yes, we made it.')