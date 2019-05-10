const LABELS = {
  INVALID_OPTION: {
    COLOR: '\x1b[31m',
    TEXT:
      'Você digitou uma opção inválida, por favor tente novamente digitando somente um número e pressionando enter'
  },
  DRAW: {
    COLOR: '\x1b[33m',
    TEXT: 'Empatou! Tente de novo. :D'
  },
  LOST: {
    COLOR: '\x1b[31m',
    TEXT: 'Você perdeu! O computador escolheu:'
  },
  WIN: {
    COLOR: '\x1b[32m',
    TEXT: 'Você ganhou! O computador escolheu:'
  }
};

module.exports = {
  LABELS
};
