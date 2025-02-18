let titleProject = prompt('Название проекта'); 
console.log("Название проекта (исходное):", titleProject);

let screensValue = prompt('Тип экрана: шаблонные, с уникальным дизайном, с анимациями');
console.log("Выбранные экраны:", screensValue);

const screenPrice = +prompt('Цена за экраны');
console.log("Цена за экраны:", screenPrice);

let responsive = (prompt('Нужен ли респонсивный сайт? (да/нет)') === 'да');
console.log("Респонсивный сайт нужен:", responsive);

let service1 = prompt('Какой сервис нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
console.log("Сервис 1:", service1);
console.log("Цена сервиса 1:", servicePrice1);

let service2 = prompt('Какой еще сервис тебе нужен?');
let servicePrice2 = +prompt('Сколько будет стоить второй сервис?');
console.log("Сервис 2:", service2);
console.log("Цена сервиса 2:", servicePrice2);

let percentage = +prompt('Процент отката подрядчику (пример: 10)');
console.log("Процент подрядчику:", percentage);

const getAllServicePrices = function() {
  return servicePrice1 + servicePrice2;
};

function getFullPrice() {
  return screenPrice + getAllServicePrices();
}

function getTitle() {
  titleProject =
    titleProject.charAt(0).toUpperCase() +
    titleProject.slice(1).toLowerCase();
  return titleProject;
}

function getServicePercentPrices() {
  const total = getFullPrice();
  return total - (total * percentage) / 100;
}

function getRollbackMessage() {
  const total = getFullPrice();
  let discount;

  if (total >= 0 && total < 20000) {
    discount = 0;
    console.log("Скидка не предусмотрена (0%)");
  } else if (total >= 20000 && total < 50000) {
    discount = 5;
    console.log("Скидка 5%");
  } else if (total >= 50000) {
    discount = 10;
    console.log("Скидка 10%");
  } else {
    discount = 0;
    console.log("Некорректная сумма, скидка 0%");
  }

  return discount;
}

console.log("Название проекта (после обработки):", getTitle());

const allServicePrices = getAllServicePrices();
console.log("Стоимость всех дополнительных услуг:", allServicePrices);

const fullPrice = getFullPrice();
console.log("Полная стоимость проекта:", fullPrice);

const servicePercentPrice = getServicePercentPrices();
console.log("Стоимость после вычета процента подрядчику:", servicePercentPrice);

const discount = getRollbackMessage();
console.log("Процент скидки для клиента:", discount, "%");