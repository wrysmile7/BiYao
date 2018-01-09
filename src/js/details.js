require(["config"], function(){
	require(["load"], function(){

	});
});


// $('#imag').elevateZoom({});

// $('#imag').elevateZoom({ //内置镜头 
//     zoomType: "inner",//类型：内置镜头 
//     cursor: "pointer", //光标：十字 
//     zoomWindowFadeIn: 500,//镜头窗口淡入速度 
//     zoomWindowFadeOut: 750 //镜头窗口淡出速度 
// });
function timer(){
	$("#imag").elevateZoom({ //淡入/淡出设置 
	    zoomWindowFadeIn: 500,//镜头窗口淡入速度 
	    zoomWindowFadeOut: 500,//镜头窗口淡出速度 
	    lensFadeIn: 500,//透镜淡入速度 
	    lensFadeOut: 500,//透镜淡出速度 
	    borderSize: 1,//放大后图像边框值
	    zoomWindowWidth: 458,//放大后镜头宽度
	    zoomWindowHeight: 458//放大后镜头高度
	});
}
timer();




$(function(){
	$("#imags li").click(function(){
		var imgs = $(this).html();
		$("#midles img").remove();
		$("#midles").html(imgs);
		$("#midles img").attr("id","imag");
	});
});
