const readline = require('readline');
const run = require('./game');
const store = {
  scores: {
    user: 0,
    computer: 0
  }
};
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
  run(answer, store);
  rl.setPrompt(
    `\nPONTUAÇÃO: USUÁRIO ${store.scores.user} || COMPUTADOR ${
      store.scores.computer
    }\n\nParar? (pressione CTRL+C)\n\nJogar de novo? ([1] - pedra, [2] - papel, [3] - tesoura): `
  );
  rl.prompt();
});
