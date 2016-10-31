(function(){
    $(function(){
        var load = $(".load");

        setInterval(function(){
            load.css("display","none");
        },100);


        var musicC = $("#audio_btn");
        var audio = $("#media")[0];
        musicC.on("click",function(){
            if(audio.paused){
                audio.play();
                //musicC.style.animationPlayState = "running";
                musicC.addClass("rotate").removeClass("off");
            }else {
                audio.pause();
                //musicC.style.animationPlayState = "paused";
                musicC.addClass("off").removeClass("rotate");
            }
        })
    })
})();
