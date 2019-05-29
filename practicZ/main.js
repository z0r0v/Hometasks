/* 2 */
/* let a ={age:'22'};
let b = a;
b.age = 11;
console.log(a.age); */
/* В первом верно */

/* 3 */
/* const object = ['car, man'];
let a = 'great';
object[0] = `${a} track`;
let newObject = ['flowers', true];
object = newObject; */
/* не верно пытаемся присвоит обьекту нонстанта новое значение в 11 стр  а не в 9 как я указал*/

/* 4 */
const name = 'Андрей';
const array = ['Вася', 'Валя', name, 'Афанасий'];
console.log(array[0]);/* Правильно */
array.splice(0,1, 'Петя');
console.log(array);/* Правильно */
for (let i =0; i < array.length; i++){
    console.log(array[i]);/* Правильно */
}
array.splice(3,1);
console.log(array);/* Правильно */

/* 5 */
/* В задании 5 забыл обьявить обьекты  там короче все не правильно ))*/
let finger1, finger2, finger3, finger4, finger5;
let left = {};
let rihgt ={};
let hunan = [{}];
let hands = {left, rihgt};
let finger = {finger1, finger2, finger3, finger4, finger5};
let legs = {left, rihgt};
let head = {};
let body = {};

hunan.hands = hands;
hunan.legs = legs;
hunan.head = head;
hunan.body = body;
legs.left.finger = finger;
legs.rihgt.finger = finger;
hands.left.finger = finger;
hands.rihgt.finger = finger;

console.log(hunan);

/* 6 */
function Calculator(value1, value2){
    let newValue1 = Number(value1);
    let newValue2 = Number(value2);
    return `${newValue1} ${newValue2}`;
}
 let calculate = new Calculator(2, 5);
 console.log(Calculator(2, 5));
 /* Тут не помню помоему вывел в лог  calculate он выведет функцию*/

 /* 7 */

 /* let a;
 let b;
 a = '3';
 b = 3;
 console.log(a==b);
 console.log(a===b); */
/* Все было верно */


/* 8 */
let a;

function isNumber (value){
    return value !== null && value !== undefined && value !== !isNaN(value) && value.trim() !== '';
}
/* не понимаю по чему не работает */

console.log(isNumber(123));

/* 9 */

/* let button = document.querySelector('button.myButton');
button.addEventListener('click',clicked);
function clicked() {
 console.log(this.dataset.name);
} */
/* Почти правильно забыл там указать кое что( */

    /* 10 */

    let item = document.createElement('div.item');
    item.style.backgroundColor = 'yellow';
    document.getElementById('.output').appendChild(item);

    let span = document.createElement('span');
    span.innerHTML = 'blakc';
    document.querySelector('div.item').appendChild(item);

    let button = document.createElement('button');
    span.innerHTML = 'X';
    document.querySelector('div.item').appendChild(item);












