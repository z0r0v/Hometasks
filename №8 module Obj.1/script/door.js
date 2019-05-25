function Door(material, doorHandle){
    this.material = material;
    this.doorHandle = doorHandle;
}


Door.prototype.DoorOpening = function(){
    const open = `Makes a sound`;
    const sound = `Krch, Krch, Krch`;
    return `${open}: ${sound}`;
}

export {Door};