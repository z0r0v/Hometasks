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
  if(htmlElements.items.childNodes.length){/* 0 это фелс а цифры это тру */
    htmlElements.items.innerHTML = null;/* Обнуляем DIV - ки если не равна нолю */
  }

  for (let i = 0; i < items.length; i++) {
    divColor(items[i].color, items[i].bgColor);
  }
}

function newItemClicked(){
  for (let i = 0; i < items.length; i++){
    items[i].selected = false;
  }

  const newItem = this.parentElement;
  const elementCollection = newItem.childNodes;
  const newItemArray = Array.from(elementCollection);
  let index = newItemArray.indexOf(this);/* Читать про this */
  console.log(newItemArray);
  items[index].selected = true;

  function addBgBorder() {
    if (items[index].selected === true) {
      for (let i = 0; i < newItemArray.length; i++){
        newItemArray[i].classList.remove('selected');
      }
      newItemArray[index].classList.add('selected');
      htmlElements.body.style.backgroundColor = items[index].bgColor;
      htmlElements.heloWorldText.style.color = items[index].color;
    }
   }
  addBgBorder();
}

  function resset(){
    htmlElements.bgColorInput.value = '';
    htmlElements.textColorInput.velue = '';
  }

function deletteButtonCkicked(evt) {
  evt.stopPropagation();
  let item = this.parentElement;
  const itemElement = item.parentElement;
  const itemArray = Array.from(itemElement.querySelectorAll('div.item'));
  let index = itemArray.indexOf(item);
  console.log(index);
  items.splice(index, 1);/* splice умеет и добавлять и удалять елементы(удаляет елемент с индексом) */
  /* Тут нужен ресет */
  render();
}