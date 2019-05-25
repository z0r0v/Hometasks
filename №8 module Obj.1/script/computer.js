function Computer(monitor, cropus){
    this.monitor = monitor;
    this.cropus = cropus;
}


Computer.prototype.runningWindows = function(){
   return "Running windows";
}
export {Computer};