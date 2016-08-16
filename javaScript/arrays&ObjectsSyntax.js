// objects and arrays syntax
// arrays used to store a list of data order matters
//objects are like dictionaries
// array
var cats =['art','tom','steve'];
// returns tom
cats[1];
// adding to the end of the array
cats.push('dan');
//changing the value changes tom to lucy
cats[1] = 'lucy'
// object
var cat ={
  name:'bob',
  breed:'catty'
};
// returns bob
cat.name
// adding to the object

cat['age']=6
// or
cat.age=6;

// changing a value
cat.breed ='red cat'

// objects inside of arrays and vice versa
var posts = [
  {
  title:"cats are fun",
  author:"Carvan",
  comments:['i love cats', 'i hate you']
  },
  {
  title:'dogs are mean',
  author:'wahid',
  comments:['i love dogs', 'i hate dogs']
  }
]

// accessing the object
//returns "cats are fun" 
posts[0].title
// returns i hate dogs
posts[1].comments[1]

var someObject = {
  friends:[
{name:'wahid'},
{name:'wildBill'},
{name:'wayne'}
  ],
  color:'baby blue'
  isEvil:true;
}

// accessing wahid
someObject.friends[0].name
