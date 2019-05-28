// Функция, изменяющая содержание t2
function modifyText(new_text) {
    var t2 = document.getElementById("t2");
    t2.firstChild.nodeValue = new_text;    
  }
   
  // Функция, добавляющая слушатель к таблице
  el = document.getElementById("outside");
  el.addEventListener("click", function(){
      modifyText("четыре")}, false);