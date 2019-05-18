document.onclick = function(e) { // выводит текущие координаты при клике
  document.getElementById('coords').innerHTML = e.clientX + ':' + e.clientY;
};
let field = document.getElementById('field');

let ballArray = []


  field.onclick = function(e){
  document.querySelector('svg.svg').style.left = e.pageX + "px";
  document.querySelector('svg.svg').style.top = e.pageY + "px";

  ballArray.x = this.e.pageX + "px";
  ballArray.y = this.e.pageY + "px";  
}



console.log(ballArray);


