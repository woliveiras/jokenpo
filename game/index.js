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

function start(answer, promptInterface) {
  const userChoice = answer.trim();
  const validOptions = ['1', '2', '3'];
  const isValidAnswer = validOptions.includes(userChoice);
  const computerChoice = (Math.round(Math.random() * 2) + 1).toString();
  const draw = userChoice === computerChoice;

  if (!isValidAnswer) {
    console.log(
      'Você digitou uma opção inválida, por favor tente novamente digitando somente um número e pressionando enter'
    );
    promptInterface.close();
  } else if (draw) {
    console.log('Empatou! Tente de novo. :D');
    promptInterface.close();
  } else {
    switch (userChoice) {
      case '1':
        rock(computerChoice, promptInterface);
        break;
      case '2':
        paper(computerChoice, promptInterface);
        break;
      case '3':
        scissors(computerChoice, promptInterface);
        break;
      default:
        break;
    }
  }
}

module.exports = start;
