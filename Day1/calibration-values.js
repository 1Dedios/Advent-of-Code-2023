// Required to read the file
const fs = require('node:fs/promises');

const calibrationValues = async () => {
  try {
    const data = await fs.readFile('./Day1/sample-input.txt', {
      encoding: 'utf8',
    });
    const splitDataByLine = data.split('\n');
    //console.log(splitDataByLine);
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
      const iterableArray = replaceNine.split(' ');

      //console.log(iterableArray);

      for (let i = 0; i < iterableArray.length; i++) {
        // need to create some seperation between lines here
        if (i == 0) {
          extractedNumbersFromData.push('\n');
        }
        for (let j = 0; j < iterableArray[i].length; j++) {
          let parsedNumber = parseInt(iterableArray[i][j], 10);
          console.log(parsedNumber);
          if (!isNaN(parsedNumber)) {
            extractedNumbersFromData.push(parsedNumber);
          }
        }
      }
    });

    console.log(extractedNumbersFromData.length);

    // TODO:
    // loop through extractedNumbers and push the first element and the last element into firstAndLastNumberFromExtractedNumbers Array

    for (let i = 0; i < extractedNumbersFromData.length; i++) {
      console.log(extractedNumbersFromData[i]);
      console.log(extractedNumbersFromData[0] == '\n');
      if (i === extractedNumbersFromData.length - 1) {
        firstAndLastNumberFromExtractedNumbers.push(
          extractedNumbersFromData[i]
        );
      } else if (extractedNumbersFromData[i] == '\n') {
        firstAndLastNumberFromExtractedNumbers.push(
          extractedNumbersFromData[i + 1]
        );
      } else if (extractedNumbersFromData[i + 1] == '\n') {
        firstAndLastNumberFromExtractedNumbers.push(
          extractedNumbersFromData[i]
        );
      }
    }

    //firstAndLastNumberFromExtractedNumbers.push(extractedNumbersFromData[extractedNumbersFromData.length - 1])

    console.log(firstAndLastNumberFromExtractedNumbers);
  } catch (err) {
    console.error(err);
  }
};

calibrationValues();

// TODO: remove all console statements and unnecessary comments from code
