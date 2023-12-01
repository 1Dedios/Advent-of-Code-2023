import result from './Day1/text-file-parser.js';

console.log(result);

const calibrationValues = async (arr) => {
  let result = fs.readFile('./Day1/input.txt', 'utf8', (err, data));
  console.log(result);
};

console.log('./text-file-parser.js');
