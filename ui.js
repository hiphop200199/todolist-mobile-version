document.addEventListener("DOMContentLoaded", () => {
   
    let musicSrc=new Audio("./melody.mp3");
    let musicOn=document.querySelector(".background-music");
    let edit = document.querySelector(".edit");
    let cover=document.querySelector(".cover");
    let paper = document.querySelector(".paper");
    let modal=document.querySelector(".message");
    let message=document.querySelector(".modal-message")
    let closeBtn=document.querySelector(".closebtn");
    let finish=document.querySelector(".finish");
    bye.addEventListener("click",goodbye);
    musicOn.addEventListener("click",musicMode);
    edit.addEventListener("click",openNote);
    closeBtn.addEventListener("click",closedialog);
    finish.addEventListener("click",closeNote);
   
   
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