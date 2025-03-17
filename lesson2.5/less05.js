// Сначала спрашиваем у пользователя всякие данные про проект
let titleProject = prompt('Название проекта'); 
console.log("Название проекта (исходное):", titleProject);

let screensValue = prompt('Тип экрана: шаблонные, с уникальным дизайном, с анимациями');
console.log("Выбранные экраны:", screensValue);

// Эта функция проверяет, ввёл человек число или нет
// Если введёт не число или пустую строку, возвращает false
function checkIsNumber(value) {
  if (value === null || value.trim() === "") {
    return false; 
  }
  
  value = value.trim();
  const parsed = parseFloat(value);

  if (isNaN(parsed) || !isFinite(parsed)) {
    return false;
  }
  
  return true;
}

// Здесь спрашиваем, сколько будет стоить экраны
// Если введёт не число, просим ввести заново
// Если нажать «Отмена» — ставим 0
let screenPrice = null;

while (true) {
  let userInput = prompt("Сколько это будет стоить (за экраны)?");
  if (userInput === null) {
    alert("Отменили ввод цены, ставлю 0");
    screenPrice = 0;
    break;
  }

  if (checkIsNumber(userInput)) {
    screenPrice = parseFloat(userInput);
    break;
  } else {
    alert("Нужно ввести число, попробуй ещё раз");
  }
}

console.log("Цена за экраны:", screenPrice);

// Спрашиваем, нужен ли респонсивный сайт
let responsive = (prompt('Нужен ли респонсивный сайт? (да/нет)') === 'да');
console.log("Респонсивный сайт нужен:", responsive);

// Узнаём процент отката подрядчику
let percentage = +prompt('Процент отката подрядчику (например, 10)');
console.log("Процент подрядчику:", percentage);

// Здесь мы создаём функцию, которая два раза спрашивает «Сколько стоит услуга?»
// и складывает итог
const getAllServicePrices = function() {
  let sum = 0;
  
  for (let i = 0; i < 2; i++) {
    while (true) {
      let userInput = prompt(`Сколько будет стоить услуга №${i + 1}?`);

      if (userInput === null) {
        alert("Отменили ввод, ставлю 0 за эту услугу");
        break;
      }

      if (checkIsNumber(userInput)) {
        sum += parseFloat(userInput);
        break;
      } else {
        alert("Это не число. Попробуй ещё раз!");
      }
    }
  }
  
  return sum;
};

// Функция, которая делает первую букву в названии проекта большой,
// а остальные — маленькими
function getTitle() {
  titleProject =
    titleProject.charAt(0).toUpperCase() +
    titleProject.slice(1).toLowerCase();
  return titleProject;
}

// Складываем экранную цену и все услуги
function getFullPrice() {
  return screenPrice + allServicePrices;
}

// Считаем, сколько останется после того,
// как вычтем процент подрядчику
function getServicePercentPrices() {
  const total = getFullPrice();
  return total - (total * percentage / 100);
}

// Тут проверяем, какую скидку дать клиенту
// В зависимости от общей цены
function getRollbackMessage() {
  const total = getFullPrice();
  let discount;

  if (total >= 0 && total < 20000) {
    discount = 0;
    console.log("Скидка не предусмотрена");
  } else if (total >= 20000 && total < 50000) {
    discount = 5;
    console.log("Скидка 5%");
  } else if (total >= 50000) {
    discount = 10;
    console.log("Скидка 10%");
  } else {
    discount = 0;
    console.log("Какая-то неадекватная сумма, скидка 0%");
  }

  return discount;
}

// Делаем красивое название проекта
console.log("Название проекта (после обработки):", getTitle());

// Узнаём, сколько стоят две услуги (складываем)
const allServicePrices = getAllServicePrices();
console.log("Стоимость двух услуг:", allServicePrices);

// Общая цена экраны + услуги
const fullPrice = getFullPrice();
console.log("Полная стоимость проекта:", fullPrice);

// Цена после вычета процента подрядчику
const servicePercentPrice = getServicePercentPrices();
console.log("После вычета процента подрядчику:", servicePercentPrice);

// Скидка для клиента
const discount = getRollbackMessage();
console.log("Процент скидки для клиента:", discount, "%");
