#!/usr/bin/node

const args = process.argv.slice(2);
const x = Number(args[0]);

if (!isNaN(x) && args[0] !== undefined) {
  let i = 0;
  console.log('C is fun');
  while (i < x - 1) {
    process.stdout.write('C is fun\n');
    i++;
  }
} else {
  console.log('Missing number of occurrences');
}