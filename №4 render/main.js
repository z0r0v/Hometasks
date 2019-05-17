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
  if (htmlElements.items.childNodes.length) {
    htmlElements.items.innerHTML = null;
  }
  for (let i = 0; i < items.length; i++) {
    divColor(items[i].color, items[i].bgColor);
  }
}

function newItemClicked() {
  for (let i = 0; i < items.length; i++) {
    items[i].selected = false;
  }
  const newItem = this.parentElement;
  const elementCollection = newItem.childNodes;
  const newItemArray = Array.from(elementCollection);
  let index = newItemArray.indexOf(this);
  items[index].selected = true;

  function addBgColor() {
    if (items[index].selected === true) {
      htmlElements.body.style.backgroundColor = items[index].bgColor;
      htmlElements.heloWorldText.style.color = items[index].color;
    }
    addBorder();
  }
  addBgColor();
}
/* Не используемая пока функ */
/*  function resset() {
   htmlElements.bgColorInput.value = '';
   htmlElements.textColorInput.velue = '';
 } */

function deletteButtonCkicked(evt) {
  evt.stopPropagation();
  let item = this.parentElement;
  const itemElement = item.parentElement;
  const itemArray = Array.from(itemElement.querySelectorAll('div.item'));
  let index = itemArray.indexOf(item);
  items.splice(index, 1);
  render();
  addBorder();
}

/* items.forEach(obj => { obj.selected = false }); цикл в одну строчку*/

function addBorder() {
  let item = document.querySelector('div.items');
  const itemArray = Array.from(item.querySelectorAll('div.item'));
  for (let i = 0; i < items.length; i++) {
    if (items[i].selected === true) {
      index = items.indexOf(items[i]);
      for (let i = 0; i < itemArray.length; i++) {
        itemArray[index].classList.add('selected');
      }
    } else {
      itemArray[i].classList.remove('selected');
    }
  }
}