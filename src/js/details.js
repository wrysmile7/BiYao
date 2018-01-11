require(["config"], function(){
	require(["jquery","template","cookie","load"], function($,template){
		// 配置 cookie 插件的 json 数据自动转换
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
				html_5 = "",
				html_6 = "";
			$.each(array, function(index, element){
				html_1 = `<span>${element.dt_name}</span>`;
				html_2 = `<span>${element.id}</span>`;
				html_3 = `<li><a href="javascript:void(0)" data-image="${element.big_img1}" data-zoom-image="${element.big_img1}"><img src="${element.big_img1}"></a></li>
					<li><a href="javascript:void(0)" data-image="${element.big_img2}" data-zoom-image="${element.big_img2}"><img src="${element.big_img2}"></a></li>
					<li><a href="javascript:void(0)" data-image="${element.big_img3}" data-zoom-image="${element.big_img3}"><img src="${element.big_img3}"></a></li>
					<li><a href="javascript:void(0)" data-image="${element.big_img4}" data-zoom-image="${element.big_img4}"><img src="${element.big_img4}"></a></li>
					<li><a href="javascript:void(0)" data-image="${element.big_img5}" data-zoom-image="${element.big_img5}"><img src="${element.big_img5}"></a></li>`;
				html_4 = `${element.price}`;
				html_5 = `<li id="dt_color">${element.dt_color1}<em></em></li>
				<li class="nocheck">${element.dt_color2}<em></em></li>
				<li class="nocheck">${element.dt_color3}<em></em></li>`;
				html_6 = `<img src="${element.big_img1}" id="imag">`;
			});
			$("#dt_1").html(html_1);
			$("#dt_id").html(html_2);
			$("#imags").html(html_3);
			$("#details_name").html(html_1);
			$("#details_price").html(html_4);
			$("#details_color").html(html_5);
			$("#midles").html(html_6);

		});


		
		
		// 查找 id 所表示的商品在 products 中位置
		function exist(id, products) {
			var idx = -1;
			$.each(products, function(index, elemenet){
				if (elemenet.id == id) {
					idx = index;
					return false;
				}
			});

			return idx;
		}
		//将商品存入cookie
		$(".btns").delegate(".addcart", "click", function(event){
			var _box = $(this).parent().parent().parent().parent();
			// 将当前选购商品的信息保存到对象中
			var prod = {
				id:_box.find("#dt_id").text(),
				title:_box.find("#details_name").text(),
				price:_box.find("#details_price").text(),
				amount:_box.find("#nums").text(),
				img:_box.find("#imag").attr("src"),
				dtcolor:_box.find("#dt_color").text(),
				dtsize:_box.find("#dt_size").text()
			};
			// 查找 cookie 中已有购物车结构
			var _products = $.cookie("products") || [];
			// 判断当前选购商品是否在数组中已有选购
			var index = exist(prod.id, _products);
			if (index === -1) {
				// 将当前选购商品保存到数组中
				_products.push(prod);
			} else {
				// 将已选购商品的数量自增
				_products[index].amount++;
			}
			// 将数组存回 cookie 中
			$.cookie("products", _products, {expires:7, path:"/"});
			location="/html/cart.html";

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
		$(this).removeClass('nocheck').attr("id","dt_color").siblings().addClass('nocheck').removeAttr('id');
	});
});

//尺寸选择
$(function(){
	$("#sizes li").click(function(){
		$(this).removeClass('nocheck').attr("id","dt_size").siblings().addClass('nocheck').removeAttr('id');
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





