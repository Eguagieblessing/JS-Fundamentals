#!/usr/bin/node

function factorial(n) {
  // Convert to number and check if it's NaN
  const num = Number(n);
  
  // Handle base cases
  if (isNaN(num) || num <= 0) {
    return 1;
  }
  
  // Recursive case
  return num * factorial(num - 1);
}

const args = process.argv.slice(2);
const input = parseInt(args[0]);

console.log(factorial(input));