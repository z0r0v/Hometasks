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


