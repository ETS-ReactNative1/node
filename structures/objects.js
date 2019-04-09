//The Chronicles of JavaScript Objects
//https://blog.bitsrc.io/the-chronicles-of-javascript-objects-2d6b9205cd66
//Everything in JavaScript is an object, except: null, undefined, strings, numbers, boolean, and symbols

const firstName = 'Arfat Salman';

//An object can be thought of as a distinct entity that can have properties associated with it.
//These properties define the object’s characteristics and behavior. 

//CREATION
//Properties of an object are just like variables. Let’s see how can we create objects and properties
// Creating an object using literal notation
const obj1 = { }; 

const obj2 = {   // Creating properties
    firstName: 'Alex',
    'lastName': 'Martin', // Using string quotes
    dateOfBirth: '18th October',
    friends: [ 'Bob', 'Christine' ]
};
//console.log(obj2);

const obj3 = {
  nestedObj: {
    name: 'Alex'
  }
}
//console.log(obj3);

//Creating objects using Object constructor
//const obj4 = new Object();
//console.log(obj4);

//Computed Properties 
const propertyName = 'firstName';
const obj5 = {
  [propertyName.toUpperCase()]: 'Alex',
}
//console.log('obj5  = ', obj5);
// { FIRSTNAME: 'Alex' } 

//Function as key values
const obj6 = {
  firstName: 'ALEX',
  lastName: 'MARTIN',
  printFullName() {
    return `${this.firstName} ${this.lastName}`
  }
};
//console.log(obj6.printFullName());
//=> 'ALEX MARTIN'

//ADITION
//After we have created our object, we can add properties
const obj7 = {};
//console.log(obj7);

obj7.address1 = 'Earth1';
obj7["adress2"] = 'Earth2' // Note the quotes
const propName = 'address3';
obj7[propName]  = 'Earth3' // No string quotes
obj7[5] = 'five'; // 5 is coerced to a string to make '5'
obj7['first name'] = 'Alex'; // property as string
obj7['first-name'] = 'alex'; // property as string
//console.log(obj7);

//READING
//After we have created our object, we can add properties
//console.log(obj7.address1);        // => 'Earth1'
//console.log(obj7['first name']);   // => 'Alex'
//console.log(obj7['middleName']);   // => undefined

//PROTOTYPES
const obj8 = {Name: 'Alex'};
//console.log(obj8.firstName);           // => undefined
//console.log('Name' in obj8);           // => true
//console.log('Age' in obj8);            // => false
//console.log('isPrototypeOf' in obj8);  // => true (property of parents)
//console.log(obj8.hasOwnProperty('Name'));             // => true
//console.log(obj8.hasOwnProperty('middleName'));       // => false
//console.log(obj8.hasOwnProperty('isPrototypeOf'));    // => false

//UPDATE
obj8.firstName = 'Timothy';
//console.log(obj8);
obj8['firstName'] = 'Sarah';
//console.log(obj8);

//DELETE
delete obj8.Name;                    // => true
//console.log(obj8);
delete obj8['firstName'];            // => true
//console.log(obj8);

//ITERATE
const obj9 = {
  firstName: 'Alex',
  'lastName': 'Martin', // Using string quotes
  dateOfBirth: '18th October',
  friends: [ 'Bob', 'Christine' ]
};

for (const property in obj9) {
  const value = obj9[property]; // Read the value 
//  console.log(property, value);
}
// firstName Alex
// lastName Martin
// dateOfBirth 18th October
// friends [ 'Bob', 'Christine' ]

const allProperties = Object.keys(obj9); 
// => [ 'firstName', 'lastName', 'dateOfBirth', 'friends' ]
//console.log(allProperties);

for (const property of allProperties) {
  const value = obj9[property];
//  console.log(property, value);
}
const allValues = Object.values(obj9);
// => [ 'Alex', 'Martin', '18th October', [ 'Bob', 'Christine' ] ]
//console.log(allValues);

const allEntries = Object.entries(obj9);
// => Output
[ [ 'firstName', 'Alex' ],
  [ 'lastName', 'Martin' ],
  [ 'dateOfBirth', '18th October' ],
  [ 'friends', [ 'Bob', 'Christine' ] ] ]
//console.log(allEntries);
  
for (const [key, value] of Object.entries(obj9)) {
//    console.log(key, value);
}

const allKeys = Reflect.ownKeys(obj9);
//console.log(allKeys);

//COMPARE
const obj11 = {
  name: 'Alex',
}
const obj12 = {
  name: 'Alex',
}
//console.log(obj11 === obj12);    // => false
//console.log(obj11  == obj12);    // => false
//console.log(obj11 === obj11);    // => true
//console.log(obj11  == obj11);    // => true

//COPIAR REFERENCIA
const obj13 = obj11;
//console.log(obj11 === obj13);    // => true
//console.log(obj11  == obj13);    // => true

//COPIAR CONTENIDO
const obj14 = {
  name: 'Alex',
  nestedObj: {
    address: 'Earth'
  }
}

// Spreading the properties of obj14
//const obj15 = {
//  ...obj14      
//}
//console.log(obj15);
//console.log(obj14 === obj15);    // => false

//JSON.stringify
//We take a JSON representation of an object and parse it again 
//to create another object with the same key-value pairs.
//This has the nice property that nested objects are also deeply copied.
const obj16 = JSON.parse(JSON.stringify(obj14));
//console.log(obj16);
//console.log(obj14 === obj16);    // => false

//Object.assign
//The assign function takes a source and a target object.
//It copies all the enumerable, own key-value pairs in the target from the source.
const obj17 = Object.assign({}, obj14);
//console.log(obj17);
//console.log(obj14 === obj17);    // => false
//console.log(JSON.stringify(obj14) == JSON.stringify(obj17));  // => true

//ARRAYS are objects too
const arr = ['Alex', 'Earth'];
//console.log(typeof arr);       // => object
//console.log(Object.entries(arr)); 
//console.log(arr.length); 
// [ [ '0', 'Alex' ], [ '1', 'Earth' ] ]

//FUNCTIONS are objects too
function func1() {
  return 'Alex';
}
typeof func1;             // => 'function'
func1.name;               // => 'func1'
func1.address = 'Earth';  // Setting our own property
func1.address;            // => 'Earth' 
func1['address'];         // => 'Earth'
//console.log(func1());     // => 'Alex'

//EXERCISES
//Given an object, make a copy of the object with all key names capitalized.
console.log('TODO: EXERCICES')

const obj21 = { name: 'Alex' };
//const newObj21 = capitalize{obj21};
// => { NAME: 'Alex' }

//const newObj21 = {... obj21};
//newObj.allKeys.toUpperCase;
//console.log(newObj);

const obj22 = {
  firstName: 'ALEX',
  lastName: 'MARTIN'
};
/*
const newObj22 = objectMap(obj22, (key, value) => {
  return [
    key.toUpperCase(),
    value.toLowerCase(),
  ];
});
*/
// => { FIRSTNAME: 'alex', LASTNAME: 'martin' }

//7 Tricks with Resting and Spreading JavaScript Objects
//https://blog.bitsrc.io/6-tricks-with-resting-and-spreading-javascript-objects-68d585bdc83

//1. Adding Properties

const user = { id: 100, name: 'Howard Moon'};
//const userWithPass = { ...user, password: 'Password!' };
//... definido a partir de node 8.2.1

console.log(user);         //=> { id: 100, name: 'Howard Moon' }
//userWithPass //=> { id: 100, name: 'Howard Moon', password: 'Password!' }