/* инструкция по созданию обьекта audience57*/
function Audience57(timeAir){
    this.time = timeAir;
}
/* Функция проветривания через прототип в обьект */
Audience57.prototype.timeAir = function(time){
    this.time += time;
}

export {Audience57};