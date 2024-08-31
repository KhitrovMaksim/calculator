'use strict';

const readline = require('node:readline');

const commandLine = (prompt) => readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt,
});

module.exports = { commandLine };
