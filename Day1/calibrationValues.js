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
const fs = require('node:fs/promises');

const calibrationValues = async () => {
  try {
    const data = await fs.readFile('./Day1/input.txt', { encoding: 'utf8' });
    const splitDataByLine = data.split('\n');
    const splitLinesByWords = splitDataByLine.split(' ');
    console.log(splitLinesByWords);
    const extractedNumbersFromData = [];

    console.log(splitDataByLine.match(/[0-9]+/));

    splitDataByLine.forEach((line) => {
      // split each line into chars
      // loop through the charredArray
      // if parseInt(char) == Number
      // push char to extracted array

      const splitLineIntoChar = line.split('');
      console.log(splitLineIntoChar);
      const matchNumbers = /[0-9]+/;

      console.log(splitLineIntoChar.match(matchNumbers));
      for (const char of splitLineIntoChar) {
        console.log(char);
        if (parseInt(char) == Number) {
          extractedNumbersFromData.push(char);
        }
      }
    });
    console.log(parseInt('1') == NaN);
    console.log(extractedNumbersFromData);
  } catch (err) {
    console.error(err);
  }
};

console.log(calibrationValues());
