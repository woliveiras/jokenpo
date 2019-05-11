const COLORS = {
  BG_RED: '\x1b[41m',
  BG_YELLOW: '\x1b[43m\x1b[30m',
  BG_GREEN: '\x1b[42m\x1b[30m',
  RESET: '\x1b[0m\n'
};

const LABELS = {
  INVALID_OPTION: `${
    COLORS.BG_RED
  }Opção inválida, por favor tente novamente digitando somente um número e pressionando enter${
    COLORS.RESET
  }`,
  DRAW: `${COLORS.BG_YELLOW}Empatou! Tente de novo. :D${COLORS.RESET}`,
  LOST: `${COLORS.BG_RED}Você perdeu! O computador escolheu: `,
  WIN: `${COLORS.BG_GREEN}Você ganhou! O computador escolheu: `
};

module.exports = {
  LABELS,
  COLORS
};
