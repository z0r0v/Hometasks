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

function closedDivelement(eventChenColorBg){
  eventChenColorBg.stopPropagation();
  let item = this.parentElement;
  const itemElements = item.parentElement;
  const itemArray = Array.from(itemElements.querySelector('div.todo'));
  let index = itemArray.indexOf(item);
  items.splice(index, 1);
  render();
}

// сброс селектет
// тут перебор масива
// i[i].selectet = folse;
// 1231234121231343532fktr345
