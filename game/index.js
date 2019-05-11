/* eslint-disable no-console */
const {rock, paper, scissors} = require('./choiceValidator');
const {LABELS} = require('./constants');

function run(answer, store) {
  let scores = null;
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
        scores = rock(computerChoice);
        break;
      case '2':
        scores = paper(computerChoice);
        break;
      case '3':
        scores = scissors(computerChoice);
        break;
      default:
        break;
    }

    store.scores.user += scores.user;
    store.scores.computer += scores.computer;
  }
}

module.exports = run;
