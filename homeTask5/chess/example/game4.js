function buildQuestionText() {
  var text = '[' + this.prize + '] ' + this.text;

  for(var i = 0; i < this.options.length; i++) {
    text = text + '\n' + (i + 1) + ') ' + this.options[i];
  }

  if(this.fixed) {
    text = text + '\n' + 'НЕСГОРАЕМАЯ СУММА!';
  }

  return text;
}

var $history = document.getElementById('history');

function printLog(message) {
  var $li = document.createElement('li');
  $li.textContent = message;

  $history.appendChild($li);
}

var questions = [
  {
    text: 'Висит груша нельзя скушать',
    options: ['Лампочка', 'Груша', 'Лопата', 'Кошка'],
    correct: 0,
    prize: 100,
    fixed: false,
    getText: buildQuestionText,
  },
  {
    text: 'Висит груша нельзя скушать',
    options: ['Лампочка', 'Груша', 'Лопата', 'Кошка'],
    correct: 1,
    prize: 500,
    fixed: false,
    getText: buildQuestionText,
  },
  {
    text: 'Висит груша нельзя скушать',
    options: ['Лампочка', 'Груша', 'Лопата', 'Кошка'],
    correct: 2,
    prize: 1000,
    fixed: false,
    getText: buildQuestionText,
  },
  {
    text: 'Висит груша нельзя скушать',
    options: ['Лампочка', 'Груша', 'Лопата', 'Кошка'],
    correct: 3,
    prize: 5000,
    fixed: true,
    getText: buildQuestionText,
  },
  {
    text: 'Висит груша нельзя скушать',
    options: ['Лампочка', 'Груша', 'Лопата', 'Кошка'],
    correct: 0,
    prize: 10000,
    fixed: false,
    getText: buildQuestionText,
  },
  {
    text: 'Висит груша нельзя скушать',
    options: ['Лампочка', 'Груша', 'Лопата', 'Кошка'],
    correct: 1,
    prize: 50000,
    fixed: false,
    getText: buildQuestionText,
  },
  {
    text: 'Висит груша нельзя скушать',
    options: ['Лампочка', 'Груша', 'Лопата', 'Кошка'],
    correct: 2,
    prize: 100000,
    fixed: true,
    getText: buildQuestionText,
  },
  {
    text: 'Висит груша нельзя скушать',
    options: ['Лампочка', 'Груша', 'Лопата', 'Кошка'],
    correct: 3,
    prize: 500000,
    fixed: false,
    getText: buildQuestionText,
  },
  {
    text: 'Висит груша нельзя скушать',
    options: ['Лампочка', 'Груша', 'Лопата', 'Кошка'],
    correct: 0,
    prize: 1000000,
    fixed: false,
    getText: buildQuestionText,
  }
]

for(var i = 0; i < questions.length; i++) {
  var questionText = 'Вопрос №' + (i + 1) + ' ' + questions[i].getText();
  printLog(questionText);
  var prize = 0;
  if(+prompt(questionText) === (questions[i].correct + 1)) {
    prize = questions[i].prize;

    if(i < questions.length - 1) {
      printLog('Вы ответили правильно! Текущий выигрыш: ' + prize);
    } else {
      printLog('ПОБЕДИТЕЛЬ! Вы выиграли миллион!!!');
    }
  } else {
    for(var j = i; j >= 0; j--) {
      if(questions[j].fixed) {
        prize = questions[j].prize;
        break;
      }
    }

    printLog('Вы проиграли! Ваш выигрыш составил: ' + prize);
    break;
  }
}