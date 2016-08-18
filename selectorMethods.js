//DOM SELECTORS
// displays the site name
// document.URL;
// // displays the head code
// document.head;
// // displays the body code
// document.body;
// // displays the links and all the anchor tags in the page
// document.links;
// // 5 different methods to select elements
// document.getElementById()
// document.getElementByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()
//selecting by id
var tag = document.getElementById('highlight');
//selecting by class name
var tags = document.getElementsByClassname('bolded');
// tags[0] returns the first item
// tags.lenght returns 2
// selecting by html tags such as h1 li p body etc.
var tags = document.getElementsByTagName('li');
// selects only the first item in the body
var tags = document.getElementsByTagName('body')[0];

// using query selector
//# used for ids . used for classes
var tag = document.querySelector("#highlight")
// returns only the first selector
var tag = document.querySelector(".bolded")
//can be used for html elements as well
// var  can be anyname
var h1 = document.querySelector("h1');                        
   // null means not found
// selects all classes with bolded
   var bolded = document.querySelectorAll(".bolded")