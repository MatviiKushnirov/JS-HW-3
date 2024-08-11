// Task 1
// Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.

let result = 5 + 5 + '5';
console.log(`Task 1 result >>> ${result}, variable type - ${typeof result}`);

// Task 2
// Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє чи містить змінна email символ @ і рахує загальну кількість символів. Результат виведіть в консоль.

let email = "dotdog@gmail.com";
console.log(`Task 2 result >>> ${email.includes("@")}, length - ${email.length}`);

// Task 3
// Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.

let my = "My";
let nickname = "name";
let is = "is";
let fullName = my + " " + nickname + " " + is + " " + 'Viktor';

console.log(`Task 3 result >>> ${fullName}`);

// Task 4
// Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»

let userName = "Цицирон";
let payment = 25.99;

alert("Task 4");
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);