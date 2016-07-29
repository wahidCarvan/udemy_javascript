array methods
push pop
shift unshift
indexOf
slice
var colors = ['red','yellow','blue','purple','orange'];
// adding to the above array
// use pop to add to the end of the array
// pop removes the last item in the array
//adds black to the end of the array
colors.push('black')
// removes the last element in the array
colors.pop()
// shift/unshift
// add and remove from the beggining of the array
// unshift adds to the front of the array
colors.unshift('pink')
// removes the first item in the array
nums.shift()

// indexOf method finds things in the array returns 0 since red is the first item in the array
colors.indexOf('red');
var friends =['charlie','liz', 'david','mike','liz'];
// returns 1 not 4 because it returns only the first one
friends.indexOf('liz'); 
// return -1 because the element is not present
friends.indexOf('wahid');

// slice()used to copy parts of an array
var fruits = ['banan','orange', 'lemon','apple','mango'];
// use slice to copy the 2nd and 3rd fruits
// specify index where the new array starts(1) and (3)
// it does not alter the original array
// takes to arguments starting point and ending point but it does not include the item we stopped at.
var citrus = fruits.slice(1,3);

// slice() can also be used to copy an entire array
var nums = [1,2,3];
var otherNums =nums.slice();
// both arrays are the same now
var numbers = [22,67,33,96,88];
// what does the following line print?
console.log(numbers[numbers.length])
// prints undefined because there are only 5 numbers and the count starts at 0
var friendGroups =[
['harry','ron','hermet'],
['mike','carl','john'],
['money','love','hate']
];
// prints money because it goes to the last array and chooses the first item
console.log(friendGroups[2][0]);