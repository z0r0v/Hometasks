function Computer(monitor, cropus){
    this.monitor = monitor;
    this.cropus = cropus;
}


Computer.prototype.doRunningWindows = function(){
   return "Running windows";
}
export {Computer};