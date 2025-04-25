/* 
Write a function createCounter(start) that returns an object with two methods, 
increment() and decrement(), 
which respectively increase or decrease the internal count (initialized to start) 
and return the updated value.

*/

function createCounter(start) {
  let count = start;
  return {
    increment() {
      count += 1;
      return count;
    },
    decrement() {
      count -= 1;
      return count;
    },
  };
}

const counter = createCounter(5);

const result1 = counter.increment();
console.log(result1);
console.log(counter.increment());
console.log(counter.increment());

console.log(counter.decrement());
console.log(counter.decrement());
