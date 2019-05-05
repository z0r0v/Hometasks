let audience = {
    ceilingHeight: "2.5m",
    roomLength: "5m",
    roomWidth: "5m",
    roomNumber: "57",
};

let audWindow = {
    fiveChamberProfile: "71mm",
    doubleGlazingThickness: "40mm",
    sealColor: "Gray",
};

let door = {
    material: "wood",
    doorHandle: "tupai",
};

let projector = {
    trademark: "Philips",
    model: "PPX 4835",
    quality: "HD 720p",
};

let table ={
    manufacturer:"Ikea",
    color:"wenge",
    type:"office",
};

let sensei = {
    senName:"Yury",
    senLastName:"Tatsenka",
    qualification:"Full stack web developer",
    character:"vigorous",
};

let computer = {
    monitor:"17\"",
    cropus:"Tower",
};

let videoCard ={
    graphicsProcessor:"GeForce 9500 GT",
    typeVideoMemory:"GDDR5",
    videoMemoryBus:"32bit",
    cooling:"active",
};


audience.audWindow = audWindow;
audience.door = door;
audience.projector = projector;
audience.table = table;
audience.sensei = sensei;
computer.videoCard = videoCard;
audience.computer =computer;


console.log(audience);
