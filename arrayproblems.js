// printing in reverse order

function printReverse(arr){
  //arr.length starts at the end of the array instead of at zero we add -1 because the lenght is alays 1 greater than the index
for(var i = arr.length -1; i>= 0; i--) {
  console.log(arr[i]);
}
    }
printReverse([3,6,2,5])

// write a function is uniform which takes a single array and returns true if all elements in the array are idenitical


// sum array
function sumArray(arr){
  var total =0;
  arr.forEach(function(element){
    total += element;
  });
  return total;
}