/* инструкция по созданию обьекта audience57*/
function Audience57(timeAir){
    this.time = timeAir;
}
/* Функция проветривания через прототип в обьект */
Audience57.prototype.timeAir = (time) => {
    this.time += time;
}
let audience57 = new Audience57(5);/* Создано проветриваемое 5 минут помещение*/
audience57.timeAir(5);/* Увеличили проветривание на 5 минут += time*/

function CharAud(ceilingHeight, roomLength, roomWidth, roomNumber){
    this.ceilingHeight = ceilingHeight;
    this.roomLength = roomLength;
    this.roomWidth = roomWidth;
    this.roomNumber = roomNumber;
}

CharAud.prototype.cheNameTeacherInNameplate = (nameTeacher) => {
    /* Конкатенация фразы в ковычках и имени на табличке */
    this.nameTeacher = "great teacher" + nameTeacher;
}
/* Создание обьекта с характеристиками для аудитории 57 */
let charAud = new CharAud("2.5m", "5m", "5m", "57");
/* Изменение имени на таблички в характеристиках аудитории 57 */
charAud.cheNameTeacherInNameplate("Yriy");/*  */


function WindowCharacter (fiveChamberProfile, doubleGlazingThickness, sealColor){
    this.fiveChamberProfile = fiveChamberProfile;
    this.doubleGlazingThickness = doubleGlazingThickness;
    this.sealColor = sealColor;
}
let windowCharacter = new WindowCharacter("71mm", "40mm", "Gray");

WindowCharacter.prototype.windowOpening = (handlePosition) => {
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
/* окно открыто на проветривание */
windowCharacter.windowOpening("up");


function Door(material, doorHandle){
    this.material = material;
    this.doorHandle = doorHandle;
}
let door = new Door("wood", "tupai");

Door.prototype.DoorOpening = () => {
    let open = "Makes a sound: 'Krch, Krch, Krch'";
    return open;
}
/* Открыли двер она издала звук */
door.DoorOpening();


function Projector(trademark, model, quality){
    this.trademark = trademark;
    this.model = model;
    this.quality = quality;
}
/* Разобраться с этой хуйней поменять  на const  сделать +  */
Projector.prototype.readMakeModelProjector = () => {
    debugger;
    console.log(this.model);
}

let projector = new Projector("Philips", "PPX 4835", "HD 720p");
console.log(projector);
projector.readMakeModelProjector();



function Table(manufacturer, color,type){
    this.manufacturer = manufacturer;
    this.color = color;
    this.type = type;
}
let table = new Table("Ikea","wenge","office");

Table.prototype.pushShelf = () => {
    let shelf = 'push shelf';
    return shelf;
}
table.pushShelf();


function Sensei(senName, senLastName, qualification, character){
    this.senName = senName;
    this.senLastName = senLastName;
    this.qualification = qualification;
    this.character = character;
}
let sensei = new Sensei("Yury", "Tatsenka", "Full stack web developer", "vigorous");

Sensei.prototype.answerStupidQuestions = () => {
    let speak = 'who doesn\'t understand?';
    return speak;
}
sensei.answerStupidQuestions();


function Computer(monitor, cropus){
    this.monitor = monitor;
    this.cropus = cropus;
}
let computer = new Computer("17\"", "Tower")

Computer.prototype.runningWindows = () => {
   return "running windows";
}

function VideoCard(graphicsProcessor, typeVideoMemory, videoMemoryBus, cooling){
    this.graphicsProcessor = graphicsProcessor;
    this.typeVideoMemory = typeVideoMemory;
    this.videoMemoryBus = videoMemoryBus;
    this.cooling = cooling;
}
let videoCard = new VideoCard("GeForce 9500 GT", "GDDR5", "32bit", "active");

VideoCard.prototype.videoCardStart = () =>{
    return "videoCardStart";
}
videoCard.videoCardStart();


audience57.charAud = charAud;
audience57.windowCharacter = windowCharacter;
audience57.door = door;
audience57.projector = projector;
audience57.table = table;
audience57.sensei = sensei;
computer.videoCard = videoCard;
audience57.computer =computer;

/* console.log(audience57); */


