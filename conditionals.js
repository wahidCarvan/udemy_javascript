// conditionals
// making decsions with code
// conditional key words
// if 
// else if 
// else
//   if person is younger than 18 they cannot enter 
//     if they are between 18-21 they may enter and not drink
//       if they are 21 > they may enter and drink

        var userAge =  prompt("What is your age?")
      if (userAge<18){
        console.log("you are too young")
        } else if (userAge< 21){
          console.log(" you may enter but you cant drink!")
        } else{
          console.log("you may enter and drink")
        }
       //if age is negative
       if (age < 0){
        console.log("come back when you are a even number.");
      }
//if age is 21
       if (age ===21){
        console.log("happy 21 birthday.");
      }
// If age is odd (not evenly divisible by two) 
if ( age % 2 !== 0){
  console.log (" you age is odd.");
}
