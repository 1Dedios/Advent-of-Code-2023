const fs = require('node:fs/promises');

/**
 * 
 * 
 PLAN: 

 Create object with 12 red, 13 green and 14 blue cubes. - global scope

read through the string
if element is typeof number
if element is > 


 */

const cubes = {
  red: 12,
  green: 13,
  blue: 14,
};

const cubeConundrum = async () => {
  try {
    const data = await fs.readFile('./Day2/sample-input.txt', {
      encoding: 'utf8',
    });
    const result = data.split('\n');
  } catch (err) {
    console.error('Error: ', err);
  }
};

cubeConundrum();
