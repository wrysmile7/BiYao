require(["config"], function(){
	require(["jquery","template","cookie","load"], function($,template){
		$.cookie.json = true;
		//加载对应商品的数据
		var contrast = $.cookie("id") + "";
		// console.log(contrast);
		$.getJSON("/mock/products.json", function(data){
			let contrastData = data.res_body.details;
			// console.log(contrastData);
			let arr=[],
				xb=0;
			$.each(contrastData,function(index,elements){
				arr.push(`${elements.id}`);
			})
			// console.log(arr);
			xb = $.inArray(contrast,arr);
			// console.log(xb);
			let cData = {products : data.res_body.details};
			// console.log(cData);
			var array =[]
			array.push(cData.products[xb]);
			// console.log(array);
			var html_1 = "",
				html_2 = "",
				html_3 = "",
				html_4 = "",
				html_5 = "";
			$.each(array, function(index, element){
				html_1 = `<span>${element.dt_name}</span>`;
				html_2 = `<span>${element.id}</span>`;
				html_3 = `<li><a href="javascript:void(0)" data-image="${element.big_img1}" data-zoom-image="${element.big_img1}"><img src="${element.big_img1}"></a></li>
					<li><a href="javascript:void(0)" data-image="${element.big_img2}" data-zoom-image="${element.big_img2}"><img src="${element.big_img2}"></a></li>
					<li><a href="javascript:void(0)" data-image="${element.big_img3}" data-zoom-image="${element.big_img3}"><img src="${element.big_img3}"></a></li>
					<li><a href="javascript:void(0)" data-image="${element.big_img4}" data-zoom-image="${element.big_img4}"><img src="${element.big_img4}"></a></li>
					<li><a href="javascript:void(0)" data-image="${element.big_img5}" data-zoom-image="${element.big_img5}"><img src="${element.big_img5}"></a></li>`;
				html_4 = `${element.price}`;
				html_5 = `<li class="nocheck">${element.dt_color1}<em></em></li>
				<li class="nocheck">${element.dt_color2}<em></em></li>
				<li class="nocheck">${element.dt_color3}<em></em></li>`;
			});
			$("#dt_1").html(html_1);
			$("#dt_id").html(html_2);
			$("#imags").html(html_3);
			$("#details_name").html(html_1);
			$("#details_price").html(html_4);
			$("#details_color").html(html_5);

		});
	});
});


// $('#imag').elevateZoom({});

// $('#imag').elevateZoom({ //内置镜头 
//     zoomType: "inner",//类型：内置镜头 
//     cursor: "pointer", //光标：十字 
//     zoomWindowFadeIn: 500,//镜头窗口淡入速度 
//     zoomWindowFadeOut: 750 //镜头窗口淡出速度 
// });

$("#imag").elevateZoom({ //淡入/淡出设置 
    zoomWindowFadeIn: 500,//镜头窗口淡入速度 
    zoomWindowFadeOut: 500,//镜头窗口淡出速度 
    lensFadeIn: 500,//透镜淡入速度 
    lensFadeOut: 500,//透镜淡出速度 
    borderSize: 1,//放大后图像边框值
    zoomWindowWidth: 458,//放大后镜头宽度
    zoomWindowHeight: 458, //放大后镜头高度
    gallery : "imags",
    galleryActiveClass : "active"
});



$(function(){
	$("#imags").on("click", "li", function(e){
		var imgs = $(this).find("img").attr("src");
		$("#midles").find("#imag").attr("src",imgs);
	});
});

//颜色选择
$(function(){
	$("#details_color").on("click", "li", function(e){
		$(this).removeClass('nocheck').attr("id","details_id").siblings().addClass('nocheck');
	});
});

//尺寸选择
$(function(){
	$("#sizes li").click(function(){
		$(this).removeClass('nocheck').attr("id","details_id").siblings().addClass('nocheck');
	});
});


//数量选择
$(function(){
	//数量减
	$("#minus").click(function(){
		var _nums = $("#nums").text();
		if(_nums == 1){
			$("#nums").text("1");
		}else{
			_nums--;
			$("#nums").text(_nums);
		}
	});
	//数量加
	$("#adds").click(function(){
		var _nums = $("#nums").text();
		_nums++;
		$("#nums").text(_nums);
	});
});	



//将商品存入cookie
$(function(){
	$(".addcart").click(function(){
		var _dt_id = $("#dt_id").text();
		$.cookie("key",_dt_id,{path: "/", expires: 7});
	});	
});


