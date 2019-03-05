//Javascrip Strings methods
//https://twitter.com/davidwalshblog/status/1099853694210920450?s=11
"YES!".bold();
"Yes!".blink();
"Yes!".italics()


//VisualCode Tip:
// Select text
// Cmd-F/Ctrl-F searches for the selected text. No need to copy-paste! 

//Tip: Run copy(obj) in the @ChromeDevTools console to copy an object to your clipboard.
//     Paste in an editor
//https://twitter.com/addyosmani/status/1092686766375616517?s=11

//Tip: Escribir objeto a JSON 
//https://stackabuse.com/reading-and-writing-json-files-with-node-js/
//https://nodejs.org/api/fs.html
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
fs.unlinkSync('student.json');

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


