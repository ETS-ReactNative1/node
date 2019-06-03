//Priority queues

//https://boyet.com/tdmalgorithms/priority-queues-ndash-part-one/
//https://github.com/google/closure-library Google's common JavaScript library 

//https://egghead.io/lessons/javascript-priority-queue-javascript-data-structure

//Queue example: Priority Queue

const [ createQueue ] = require('queue.js')

function createPriorityQueue() {
  const lowPriorityQueue = createQueue();
  const highPriorityQueue = createQueue();

  return {
      enqueue(item, isHigPriority = false) {
        isHigPriority
          ? highPriorityQueue.enqueue(item)
          : lowPriorityQuue.enqueue(item)
      },
      dequeue() {
        if (!highPriorityQueue.isEmpty()) {
            return highPriorityQueue.dequeue()
        }  
        return lowPriorityQueue.dequeue()
      },
      peek() {
        if (!highPriorityQueue.isEmpty()) {
            return highPriorityQueue.peek()
        }  
        return lowPriorityQueue.peek()      
      },
      length() {
        return highPriorityQueue.length + lowPriorityQueue.length
      },
      isEmpty() {
          return ( 
            highPriorityQueue.isEmpty() && 
            lowPriorityQueue.isEmpty()
          )
      }
  }
}

const q = createPriorityQueue();

q.enqueue('A fix here');
q.enqueue('A bug here');
q.enqueue('A new feature');

console.log(q.peek());