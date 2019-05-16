let htmlElements;
let todos = [
  { color: 'white', bgColor: 'blue' },
  {
    color: 'black',
    bgColor: 'yellow'
  },
  {
    color: 'green',
    bgColor: 'whitesmoke'
  }
];


function init() {
  htmlElements = {
    bgColorInput: document.querySelector('input.bg-color-input'),
    textColorInput: document.querySelector('input.text-color-input'),
    addButton: document.querySelector('button.add-button'),
    todos: document.querySelector('div.todos'),
    heloWorldText: document.querySelector('div.hello-world'),
    body: document.body,
  };

  render();
}

init();

function divColor (color, bgColor){
    let newDeleteButton = document.createElement('button');
    newDeleteButton.classList.add("delete-button");
    newDeleteButton.color = color;
    newDeleteButton.innerText = "X";
    newDeleteButton.addEventListener('click', deletteButtonCkicked);


    let newTodoText = document.createElement('span');
    newTodoText.classList.add("todo-text");
    newTodoText.innerText = color;
    newTodoText.style.color = color;

    let newTodo = document.createElement('div');
    newTodo.classList.add("todo");
    newTodo.style.backgroundColor = bgColor;
    newTodo.addEventListener('click', addBorderColorBg);

    newTodo.appendChild(newTodoText);
    newTodo.appendChild(newDeleteButton);
    htmlElements.todos.appendChild(newTodo);
}

function render() {
    for (let i = 0; i < todos.length; i++) {
        divColor(todos[i].color, todos[i].bgColor);
    }
}


console.log(htmlElements.heloWorldText.style);
/* Добавляет бордер к выбранному елементу и красит баграунд в цвет */
function addBorderColorBg() {
  htmlElements.body.style.backgroundColor = todos[0].bgColor;
  htmlElements.heloWorldText.style.color = "red";
  
};



/* функция сброса */
function reset(){
  htmlElements.bgColorInput.value = "";
  htmlElements.textColorInput.value = "";
}

/* Функция выбора елемента созданного масива соответствующего нашему */
function checElemenMasev(){
// суда хочу вынести поиск елемнта масива
}

// Вешаем на кнопку делит РАБОТАЕТ НЕ ПРАВИЛЬНО
function deletteButtonCkicked(event) {
event.stopPropagation()
let item = this.parentElement;
const itemElements = item.parentElement;
let nodeArray = itemElements.querySelector('div.item');
const itemArray = Array.from(nodeArray);
let index = itemArray.indexOf(item);
item.splice(index, 1);
render();
}



// Функция которая делает сброс селектета
// тут перебор масива
// i[i].selectet = folse;
// Функция добовляет селект масиву и меняет его бордер на боржер цвета текста
// После этого всего рендер

// Попросить доп задание !!!!
/*  
Часть 1
В примере из дз 4.2. Реализовать удаление элементов из списка по нажатию на ‘X’
Часть 2
В примере из дз 4.2. Реализовать выделение элемента при клике на div class=”item”. 
При этом фон и цвет текста заголовка принимают значения цвета текста и фона выбранного 
div class=”item”

Часть 3
Подготовить портфолио в codepen с нумерацией, соответствующей нумерации заданий ДЗ
Дедлайн
17 мая 18:00
*/