document.addEventListener("DOMContentLoaded", () => {
   
    let musicSrc=new Audio("./melody.mp3");
    let musicOn=document.querySelector(".background-music");
    let paper = document.querySelector(".paper");
  
    musicOn.addEventListener("touchstart",musicMode);
    
    closeBtn.addEventListener("touchstart",closedialog);
  
   
   
    function musicMode(){
        if(musicSrc.paused){
       musicSrc.volume=0.5;
       musicSrc.play();
        }else{
            musicSrc.pause();
        }
    }
  
    function closedialog(){
        modal.close();
    }
   
   
});