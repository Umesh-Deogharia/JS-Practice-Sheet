// closure

// "A closure is a function that can access variables from its outer scope even after the outer function has executed. It keeps references to those variables, not copies of their values."

let x = 0;
const fn = () => { console.log(x) };
x = 5;

fn()