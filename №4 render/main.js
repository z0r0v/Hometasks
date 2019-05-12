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

/*<div class="todos">
        <div class="todo" style="background-color: blue;">
          <span class="todo-text" style="color: white;">white</span>
          <button class="delete-button">X</button>
         </div>
        <div class="todo" style="background-color: yellow;">
          <span class="todo-text" style="color: black;">black</span>
          <button class="delete-button">X</button>
        </div>
        <div class="todo" style="background-color: whitesmoke;">
          <span class="todo-text" style="color: green;">green</span>
          <button class="delete-button">X</button>
        </div>
 </div>*/


}
