//arrays

//storing customer data, for example

//allow us to group similar variables together, and refer to the values by location
//location or index is 0 based

//can add values using the push method

// var customerNames = [];

// customerNames.push('Sam Smith'); //0
// customerNames.push('Tommy Guns'); //1

// console.log(customerNames[1]);

// for (let i=0; i < customerNames.length; i++){
//     console.log(customerNames[i]);
// } 

// for ( name of customerNames){
//     console.log(name);
// }

//arrays allow us to dynamically add info


//functions:
//writing instructions - making code reusable. parameters
//need 3 things: function keyword, name of function, (), {}
//parameters around 3, responsible for only 1 thing
//instructions:
// function myFunction(){
//     for(let i=0; i<100; i++){
//         console.log(i);
//     }
// }

//declaring a function does not result in code being printed
//using the instructions/ invoking a function:
// myFunction();

// function createFullName(firstName, lastName){
//     console.log(firstName + ` ` + lastName);
// }


// //return statement will end the function, won't print
// function createFullName(firstName, lastName){
//     return firstName + ` ` + lastName;
// }

// //think of a vending machine-> using a return, to be used later
// var fullName = createFullName(`Tom`, `Sawyer`);//arguments are passed into parameters
// console.log('Welcome, ' + fullName);
// //parameters are just place holders. cant know values until it's called
// //give descriptive names, verbs because functions=actions

//5 methods in arrays

//map- useful to transform the info in an array in some manner
//example: making array of length of names from array of names

// let names = ['Sam', 'Tom', 'Eric', 'Sally', 'Nicholas'];
// let lengths = names.map(function(element) {
//     return element.length;
// });
// console.log(lengths);
//will print [3, 3, 4, 5, 8]

//reduce- taking all values in an array and reducing it to one
//summing all values, average, for example

//sum of length array:

// let sum = lengths.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// });
// console.log(sum);

//for each method- like map but does not return a new array

// names.forEach(function(element){
//     console.log(element);
// });

//filter method- returns a boolean value on each element in array
//new array for all true elements

// let evens = names.filter(function(element) {
//     return element.length % 2 == 0;
// });
// console.log(evens);

//splice method- alter contents of an array, adding modifying
//or removing (most common) from a specific location

// let removedElement = names.splice(1, 1);
// console.log(removedElement)
//returns an array of the element(s) removed

//Objects: 
//grouping data together. 
//object literals: make up an objects property and methods

// var dvdPlayer = {
//     height: 3,
//     width: 18,
//     depth: 12,
//     weight: 7,
//     color: 'black',
//     dvdName: 'Mulan',
//     printDVDName: function(){
//         console.log(this.dvdName);
//     }
// };
//key and values. method is a function that belongs to an object
//dot notation
//this. -> refer to the object itself because it does not live outside the objects

// console.log(dvdPlayer.depth);
// dvdPlayer.printDVDName();

//javascript has built in objects, can look them up to use them.

//equality vs identity:

// = , ==, ===