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

function render() {

/*I know how to make a designer and I did it in DivColor*/
    function DivColor (color, bgColor){
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

    DivColor(todos[0].color,todos[0].bgColor);
    new DivColor(todos[1].color,todos[1].bgColor);
    new DivColor(todos[2].color,todos[2].bgColor);
}

/*Это ждет своего звездного часа*/
/*function a(){
    for (let i = 0; i < todos.length; i++) {
        console.log(todos[i].color);
    }
}*/








