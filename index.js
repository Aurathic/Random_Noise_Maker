"use strict";

let audio = new Audio('mlg-airhorn.mp3');
let getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
let play = () => {
    audio.play();
    let millisec = getRandomInteger(5*60*1000,10*60*1000);
    console.log(millisec)
    setTimeout(play,millisec);
}
setTimeout(play,getRandomInteger(5*60*1000,10*60*1000));