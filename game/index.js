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
        rock(computerChoice);
        break;
      case '2':
        paper(computerChoice);
        break;
      case '3':
        scissors(computerChoice);
        break;
      default:
        break;
    }

    promptInterface.close();
  }
}

module.exports = start;
