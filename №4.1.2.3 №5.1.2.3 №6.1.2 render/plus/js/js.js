let ballArray = []
let field = document.getElementById('field');
let ball = document.querySelector('svg.svg');
let coords = document.getElementById('coords');
document.onclick = function(e) { // выводит текущие координаты при клике
  coords.innerHTML = e.clientX + ':' + e.clientY;
};
  field.onclick = function(e){
    ball.style.left = e.pageX + "px";
    ball.style.top = e.pageY + "px";
}


function swing(t) {
  return (-Math.cos(p*Math.PI)/2) + 0.5;
}