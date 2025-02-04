let titleProject = prompt('Название проекта');
console.log("Название проекта:", titleProject);

let screensValue = prompt('Тип экрана: шаблонные, с уникальным дизайном, с анимациями');
console.log("Выбранные экраны:", screensValue);

const screenPrice = +prompt('Цена за экраны');
console.log("Цена за экраны:", screenPrice);

let responsive = prompt('Нужен ли респонсивный сайт? (да/нет)') === 'да';
console.log("Респонсивный сайт нужен:", responsive);

let service1 = prompt('Какой сервис нужен?');
console.log("Сервис 1:", service1);

let servicePrice1 = prompt('Сколько это будет стоить?');
console.log("Цена сервиса 1:", servicePrice1);

let service2 = prompt('Какой еще сервис тебе нужен?');
console.log("Сервис 2:", service2);

let servicePrice2 = prompt('Сколько будет стоить второй сервис?');
console.log("Цена сервиса 2:", servicePrice2);

let fullPrice = screenPrice + +servicePrice1 + +servicePrice2;
console.log("Полная стоимость проекта:", fullPrice);

let discountPercentage; 


if (fullPrice >= 0 && fullPrice < 20000) {
    discountPercentage = 0;
    console.log("Скидка не предусмотрена");
} else if (fullPrice >= 20000 && fullPrice < 50000) {
    discountPercentage = 5;
    console.log("Скидка 5%");
} else if (fullPrice >= 50000) {
    discountPercentage = 10;
    console.log("Скидка 10%");
} else {
    console.log("Что-то пошло не так");
}

let servicePercentPrice = fullPrice - (fullPrice * discountPercentage / 100);
let roundedPrice = Math.round(servicePercentPrice);

console.log("Итоговая сумма с вычетом процентов и скидки:", roundedPrice);
