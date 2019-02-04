//Tip: Escribir objeto a JSON 
//https://es.quora.com/C%C3%B3mo-hago-un-archivo-JSON-con-JavaScript
//writeFile(), recibe 4 parametros, el path o ruta del archivo con nombre y extension,
//los datos a guardar en dicho archivo, la codificacion de caracteres a usar y como todo en javascript un callback.

'use strict';
const fs = require('fs');

let student = {  
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    car: 'Honda',
    languages: ["JavaScript", "Python", "C++"],
    "best friends": {"name": "Marco", "age":15}
};

let data = JSON.stringify(student);  
fs.writeFileSync('student.json', data); 

data = fs.readFileSync('student.json');  
student = JSON.parse(data);  
console.log(student);  

//Tip: Consola 
//https://www.genbeta.com/desarrollo/exprimiendo-javascript-y-su-consola
//La consola JavaScript soporta varios niveles para organizar (log, info, warn, error, debug) 
//console.log('mensaje consola');
//console.info('mensaje info');
//console.warn('mensaje warning');
//console.error('mensaje error');
//console.debug('mensaje debug');
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
//console.log("objetos  = %s euros", concepto);
//console.log("concepto  = ", concepto);

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


