const {rock, paper, scissors} = require('./validators');

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
