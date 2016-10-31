/**
 * Created by Administrator on 2016/10/19.
 */
require.config({
    baseUrl:"js/",
    paths:{
       sp:"swiper",
        th:"touch",
       sa: "swiper.animate1.0.2.min",
        fl:"flexible",
        fc:"flexible_css",
        in:"index"
    },
    shim:{ // 通过 shim 的配置来把非 AMD 编写的模块转为 AMD 的模块
        'sp':{
            exports:"sp"
        },
        'sa':{
            deps:["sp"], // 定义依赖模块
            exports:"sa"
        },
        'th':{
            exports:"th"
        },
        'fl':{
            exports:"fl"
        },
        'fc':{
            exports:"fc"
        },
        'in':{
            exports:"in"
        }
    }
});
require(["sp","sa","th","fl","fc","in"],function(s,a,c,l,f,i){
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