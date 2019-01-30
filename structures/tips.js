//Tip: Consola 
//https://www.genbeta.com/desarrollo/exprimiendo-javascript-y-su-consola
//La consola JavaScript soporta varios niveles para organizar (log, info, warn, error, debug) 
console.log('mensaje consola');
console.info('mensaje info');
console.warn('mensaje warning');
console.error('mensaje error');
console.debug('mensaje debug');
//Una vez impresos podemos ir a la consola y filtrar por categoría

//Consola y formateadores
//%o imprime la estructura DOM
//%O imprime el objeto JavaScript
//var elementos = document.getElementsByTagName("p");
//console.log('dom: %o', elementos);

var concepto = {
  "concepto": "ordenador",
  "precio": 100
};
console.log("objetos  = %s euros", concepto);
console.log("concepto  = ", concepto);

//Tip: Get the unique values of an array in JavaScript.
//https://twitter.com/addyosmani/status/1080727964411674624?s=11

//Way 1: new Set()
const uniqueArray = arr => [...new Set(arr)];
//console.log(uniqueArray(['Dan', 'Sarah', 'Sophie', 'Sarah']));
//[ 'Dan', 'Sarah', 'Sophie']

//Way2: Array.from() and new Set()
const uniqueArray2 = arr => Array.from(new Set(arr));
//console.log(uniqueArray2(['Dan', 'Sarah', 'Sophie', 'Sarah']));
//[ 'Dan', 'Sarah', 'Sophie']

//Way3: Array.from() and new Set()
const seen = new Set();
const uniqueArray3 = arr => arr.filter(x => {
  if (seen.has(x)) return false; seen.add(x);
  return true;  
});
//console.log(uniqueArray3(['Dan', 'Sarah', 'Sophie', 'Sarah']));
//[ 'Dan', 'Sarah', 'Sophie']

//The Chronicles of JavaScript Objects
//https://blog.bitsrc.io/the-chronicles-of-javascript-objects-2d6b9205cd66
//Everything in JavaScript is an object, except: null, undefined, strings, numbers, boolean, and symbols

const firstName = 'Arfat Salman';

//An object can be thought of as a distinct entity that can have properties associated with it.
//These properties define the object’s characteristics and behavior. 

//Creation
//Properties of an object are just like variables. Let’s see how can we create objects and properties
// Creating an object using literal notation
const obj1 = { }; 

const obj2 = {   // Creating properties
    firstName: 'Alex',
    'lastName': 'Martin', // Using string quotes
    dateOfBirth: '18th October',
    friends: [ 'Bob', 'Christine' ]
};
console.log(obj2);

const obj3 = {
  nestedObj: {
    name: 'Alex'
  }
}
console.log(obj3);

//Creating objects using Object constructor
const obj4 = new Object();
console.log(obj4);

//Computed Properties 
const propertyName = 'firstName';
const obj5 = {
  [propertyName.toUpperCase()]: 'Alex',
}
console.log('obj5  = ', obj5);
// { FIRSTNAME: 'Alex' } 


