console.log('hello');
// alert('yo wa');

/* document.getElementById
document.getElementsByClassName
document.getElementsByName
document.getElementsByTagName */
// e.t.c
/* Manipulate DOM with Javascript
 ...... It's just a fancy wayof saying change HTML with Javascript
how to get element(things) from html or other src
*/

/*document.getElementById('mine').innerHTML ='hydy';

/* how to ask quentions on a page
how to save the answer as a variable
*/

/*var age = prompt('what is your age');
console.log(age);
document.getElementById('age').innerHTML ='your age is' + age;

let num2 = 50;
var num3 = prompt('your next number');
var total = num2 - num3;
console.log(total);
document.getElementById('adition').innerHTML ='total is' + ' ' + total;

// Divide, mutiply *, remainder %.

// Increment/Decrement by any number you want

num2 += 20;
console.log(num2);

/* Functions
1. Create a function
2. Call the function
*/

// Create
/*function fun() {
    console.log('this si a function');
}

// Call
fun();

/* Let's create a function that take in a name
and says hello followed by your name

for example

Name: "olalekan"
Return: "Hello lalekan"
*/

/* function greetings(yourName) {
    var result = 'Hello' + ' ' + yourName;
    console.log(result);
}

var name = prompt('what is your name');
greetings(name); */

// How do arguments work in function?
// How do we add two 2 numbers together in a function?

function sumNumber(num2, num3){
    var result = num2 + num3;
    //console.log(result);
}

sumNumber(20, 20);

/* While loops

let num = 0;
while (num < 200) {
    num += 1;
    console.log(num);
}
*/

// For loops

for (let num = 0; num <= 200; num++) {
    console.log(num);
}

//Data types
let youeAge = 20; // number
let yourName = 'lekan'; // string
let names = {first: 'jane', last: 'doe'}; // object
let truth = false; // boolean
let groceries = ['apple', 'banana', 'oranges']; // array
let random; // underfined
let nothing = null; // value null

// Strings in Javascript (common methods)
let fruit = 'banana';
let morefruits = 'banana\napple';                    // new line

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 3));
console.log(fruit.replace('ban', 456));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[4]);
console.log(fruit.split(",")); //split by a comma
console.log(fruit.split("")); //split by a characters

// Array

// let fruit = ['banana', 'apple', 'orange', 'pineapples'];
fruit = new Array('banana', 'apple', 'orange', 'pineapples');

console.log(fruit[2]);  // access value at index 2nd

fruit[0] = 'pear';
console.log(fruit);

for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

// array common method
console.log('to string', fruit.toString());
console.log(fruit.join('-'));
console.log(fruit.join('*'));
console.log(fruit.pop(), fruit);   // removes the last item from an array
console.log(fruit.push('blackberies'), fruit);  //add to the last item in an array
console.log(fruit.shift(), fruit);   // removes the first item from an array
console.log(fruit.unshift('banana'), fruit);   // add to the first item in array
console.log(fruit[3]);
fruit[fruit.length] = 'new fruit';  // same as push
console.log(fruit);

let vegetables = ['asparagus', 'tomatos', 'broccoli'];
let allGroceries = fruit.concat(vegetables);   // combine array
console.log(allGroceries);
console.log(allGroceries.slice(2, 6));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumber = [2, 4, 0, 7, 5, 9, 6, 8, 3, 333, 223, 000, 444, 999, 567, 432, 245, 267, 264];
console.log(someNumber.sort(function(c, d) {return c-d}));  // ascending order
console.log(someNumber.sort(function(a, b) {return b-a}));  // descending order


let emptyArray = new Array()
for (let num =0; num <= 20; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);

// Objects in Javascript
// dictionaries in python

let student = {
    first: 'Olaelkan',
    last: 'Usman',
    age: 25,
    height: 230,
    studentInfo: function (){
        return this.first + '\n' +  this.last;
     }
};

console.log(student);
console.log(student.last);
student.first = 'my own name';  //change value
console.log(student.first);
student.age++;
console.log(student.age);

console.log(student.studentInfo());

// Conditional, Control flow (if else)
// && means AND Gate
// || means OR Gate

// var age = prompt('what is your age');

/* if ( (age >= 20) && (age <= 35) ) {
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
}  */

// Switch statements
// differeniate between weekday vs. weekend
// day 0 --> sunday --> weekend
// day 0 --> monday --> weekday
// day 2 --> tuesday --> weekday
// day 3 --> wednessday --> weekday
// day 4 --> thursday --> weekday
// day 5 --> friday --> weekend
// day 6 --> saturday --> weekend


var day = prompt('what day are we');

var week;

switch (day) {
    case '0':
        week = 'weekend';
        break;

    case '5':
        week = 'weekend';
        break;

    case '6':
        week = 'weekend';
        break;

    default:
        week = 'weekday';
}
console.log(week);

var grade = prompt('what is your grade');

var result;

switch (grade) {
    case 'A', 'a':
        result = "A Grade";
        break;

    case 'B', 'b':
        result = "B Grade"; 
        break;       

    case 'C', 'c':
        result = "C Grade";
        break;        
    default:
        result = "No Grade";
}

document.write(result);

const person = {
    first: 'Olaelkan',
    last: 'Usman',
    age: 25,
    height: 230,
    address: {   // embended object (puting an object inside an object)
        street: '50 main st',
        city: 'Boston',
        state: Map
    }
}

console.log(person.address.street);

const {first, last, address: { city }} = person; // pull propertices out of an object and use somewhere else

console.log(city);

// you can directly add propertices to an object

person.enail = 'john@gmail.com';

console.log(person);

// using tennary conditional statement with swicth

const x = prompt('what is x');

const color = x > 9 ? 'red' :'blue'  /* tenary condition the conition is if x is > 9,
 then(?) say red if not(:) say blue */

 switch (color) {
     case 'red':
         console.log('color is red');
        break;

     case 'blue':
          console.log('color is red');
        break;
 
     default:
        console.log('color is NOT red or blue');
         break;
 }

 function addNums() {
     return num2 * num3;
 }

 let num2 = prompt('enter num2');
 let num3 = prompt('enter num3');

 console.log(addNums(num2, num3));