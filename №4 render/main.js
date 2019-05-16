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
    todos: document.querySelector('div.todos')
  };

  render();
}

init();

function divColor (color, bgColor){
    let newDeleteButton = document.createElement('button');
    newDeleteButton.classList.add("delete-button");
    newDeleteButton.color = color;
    newDeleteButton.innerText = "X";
    newDeleteButton.addEventListener('click', closedDivelement);


    let newTodoText = document.createElement('span');
    newTodoText.classList.add("todo-text");
    newTodoText.innerText = color;
    newTodoText.style.color = color;

    let newTodo = document.createElement('div');
    newTodo.classList.add("todo");
    newTodo.style.backgroundColor = bgColor;

    newTodo.appendChild(newTodoText);
    newTodo.appendChild(newDeleteButton);
    htmlElements.todos.appendChild(newTodo);
}

function render() {
    for (let i = 0; i < todos.length; i++) {
        divColor(todos[i].color, todos[i].bgColor);
    }
}

/* Добавляет бордер к выбранному елементу и красит баграунд в цвет */
function addBorderColorBg(){

};

/* функция сброса */
function resetRender(){
}

/* Функция выбора елемента созданного масива соответствующего нашему */
function checElemenMasev(){
// суда хочу вынести поиск елемнта масива
}

// Вешаем на кнопку делит
function closedDivelement(addBorderColorBg){
  addBorderColorBg.stopPropagation();
  let item = this.parentElement;
  const itemElements = item.parentElement;
  const itemArray = Array.from(itemElements.querySelector('div.todo'));
  let index = itemArray.indexOf(item);
  todos.splice(index, 1);
  // тут нужно еще что то сделать
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