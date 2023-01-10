document.addEventListener("DOMContentLoaded", () => {
    let musicSrc=new Audio("./melody.mp3");
    let musicOn=document.querySelector(".background-music");
    musicOn.addEventListener("touchstart",musicMode);
    function musicMode(){
        if(musicSrc.paused){
       musicSrc.volume=0.5;
       musicSrc.play();
        }else{
            musicSrc.pause();
        }
    }
});