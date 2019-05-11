/* eslint-disable no-console */
const {rock, paper, scissors} = require('./validators');
const {LABELS} = require('./constants');

function start(answer) {
  const userChoice = answer.trim();
  const validOptions = ['1', '2', '3'];
  const isValidAnswer = validOptions.includes(userChoice);
  const computerChoice = (Math.round(Math.random() * 2) + 1).toString();
  const draw = userChoice === computerChoice;

  if (!isValidAnswer) {
    console.log(`\n${LABELS.INVALID_OPTION}\n`);
  } else if (draw) {
    console.log(`\n${LABELS.DRAW}\n`);
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
  }
}

module.exports = start;
