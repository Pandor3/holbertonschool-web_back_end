const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

console.log('Welcome to Holberton School, what is your name?\n');
rl.question('', (name) => {
  console.log(`Your name is : ${name}`);
  console.log('This important software is now closing');
  rl.close();
});
