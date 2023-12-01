const fs = require('node:fs/promises');

const calibrationValues = async () => {
  try {
    const data = await fs.readFile('./Day1/input.txt', { encoding: 'utf8' });
    const splitDataByLine = data.split('\n');
    const extractedNumbersFromData = [];
    const firstAndLastNumberFromExtractedNumbers = [];

    splitDataByLine.forEach((line) => {
      const numberMatch = /[0-9+]/g;
      const extractNumbers = line.match(numberMatch);
      const formatExtractedNumber = extractNumbers.join('');
      console.log(formatExtractedNumber);
      extractedNumbersFromData.push(formatExtractedNumber);
    });

    console.log(extractedNumbersFromData);

    extractedNumbersFromData.forEach((element) => {
      if (element.length === 1) {
        firstAndLastNumberFromExtractedNumbers.push(element * 11);
      } else if (element.length > 2) {
        let firstDigit = element.charAt(0);
        console.log(firstDigit);
        let lastDigit = element.charAt(element.length - 1);
        console.log(lastDigit);
        firstAndLastNumberFromExtractedNumbers.push(
          parseInt(firstDigit.concat(lastDigit))
        );
      } else {
        firstAndLastNumberFromExtractedNumbers.push(parseInt(element));
      }
    });

    console.log(
      firstAndLastNumberFromExtractedNumbers.reduce((acc, val) => acc + val, 0)
    );
    return firstAndLastNumberFromExtractedNumbers.reduce(
      (acc, val) => acc + val,
      0
    );
  } catch (err) {
    console.error(err);
  }
};

calibrationValues();
