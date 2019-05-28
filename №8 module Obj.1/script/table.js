function Table(manufacturer, color,type){
    this.manufacturer = manufacturer;
    this.color = color;
    this.type = type;
}


Table.prototype.doPushShelf = function(){
    const shelf = "Push shelf";
    return shelf;
}
export {Table};