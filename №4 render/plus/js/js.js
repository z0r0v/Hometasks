let reternArray = [
  {},

]
    function getMouseCoords(e) {
      var e = e || window.event;
      document.getElementsByClassName('div.footballField').innerHTML = e.clientX + ', ' + 
               e.clientY + '<br>' + e.screenX + ', ' + e.screenY;
    }
    
    let followCursor = (function() {

      let ball = document.createElement('div');
      ball.style.position = 'absolute';
      ball.style.margin = '-10px';
      ball.style.padding = '5px';
      ball.style.border = '1px solid red';

      let balImg = document.createElement('circle');
      balImg.id = 'Oval-1';
      balImg.fill = '#FFFFFF';
      balImg.cx = '20';
      balImg.ry = '20';
      balImg.r = '20';
      console.log(balImg);
      

    
      return {
        init: function() {
          document.body.appendChild(ball);
          ball.appendChild(balImg);
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

