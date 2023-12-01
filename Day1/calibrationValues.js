const fs = require('node:fs/promises');

const calibrationValues = async () => {
  try {
    const data = await fs.readFile('./Day1/input.txt', { encoding: 'utf8' });
    const splitDataByLine = data.split('\n');
    const splitLinesByWords = splitDataByLine.split(' ');
    console.log(splitDataByWords);
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
exports.calibrationValues = calibrationValues;
