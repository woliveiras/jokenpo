#!/usr/bin/env node
/* eslint-disable no-console */
const readline = require('readline');
const run = require('./game');
const store = {
  userName: null,
  scores: {
    user: 0,
    computer: 0
  }
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Informe seu nome!', answer => {
  store.userName = answer.toUpperCase();
  rl.setPrompt(`======================================================================
Escolha alguma opção (digite um número e pressione Enter):
[1] - pedra
[2] - papel
[3] - tesoura

Eu escolho: `);
  rl.prompt();
});

rl.on('line', answer => {
  run(answer, store);
  rl.setPrompt(
    `\nPONTUAÇÃO: ${store.userName} ${store.scores.user} || COMPUTADOR ${
      store.scores.computer
    }
    
----------------------------------------------------------------------
    
Parar? (pressione CTRL+C)\n\nJogar de novo? ([1] - pedra, [2] - papel, [3] - tesoura): `
  );
  setTimeout(() => {
    process.stdout.write('\x1b[0f');
    rl.prompt();
  }, 1000);
});
