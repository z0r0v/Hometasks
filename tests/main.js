
//Не могу получить доступ к методу slice на Obj или на newObj
function Arr(){
  this[0] = 1;
  this[1] = 2;
  this[2] = 3;
}

function Obj(){
  this.slice = function(){console.log(321);}
}

Arr.prototype = Object.create(Obj.prototype);
Arr.prototype.constructor = Object.constructor;

let newArr = new Arr;
let newObj = new Obj;

console.dir([1,2,3]);

console.log(newObj);

newObj.slice();