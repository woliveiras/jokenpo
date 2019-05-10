const {rock, paper, scissors} = require('./validators');
const {LABELS} = require('./constants');

function start(answer, promptInterface) {
  const userChoice = answer.trim();
  const validOptions = ['1', '2', '3'];
  const isValidAnswer = validOptions.includes(userChoice);
  const computerChoice = (Math.round(Math.random() * 2) + 1).toString();
  const draw = userChoice === computerChoice;

  if (!isValidAnswer) {
    console.log(LABELS.INVALID_OPTION.COLOR, LABELS.INVALID_OPTION.TEXT);
    promptInterface.close();
  } else if (draw) {
    console.log(LABELS.DRAW.COLOR, LABELS.DRAW.TEXT);
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
