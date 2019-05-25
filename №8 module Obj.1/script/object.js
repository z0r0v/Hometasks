import {Audience57} from "./audience57.js";
import {CharAud} from "./charAud.js";
import {WindowCharacter} from "./windowCharacter.js";
import {Door} from "./door.js";
import {Projector} from "./projector.js";
import {Table} from "./table.js";
import {Sensei} from "./sensei";
import {Computer} from "./Computer";



const audience57 = new Audience57(0);/* Создано помещение  задан парметр проветривания 0*/
audience57.timeAir(5);/* Проветрили 5 минут*/
audience57.timeAir(5);/* Проветрили еще раз 5 минут итого оно проветривалось 10минут*/

/* Создание обьекта с характеристиками для аудитории 57 */
const charAud = new CharAud("2.5m", "5m", "5m", "57");
/* Изменение имени на таблички в характеристиках аудитории 57 */
charAud.cheNameTeacherInNameplate("Yriy");/*  */

/* создали окно */
const windowCharacter = new WindowCharacter("71mm", "40mm", "Gray");
/* Открыли окно на проветривание */
windowCharacter.windowOpening("up");


const door = new Door("wood", "tupai");
/* Открыли двер она издала звук */
door.DoorOpening();


const projector = new Projector("Philips", "PPX 4835", "HD 720p");
/* Читаем свойства проэктора или он сам читает, умный такой проектор))*/
projector.readMakeModelProjector();

const table = new Table("Ikea","wenge","office");
/* Выдвигаем полку стола */
table.pushShelf();


const sensei = new Sensei("Yury", "Tatsenka", "Full stack web developer", "vigorous");
/* Сенсей спросил кому че не понятно ?*/
sensei.answerStupidQuestions();


const computer = new Computer("17\"", "Tower");
/* компьютер запустил винду */
computer.runningWindows();


function VideoCard(graphicsProcessor, typeVideoMemory, videoMemoryBus, cooling){
    this.graphicsProcessor = graphicsProcessor;
    this.typeVideoMemory = typeVideoMemory;
    this.videoMemoryBus = videoMemoryBus;
    this.cooling = cooling;
}


VideoCard.prototype.videoCardSpecificationsOnScreen = function(){
        const produced = "Produced by";
        let producedСountry;
        const model = "model";
        const memoryType = "memory type";
        const power = "power";
        const type = "type";
        if(this.graphicsProcessor = "GeForce 9500 GT")
            producedСountry = "Taiwan";
    return `${produced}: ${producedСountry}, ${model}: ${this.graphicsProcessor}, ${memoryType}: ${this.typeVideoMemory}, ${power}: ${this.videoMemoryBus}, ${type}: ${this.cooling}.`;
}

const videoCard = new VideoCard("GeForce 9500 GT", "GDDR5", "32bit", "active");
videoCard.videoCardSpecificationsOnScreen();

audience57.charAud = charAud;
audience57.windowCharacter = windowCharacter;
audience57.door = door;
audience57.projector = projector;
audience57.table = table;
audience57.sensei = sensei;
computer.videoCard = videoCard;
audience57.computer = computer;
