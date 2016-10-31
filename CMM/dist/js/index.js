 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        loop:true
    });
   /*画布的设置*/
    var html_w=$("html").width();
    var html_h=$("html").height();
    $("#canvas").attr("width",html_w);
    $("#canvas").attr("height",html_h);
    var ctx=$("#canvas").get(0).getContext("2d");
    ctx.beginPath();
    /*画一个图像*/
    var img=new Image();
    img.src="img/a.png"
    img.onload=function(){
    	 ctx.drawImage(img,0,0,img.width,img.height,0,0,html_w,html_h)
    }
    ctx.closePath();
   	ctx.beginPath();
   	ctx.lineWidth="20";
   	ctx.lineCap="round"
   	ctx.lineJoin="round";
   	/*刮奖写效果*/
    $("#canvas").on("touchstart",function(e){
    	var e=e.touches[0];
    	var x1=e.clientX;
    	var y1=e.clientY;
    	/*console.log(x1);*/
    	ctx.moveTo(x1,y1);
    	$("#canvas").on("touchmove",function(e){
    		var e=e.touches[0];
    		var x2=e.clientX;
    		var y2=e.clientY;
    		ctx.globalCompositeOperation="destination-out"
    		ctx.lineTo(x2,y2);
    		ctx.stroke();
    	})
    	$("#canvas").on("touchend",function(){
    		$("#canvas").off("touchmove");
    		$("#canvas").off("touchend");
    		/*获取数据*/
    		var data=ctx.getImageData(0,0,html_w,html_h).data;
    		var len=data.length;
    		var count=0;
    		/*透明度的判断*/
    		for(var i=3;i<len;i+=4){
    			if(data[i]==0){
    				count++;
    			}
    		}
    		/*刮奖效果超过30%，清空画布*/
    		if((count*4/len)>0.1){
    			
    			ctx.clearRect(0,0,html_w,html_h);
    			/*$("#canvas").animate({
					"opacity":0
				},function(){
					$(this).remove();
				})   */
				$("#canvas").remove();
				$("#audio").get(0).play();
				$("#page1 ul").addClass("page1")
    		}   		
    	})
    })
  /*图片的预加载*/
	var arrImg= ['a.png','b.png','c.png','d.png','e.png','ad1.png','ad2.png','ad3.png','ad4.png','c1.png','c2.png','c3.png','c4.png','c5.png','c6.png','d1.png'];
	var imgCount=0
	for(var i=0; i<arrImg.length;i++){
		var img1=new Image();
		img1.src="img/"+arrImg[i];		
		img1.onload=function(){
			imgCount++;
			if(imgCount==arrImg.length){
				$("#loading").animate({
					"opacity":0
				},1000,function(){
					$(this).remove();
				})
				
			}
		}
	}
var flag=true;
$("#music").on("tap",function(){
	if(flag){
		$("#audio").get(0).pause();
		$("#music").addClass("paused")
	}else{
		$("#audio").get(0).play();
		$("#music").removeClass("paused")
	}
	flag=!flag;
})


