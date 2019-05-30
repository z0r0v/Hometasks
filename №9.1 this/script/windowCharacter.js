function WindowCharacter(fiveChamberProfile, doubleGlazingThickness, sealColor){
    /* создаю новое свойство и инициирую его значением, 
    полученным через входной параметр (при помощи this)*/    
    this.fiveChamberProfile = fiveChamberProfile;
    this.doubleGlazingThickness = doubleGlazingThickness;
    this.sealColor = sealColor;

     /* создаю новое свойство и инициирую его любым значением */
     this.pressureInsideGlasses = 2;
     /* инициализурую переменную функциональным выражением */
     let closeWindow = function() {
        return "closing";
     }
     /* на основе функц. выраж.  создаю новый метод*/
     this.closeWindow = closeWindow;
    
}
/* Действия производимые с окном */
WindowCharacter.prototype.openWindow = function(handlePosition){
    this.pressureInsideGlasses = 1;
    switch (handlePosition){
        case 'up':
            return "ventilation";
            break;
        case 'horizontally':
            return "full opening";
            break;
        case 'down':
            return "closing";
            break;
        default:
            return "Window closed";
    }
}
export {WindowCharacter};