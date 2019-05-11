/* eslint-disable no-console */
const {LABELS, COLORS} = require('./constants');

function scissors(computerChoice) {
  if (computerChoice === '1') {
    console.log(`\n${LABELS.LOST}${COLORS.BG_RED} PEDRA ${COLORS.RESET}\n`);
  } else {
    console.log(`\n${LABELS.WIN}${COLORS.BG_GREEN} PAPEL ${COLORS.RESET}\n`);
  }
}

function rock(computerChoice) {
  if (computerChoice === '2') {
    console.log(`\n${LABELS.LOST}${COLORS.BG_RED} PAPEL ${COLORS.RESET}\n`);
  } else {
    console.log(`\n${LABELS.WIN}${COLORS.BG_GREEN} TESOURA ${COLORS.RESET}\n`);
  }
}

function paper(computerChoice) {
  if (computerChoice === '3') {
    console.log(`\n${LABELS.LOST}${COLORS.BG_RED} TESOURA ${COLORS.RESET}\n`);
  } else {
    console.log(`\n${LABELS.WIN}${COLORS.BG_GREEN} PEDRA ${COLORS.RESET}\n`);
  }
}

module.exports = {
  scissors,
  rock,
  paper
};
