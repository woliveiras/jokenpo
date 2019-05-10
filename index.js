const readline = require('readline');
const interfaceOptions = `Entre com alguma opção:
[1] - pedra
[2] - papel
[3] - tesoura

Eu escolho: `;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(interfaceOptions, (answer) => {
  console.log(`Escolha: ${answer}`);
  rl.close();
});