// https://egghead.io/lessons/javascript-sort-an-array-with-a-javascript-do-while-loop-using-bubble-sort
// If a wwap ocurred, loop through the array again
// Continue looping until no swaps ocurr

function bubbleSort(array) {
  let swapped = false
  do {
    swapped = false
    
    array.forEach((item, index) => {
      console.log(array)  //print every change
      if (item > array[index + 1]) {
        const temporary = item

        array[index] = array[index + 1]
        array[index + 1] = temporary
        swapped = true
      }
    }) 
  } while (swapped)
  return array
}

// https://egghead.io/lessons/javascript-sort-an-array-with-a-nested-for-loop-using-insertion-sort-in-javascript

// Insertion Sort

// Uses neted loops
// Asumes a sorted list of length 1
// Compares the next item, and inserts it before of after depending on the comparison

function insertionSort(array) {
  let i
  let j

  for (i = 1; i < array.length; i++) {
    for (j = 0; j < i; j++) {
      console.log(array)

      if (array[i] < array[j]) {
        const [item] = array.splice(i, 1)
        array.splice(j, 0, item)
      }
  
    }
  }
  return array
}

// https://egghead.io/lessons/javascript-divide-and-recurse-over-an-array-with-merge-sort-in-javascript

// Merge Sort

// Divides the given array into two halves: a left and a right sub array
// Calls mergeSort on these sub arrays
// Once we get to arrays that are less than 2 in lenght, we begin to stitch them back together
// We sort as we stitch them up, this leading to our sorted array by te time we're all the way back up the stack

function mergeSort(array) {
  if (array.length < 2) {
    return array
  }

  const middle = Math.floor(array.length / 2)
  const left  = array.slice(0, middle)
  const right = array.slice(middle)
  
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const sorted = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift())
    } else {
      sorted.push(right.shift())
    }
  }
  const results = [...sorted, ...left, ...right]

  console.log(results)

  return results
}

// https://egghead.io/lessons/javascript-recursively-sort-an-array-in-javascript-with-quick-sort

// Quick Sort

// Recursive
// We receive an array and pich a "pivot"
// Items are compared to the pivot
// If an item is less than the pivot, put it in the "left" array, else into the "right" array
// Return the array resulting from quicSort called on the left, the pivot, and quickSort called on the "right"

function quickSort(array) {
  console.log(array)

  if (array.length < 2) {
    return array
  }

  const pivotIndex = array.length - 1
  const pivot = array[pivotIndex]
  const left = []
  const right = []

  for (let i = 0; i < pivotIndex; i++) {
    const currentItem = array[i]
    currentItem < pivot
      ? left.push(currentItem)
      : right.push(currentItem)
  }
  return [...quickSort(left), pivot, ...quickSort(right)]

}

const numbers = [10, 5 ,6, 3, 2, 8, 9, 4, 7]

//console.log(numbers)
//bubbleSort(numbers)
//insertionSort(numbers)
//mergeSort(numbers)
numbersOrdered = quickSort(numbers)
console.log(numbersOrdered)
