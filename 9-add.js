#!/usr/bin/node

function add(a, b) {
  return a + b;
}

const args = process.argv.slice(2);
const firstInt = parseInt(args[0]);
const secondInt = parseInt(args[1]);

console.log(add(firstInt, secondInt));