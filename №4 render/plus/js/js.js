let reternArray = [
  {},

]
    function getMouseCoords(e) {
      var e = e || window.event;
      document.getElementsByClassName('div.footballField').innerHTML = e.clientX + ', ' + 
               e.clientY + '<br>' + e.screenX + ', ' + e.screenY;
    }
    
    let followCursor = (function() {
      var ball = document.createElement('div');
      ball.style.position = 'absolute';
      ball.style.margin = '-10px';
      ball.style.padding = '5px';
      /* ball.background =  */
      ball.style.border = '1px solid red';
    
      return {
        init: function() {
          document.body.appendChild(ball);
        },
    
        run: function(e) {
          var e = e || window.event;
          ball.style.left  = (e.clientX - 5) + 'px';
          ball.style.top = (e.clientY - 5) + 'px';
          getMouseCoords(e);
        }
      };
    }());
    
    window.onload = function() {
      followCursor.init();
      document.body.onmousemove = followCursor.run;

    }

