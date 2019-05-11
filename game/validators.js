const {LABELS} = require('./constants');

function scissors(computerChoice) {
  if (computerChoice === '1') {
    console.log(LABELS.LOST.COLOR, `${LABELS.LOST.TEXT} PEDRA`);
  } else {
    console.log(LABELS.WIN.COLOR, `${LABELS.WIN.TEXT} PAPEL`);
  }
}

function rock(computerChoice) {
  if (computerChoice === '2') {
    console.log(LABELS.LOST.COLOR, `${LABELS.LOST.TEXT} PAPEL`);
  } else {
    console.log(LABELS.WIN.COLOR, `${LABELS.WIN.TEXT} TESOURA`);
  }
}

function paper(computerChoice) {
  if (computerChoice === '3') {
    console.log(LABELS.LOST.COLOR, `${LABELS.LOST.TEXT} TESOURA`);
  } else {
    console.log(LABELS.WIN.COLOR, `${LABELS.WIN.TEXT} PEDRA`);
  }
}

module.exports = {
  scissors,
  rock,
  paper
};
