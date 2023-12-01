/**
 * 
PLAN: 

- FileReader API - reads contents of a file as text. 
- The contents of the file are lines of text
- Read through each line of text and take the first number in the sequence and the last number in the sequence.
- Concat the first and last numbers
- Push the concacted numbers to an array
- move to the next line and do the same
- once you've reached the end of the file
- reduce the array of the concacted numbers to a sum
- return this sum. 

 */

const fs = require('node:fs');

fs.readFile('./Day1/input.txt', 'utf8', (err, data) => {
  if (err) {
    return 'Error: ' + err;
  }
  return data.split('\n');
});
