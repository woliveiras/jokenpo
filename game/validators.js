const {LABELS} = require('./constants');

function scissors(computerChoice, promptInterface) {
  if (computerChoice === '1') {
    console.log(LABELS.LOST.COLOR, `${LABELS.LOST.TEXT} PEDRA`);
  } else {
    console.log(LABELS.WIN.COLOR, `${LABELS.WIN.TEXT} PAPEL`);
  }
  promptInterface.close();
}

function rock(computerChoice, promptInterface) {
  if (computerChoice === '2') {
    console.log(LABELS.LOST.COLOR, `${LABELS.LOST.TEXT} PAPEL`);
  } else {
    console.log(LABELS.WIN.COLOR, `${LABELS.WIN.TEXT} TESOURA`);
  }
  promptInterface.close();
}

function paper(computerChoice, promptInterface) {
  if (computerChoice === '3') {
    console.log(LABELS.LOST.COLOR, `${LABELS.LOST.TEXT} TESOURA`);
  } else {
    console.log(LABELS.WIN.COLOR, `${LABELS.WIN.TEXT} PEDRA`);
  }
  promptInterface.close();
}

module.exports = {
  scissors,
  rock,
  paper
};
