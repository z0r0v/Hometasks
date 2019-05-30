import {htmlElements} from "./htmlElements.js";

function Tabs(){}

Tabs.prototype.init = function(){
    htmlElements.links.forEach(function(link){
        link.addEventListener('click', linkClicked);
    });
    enableTab('clock');
}

function linkClicked(){
    enableTab(this.dataset.mode);
}

function enableTab(mode){
    enableLink(mode);
    enableContent(mode);
}

enableLink(mode){
    removeClass('selected', htmlElements.links);
    htmlElements.links.forEach(function(link){
        if(link.dataset.mode === mode){
            
        }
    }
}