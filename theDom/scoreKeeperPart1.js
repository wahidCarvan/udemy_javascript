//selecting the  buttons
var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
// selecting the h1 to make the changes in the score
// p2
var p1Display =document.
querySelector('#p1Display');
//p2
var p2Display =document.
querySelector('#p2Display');
//keeping scores
// p1
 var p1Score =0;
 // p2
 var p2Score =0;
 // when the game ends starts at false because we dont want the game to end before it starts
 var gameover=false;
 // saving the score of when the game is over
 var winningScore=7;
//making the buttons clickable
p1Button.addEventListener("click",function(){
  if(!gameover){
     p1Score++;
      if(p1Score===winningScore){
      alert('gameover');
      //disables the button
      gameover=true;
     }
 p1Display.textContent=p1Score;
  }
});
//p2
p2Button.addEventListener("click", function(){
  if(!gameover)
    p2Score++;
      if(p2Score===winningScore){
      alert('gameover');
      //disables the button
      gameover=true;
    }
  p2Display.textContent=p2Score;
});