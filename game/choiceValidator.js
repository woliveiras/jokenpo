/* eslint-disable no-console */
const {LABELS, COLORS} = require('./constants');

function scissors(computerChoice) {
  if (computerChoice === '1') {
    console.log(`\n${LABELS.LOST}${COLORS.BG_RED} PEDRA ${COLORS.RESET}\n`);
    return {
      user: 0,
      computer: 1
    };
  }
  console.log(`\n${LABELS.WIN}${COLORS.BG_GREEN} PAPEL ${COLORS.RESET}\n`);
  return {
    user: 1,
    computer: 0
  };
}

function rock(computerChoice) {
  if (computerChoice === '2') {
    console.log(`\n${LABELS.LOST}${COLORS.BG_RED} PAPEL ${COLORS.RESET}\n`);
    return {
      user: 0,
      computer: 1
    };
  }
  console.log(`\n${LABELS.WIN}${COLORS.BG_GREEN} TESOURA ${COLORS.RESET}\n`);
  return {
    user: 1,
    computer: 0
  };
}

function paper(computerChoice) {
  if (computerChoice === '3') {
    console.log(`\n${LABELS.LOST}${COLORS.BG_RED} TESOURA ${COLORS.RESET}\n`);
    return {
      user: 0,
      computer: 1
    };
  }
  console.log(`\n${LABELS.WIN}${COLORS.BG_GREEN} PEDRA ${COLORS.RESET}\n`);
  return {
    user: 1,
    computer: 0
  };
}

module.exports = {
  scissors,
  rock,
  paper
};
