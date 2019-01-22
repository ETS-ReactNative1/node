//queue
//Algorithms in JavaScript. 40 Problems, Solutions, and Explanations
//https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038
//JavaScript Algorithms and Data Structures
//https://github.com/trekhleb/javascript-algorithms/blob/master/README.md
//Data Structures and Algorithms in JavaScript
//https://egghead.io/courses/data-structures-and-algorithms-in-javascript
//Queue data structure in javascript
//https://egghead.io/lessons/javascript-queue-data-structure-in-javascript
//
// RUN
// node queue.js


function createQueue() {
    const queue = []

    return {
        enqueue(item) {
            queue.unshift(item)
        },
        dequeue() {
            return queue.pop()
        },
        peek() {
            return queue[queue.length-1]
        },
        get length() {
            return queue.length
        },
        isEmpty() {
            return queue.length === 0
        }

    }
}

const q = createQueue()
console.log(q.isEmpty());
console.log(q.length);

q.enqueue('Make a lesson')
q.enqueue('Help others learn')
q.enqueue('Be happy')

q.dequeue()
q.dequeue()
q.dequeue()
console.log(q.peek())
console.log(q.isEmpty())


function test(){
  console.log("\n*** Queue Test ***");
  
  console.log("\n* creatQueue()");  
  console.log("when a Queue is created then is empty");
  //console.log("..is empty");
  // console.log("ERROR: is not empty " + "(FALSE)");
  //console.log("..length is zero");
  //console.log("ERROR: length is not zero " + "(4)");
  //console.log("..peek() is undefined");

  console.log("\n* enqueue()");
  console.log("when enqueue a value then value is inserted in head");
  //console.log("..is not empty");
  //console.log("..length is not zero");
  //console.log("..peek() return the value enqueue");

  console.log("\n* dequeue()");
  console.log("when dequeue a value the value is delete from tail");
  //console.log("..is not empty");
  //console.log("..length is not zero");
  //console.log("..peek() return the value enqueue");

  console.log("\n* peek()");
  console.log("when peek() an empty queue then return undefined");
  console.log("when peek() an non empty queue then return value at tail and queue is not modified");
  
  console.log("\n* length return the number of elements in queue");
  console.log("when peek() an empty queue then return 0");
  //console.log("when .. then..");
  
  console.log("\n* isEmpty() return if queue is empty");
  console.log("when queue is empty then return TRUE");
  console.log("when queue is not empty then return FALSE");
  
  return;
}

test();
//RUN
//node queue.js