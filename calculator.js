// получаем элементы
const screen = document.querySelector('.output');
const buttons = document.querySelectorAll('.btn');
let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = null;

// добавляем обработчик клика на все кнопки
buttons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    const value = event.target.textContent;
    // если это цифра
    if (!isNaN(value) || value === '.') {
      if (operator === '') {
        firstOperand += value;
        screen.textContent = firstOperand;
      } else {
        secondOperand += value;
        screen.textContent = secondOperand;
      }
    }
    // если это оператор
    else if (value === '+' || value === '-' || value === '*' || value === '/') {
      operator = value;
    }
    // если это кнопка равно
    else if (value === '=') {
      if (firstOperand !== '' && secondOperand !== '' && operator !== '') {
        if (operator === '+') {
          result = parseFloat(firstOperand) + parseFloat(secondOperand);
        } else if (operator === '-') {
          result = parseFloat(firstOperand) - parseFloat(secondOperand);
        } else if (operator === '*') {
          result = parseFloat(firstOperand) * parseFloat(secondOperand);
        } else if (operator === '/') {
          result = parseFloat(firstOperand) / parseFloat(secondOperand);
        }
        screen.textContent = result;
        firstOperand = result.toString();
        secondOperand = '';
        operator = '';
      }
    }
    // если это кнопка очистки
    else if (value === 'C') {
      screen.textContent = '';
      firstOperand = '';
      secondOperand = '';
      operator = '';
      result = null;
    }
  });
});