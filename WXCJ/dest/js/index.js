

require(["sp","sa","th","fl","fc","ms","fs"],function(s,a,c,l,f,m,fs){

    var swiper = new s(".swiper-container",{
        "direction":"vertical",
        pagination:".swiper-pagination",
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    })
});