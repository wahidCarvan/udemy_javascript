// intro the DOM
// where js meets html and css
// THE dom documnet object model
// the dom is the interface between html , css and javascript
// the browser turns every html tag into a javascript object that we can manipulate
// everyting is stored inside of the document object
// the process 
// select an element and the manipulate the element
// changing the h1 to red
var h1 = document.querySelector('h1');
h1.style.color='red';
// changing the body to blue
// slecting the body

var body = document.querySelector("body");
// sets the page to default white
var isBlue = false;
// chnaging the color every 3 seconds
setInterval(function(){
    if (isBlue){
        body.style.background='white';
    } else{
        body.style.background='blue';
    }
    isBlue =!isBlue;
}, 3000);


