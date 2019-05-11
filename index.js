const readline = require('readline');
const run = require('./game');
const interfaceOptions = `======================================================================
Escolha alguma opção (digite um número e pressione Enter):
[1] - pedra
[2] - papel
[3] - tesoura

Eu escolho: `;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: interfaceOptions
});

rl.prompt();

rl.on('line', answer => {
  run(answer);
  rl.prompt();
});
