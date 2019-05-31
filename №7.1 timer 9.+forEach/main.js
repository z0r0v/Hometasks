import {Clock} from "./module/clock.js";
import {Tabs} from "./module/tabs.js";


const clock = new Clock();
const tabs = new Tabs();


function init() {
    clock.init();
    tabs.init();
}

init();