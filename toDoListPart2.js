// arrays start with [] brackets
// use an aray to model to do list
var toDos =['buy a new turtle'];
// ask user for input
var input = prompt("what would you like to do?");

// use a while a loop to keep asking until user types quit
while(input !== 'quit'){
if(input==='list'){
 console.log("*********")
  //looping throught the todos list
  //todo is the array i starts the items in the array starting at 0
  toDos.forEach(function(todo ,i){
    console.log( i + ": " +todo );
   
  });
  
} else if(input ==='new'){

// ask for new todo
var newToDO =prompt('enter your new todo.');
// pushes the users new to do into the end of the array toDos
toDos.push(newToDO)
console.log('added new to do');
} 
// adding the delete function
else if(input ==='delete'){
  //ask for index of todo to be deleted
  var index =prompt('enter index of todo you want to delete.')
  // delete that to do
  // splice() needs 2 arguments first is delete from where and second argument is what do you want to delete
  toDos.splice(index, 1)
  console.log('Deleted todo');
}
//ask for new input and it starts the loop over
input = prompt("what would you like to do?");
}
console.log('okay you quit the app');