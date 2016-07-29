// arrays start with [] brackets
// use an aray to model to do list
var toDos =['buy a new turtle'];
// ask user for input
var input = prompt("what would you like to do?");

// use a while a loop to keep asking until user types quit
while(input !== 'quit'){
if(input==='list'){
  console.log(toDos);
} else if(input ==='new'){
// ask for new todo
var newToDO =prompt('enter your new todo.');
// pushes the users new to do into the end of the array toDos
toDos.push(newToDO)
}
//ask for new input and it starts the loop over
input = prompt("what would you like to do?");
}
console.log('okay you quit the app');