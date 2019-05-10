function scissors(computerChoice, promptInterface) {
  if (computerChoice === '1') {
    console.log('Você perdeu! O computador escolheu PEDRA');
  } else {
    console.log('Você ganhou! O computador escolheu PAPEL');
  }
  promptInterface.close();
}

function rock(computerChoice, promptInterface) {
  if (computerChoice === '2') {
    console.log('Você perdeu! O computador escolheu PAPEL');
  } else {
    console.log('Você ganhou! O computador escolheu TESOURA');
  }
  promptInterface.close();
}

function paper(computerChoice, promptInterface) {
  if (computerChoice === '3') {
    console.log('Você perdeu! O computador escolheu TESOURA');
  } else {
    console.log('Você ganhou! O computador escolheu PEDRA');
  }
  promptInterface.close();
}

module.exports = {
  scissors,
  rock,
  paper
};
