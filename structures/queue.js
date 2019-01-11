//queue
//Algorithms in JavaScript. 40 Problems, Solutions, and Explanations
//https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038
//JavaScript Algorithms and Data Structures
//https://github.com/trekhleb/javascript-algorithms/blob/master/README.md
//Data Structures and Algorithms in JavaScript
//https://egghead.io/courses/data-structures-and-algorithms-in-javascript
//Queue data structure in javascript
//https://egghead.io/lessons/javascript-queue-data-structure-in-javascript

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
console.log(q.isEmpty())

q.enqueue('Make a lesson')
q.enqueue('Help others learn')
q.enqueue('Be happy')

q.dequeue()
q.dequeue()
q.dequeue()
console.log(q.peek())
console.log(q.isEmpty())

//node queue.js