'use strict';
let div = document.querySelector(".main-video-wrp");
const video = document.querySelector(".main-video-container");
let section = document.querySelector(".main-video");
let btn = document.querySelector(".main-video-btn-icon");
btn.addEventListener('click', videoPlay);

function videoPlay(event){
    div.classList.add("hidden");
    video.play();
}
video.addEventListener("ended",function(){
     div.classList.remove("hidden");
    video.load();
})

