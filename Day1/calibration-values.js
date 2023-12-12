// Required to read the file
const fs = require('node:fs/promises');
const { number } = require('yargs');

const calibrationValues = async () => {
  try {
    const data = await fs.readFile('./Day1/sample-input.txt', {
      encoding: 'utf8',
    });
    const splitDataByLine = data.split('\n');
    console.log(splitDataByLine);
    const extractedNumbersFromData = [];
    const firstAndLastNumberFromExtractedNumbers = [];

    // TODO: some of the written numbers were not read correctly - might have to replace starting with 9 and counting down

    // create object for the lettered numbers making the words be the key

    // need to iterate through the string
    // need to filter for char or number

    // if char maybe push to loop scoped array
    // within if scope - if scoped array.length == 3 process that element
    // element processing -  if object.hasownproperty('three char string')
    // push extractednumbersfromdata.push(object[threecharstring])

    // else if number push to extractedNumbersFromData

    /************************************** */

    // ITERATING THROUGH THE STRING METHOD
    //console.log('t'.isNaN());

    const numberLetters = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
    };

    for (let i = 0; i < splitDataByLine.length; i++) {
      let processingArray = [];
      console.log(splitDataByLine[i]);

      for (let j = 0; j < splitDataByLine[i].length; j++) {
        let element = splitDataByLine[i][j];
        console.log(element);

        if (typeof element !== 'number') {
          processingArray.push(element);
          console.log(processingArray);
          console.log(processingArray.join(''));
          console.log(
            processingArray.length === 3 &&
              numberLetters.hasOwnProperty(processingArray.join(''))
          );

          if (
            processingArray.length === 3 &&
            numberLetters.hasOwnProperty(processingArray.join(''))
          ) {
            console.log(processingArray);
            let wordToPush = processingArray.join('');
            console.log(wordToPush);
            console.log(numberLetters[wordToPush]);
            extractedNumbersFromData.push(numberLetters[wordToPush]);
            // clear the array
            processingArray.length = 0;
            console.log(processingArray);
            continue;
          }
        } else {
          extractedNumbersFromData.push(parseInt(element));
        }
      }
    }

    /************************************** */
    // FOR EACH METHOD
    // splitDataByLine.forEach((line) => {
    //   const replaceNine = line.replace('nine', 9);
    //   const replaceFive = replaceSix.replace('five', 5);
    //   const replaceSix = replaceSeven.replace('six', 6);
    //   const replaceSeven = replaceEight.replace('seven', 7);
    //   const replaceOne = replaceTwo.replace('one', 1);
    //   const replaceEight = replaceNine.replace('eight', 8);
    //   const replaceFour = replaceFive.replace('four', 4);
    //   const replaceThree = replaceFour.replace('three', 3);
    //   const replaceTwo = replaceThree.replace('two', 2);
    //   const iterableArray = replaceOne.split(' ');

    //   console.log(iterableArray);

    //   for (let i = 0; i < iterableArray.length; i++) {
    //     // need to create some separation between lines here
    //     if (i == 0) {
    //       extractedNumbersFromData.push('\n');
    //     }
    //     for (let j = 0; j < iterableArray[i].length; j++) {
    //       let parsedNumber = parseInt(iterableArray[i][j], 10);
    //       console.log(parsedNumber);
    //       if (!isNaN(parsedNumber)) {
    //         extractedNumbersFromData.push(parsedNumber);
    //       }
    //     }
    //   }
    // });

    /************************************** */

    console.log(extractedNumbersFromData);

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
    throw new Error(err);
  }
};

calibrationValues();

// TODO: remove all console statements and unnecessary comments from code
