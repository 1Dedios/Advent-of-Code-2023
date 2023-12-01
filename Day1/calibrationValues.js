const fs = require('node:fs/promises');

const calibrationValues = async () => {
  try {
    const data = await fs.readFile('./Day1/input.txt', { encoding: 'utf8' });
    const splitDataByLine = data.split('\n');
    const extractedNumbersFromData = [];

    splitDataByLine.forEach((line) => {
      const numberMatch = /[0-9+]/g;
      const extractNumbers = line.match(numberMatch);
      const formatExtractedNumber = extractNumbers.join('');
      extractedNumbersFromData.push(parseInt(formatExtractedNumber));
    });

    console.log(extractedNumbersFromData.reduce((acc, val) => acc + val, 0));
  } catch (err) {
    console.error(err);
  }
};

calibrationValues();
