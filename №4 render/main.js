let htmlElements;
let items = [{
    color: 'white',
    bgColor: 'blue'
  },
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
    items: document.querySelector('div.items'),
    heloWorldText: document.querySelector('div.hello-world'),
  };

  render();

  htmlElements.body = document.body;
  htmlElements.item = document.querySelector('div.item');
}

init();

function divColor(color, bgColor) {
  let newDeleteButton = document.createElement('button');
  newDeleteButton.classList.add("delete-button");
  newDeleteButton.color = color;
  newDeleteButton.innerText = 'X';
  newDeleteButton.addEventListener('click', deletteButtonCkicked);


  let newItemText = document.createElement('span');
  newItemText.classList.add('item-text');
  newItemText.innerText = color;
  newItemText.style.color = color;

  let newItem = document.createElement('div');
  newItem.classList.add('item');
  newItem.style.backgroundColor = bgColor;
  newItem.addEventListener('click', newItemClicked);

  newItem.appendChild(newItemText);
  newItem.appendChild(newDeleteButton);
  htmlElements.items.appendChild(newItem);
}

function render() {
  for (let i = 0; i < items.length; i++) {
    divColor(items[i].color, items[i].bgColor);
  }
}


function newItemClicked(){
  for (let i = 0; i < items.length; i++){
    items[i].selected = false;
  }

  let itemSpan = this.parentElement;
  const itemElement = itemSpan.parentElement;
  /* Тут не ищет елемент */
  const itemitemSpanArray = Array.from(itemElement.document.querySelector('dip.item'));
  let index = itemitemSpanArray.indexOf(itemSpan);
  items[index].selected = true;

  if (items[index].selected === true) {
    htmlElements.item.classList.add('selected');
    htmlElements.body.style.backgroundColor = items[index].bgColor;
    htmlElements.heloWorldText.style.color = items[index].Color;
  }

  render();
}



function reset(){
htmlElements.bgColorInput.value = '';
htmlElements.textColorInput.velue = '';
}

function deletteButtonCkicked(evt) {
  evt.stopPropagation();
  let item = this.parentElement;
  const itemElement = item.parentElement;
  const itemArray = Array.from(itemElement.querySelector('div.item'));
  let index = itemArray.indexOf(item);
  items.splice(index, 1);/* splice умеет и добавлять и удалять елементы(удаляет елемент с индексом) */
 /* Тут нужен ресет */
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

Часть 3 + -"Это задание"
Подготовить портфолио в codepen с нумерацией, соответствующей нумерации заданий ДЗ
Дедлайн
17 мая 18:00
*/