//Pruebas asincronas en node.js
//http://pinchito.es/2013/pruebas-asincronas.html

//Async/Await how they really work: an example
//Async-Await it's built on promises, so it's async code that looks and behaves a little more like synchronous code.
//https://www.ma-no.org/en/content/index_async-await-how-they-really-work-an-example_2420.php

//callback
setTimeout(() => {
    console.log('This runs after 1000 milliseconds.');
  }, 1000);
console.log('Ready!');

//promise
const promiseFunction = new Promise((resolve, reject) => {
  const add = (a, b) => a + b;
  resolve(add(2, 2));
});
  
promiseFunction.then((response) => {
  console.log(response);
}).catch((error) => {
  console.log(error);
});

// Async/Await
const asyncGreeting = async () => 'Async Greetings';
// Promises
const promiseGreeting = () => new Promise(((resolve) => {
  resolve('Promise Greetings');
}));
asyncGreeting().then(result => console.log(result));
promiseGreeting().then(result => console.log(result));

//Ejemplo Conversor Monedas
