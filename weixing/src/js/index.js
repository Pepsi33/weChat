(function(){
    var load = document.querySelector(".load");
    window.onload = function(){
        setInterval(function(){
            load.style.display = "none";
        },100)
    };
    var musicC = document.querySelector(".music-c");
    var musicNote = document.querySelector(".music-note");
    var audio = document.querySelector("audio");
    musicC.addEventListener("click",function(){
        if(audio.paused){
            audio.play();
            musicNote.style.zIndex =2;
            musicC.style.animationPlayState = "running";
            musicC.className = "music-c"
        }else {
            musicNote.style.zIndex =-1;
            audio.pause();
            musicC.style.animationPlayState = "paused";
            musicC.className = "music-c active"
        }
    })
})();
