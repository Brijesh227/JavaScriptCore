const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputArray = [];
let numberOfLines = 0;

rl.on('line', (line) => {
  if (!numberOfLines) {
    numberOfLines = parseInt(line, 10);
  } else if(inputArray.length < numberOfLines) {
    inputArray.push(line.trim());
  }

  if (inputArray.length === numberOfLines) {
    rl.close();
  }
});

rl.on('close', () => {
    main(inputArray);
    process.exit(0);
});

function main(args){
    console.log('here argument',args);
}
