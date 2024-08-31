'use strict';

const { calculator } = require('./calculator');
const { commandLine } = require('./command-line');

const main = () => {
  const commandLineCalculator = commandLine('Please, enter expression: ');

  commandLineCalculator.prompt();

  commandLineCalculator.on('line', (line) => {
    console.log('Result: ', calculator(line));
    commandLineCalculator.close();
  });
}

void main();
