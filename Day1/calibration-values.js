const fs = require('node:fs/promises');

const calibrationValues = async () => {
  try {
    const data = await fs.readFile('./Day1/sample-input.txt', {
      encoding: 'utf8',
    });
    const splitDataByLine = data.split('\n');
    console.log(splitDataByLine);
    const extractedNumbersFromData = [];
    const firstAndLastNumberFromExtractedNumbers = [];

    splitDataByLine.forEach((line) => {
      const replaceOne = line.replace('one', 1);
      const replaceTwo = replaceOne.replace('two', 2);
      const replaceThree = replaceTwo.replace('three', 3);
      const replaceFour = replaceThree.replace('four', 4);
      const replaceFive = replaceFour.replace('five', 5);
      const replaceSix = replaceFive.replace('six', 6);
      const replaceSeven = replaceSix.replace('seven', 7);
      const replaceEight = replaceSeven.replace('eight', 8);
      const replaceNine = replaceEight.replace('nine', 9);
      const iterableArray = replaceNine.split('');
      console.log(iterableArray);
      for (let i = 0; i < iterableArray.length; i++) {
        console.log(parseInt(iterableArray[i]));
        if (parseInt(iterableArray[i]) === typeof Number) {
          extractedNumbersFromData.push(parseInt(iterableArray[i]));
        }
      }
    });

    console.log(extractedNumbersFromData);

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
