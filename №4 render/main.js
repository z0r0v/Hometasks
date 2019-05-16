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
    body: document.body,
  };

  render();
}

init();

function divColor(color, bgColor) {
  let newDeleteButton = document.createElement('button');
  newDeleteButton.classList.add("delete-button");
  newDeleteButton.color = color;
  newDeleteButton.innerText = "X";
  newDeleteButton.addEventListener('click', deletteButtonCkicked);


  let newitemText = document.createElement('span');
  newitemText.classList.add("item-text");
  newitemText.innerText = color;
  newitemText.style.color = color;

  let newitem = document.createElement('div');
  newitem.classList.add("item");
  newitem.style.backgroundColor = bgColor;
  newitem.addEventListener('click', addBorderColorBg);

  newitem.appendChild(newitemText);
  newitem.appendChild(newDeleteButton);
  htmlElements.items.appendChild(newitem);
}

function render() {
  for (let i = 0; i < items.length; i++) {
    divColor(items[i].color, items[i].bgColor);
  }
}

/* Добавляет бордер к выбранному елементу и красит баграунд в цвет */
function addBorderColorBg() {
  resetSelection();
  // Тут подбор индекса масива будет
  htmlElements.body.style.backgroundColor = items[0].bgColor;/* Временно нулевой елемент */
  htmlElements.heloWorldText.style.color = items[0].Color;/* Временно нулевой елемент */
  items[0].select = true; /* Временно нулевой елемент */

  /* Функция которая если тру выдает бордер */
    if (items[0].select === true) {/* Врмеменно нулевой елемент */
      let item = document.querySelector('div.item');
      item.classList.add('selected');
    }
};

/* функция сброса */
function resetSelection(){
  document.querySelector('div.item').classList.remove('selected');
  htmlElements.body.style.backgroundColor = "";
  htmlElements.heloWorldText.style.color = "";
}


/* Функция выбора елемента созданного масива соответствующего нашему */
function checElemenMasev() {
  // суда хочу вынести поиск елемнта масива
  debugger;
  let item = this.parentElement;
  const itemElements = item.parentElement;
  let nodeArray = itemElements.querySelector('div.item');
  const itemArray = Array.from(nodeArray);
  let index = itemArray.indexOf(item);
  item.splice(index, 1);
}

// Вешаем на кнопку делит РАБОТАЕТ НЕ ПРАВИЛЬНО
function deletteButtonCkicked(event) {
  event.stopPropagation();
  checElemenMasev(); /* Вызываю выбор елемента масива */
  render(); /* Отрисовываю обьек */
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