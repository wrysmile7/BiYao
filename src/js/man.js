require(["config"], function(){
	require(["jquery","template","cookie","load"], function($,template){
		$.getJSON("/mock/products.json", function(data){
			// 准备渲染数据
			var renderData = {products : data.res_body.man};
			// 渲染数据
			var html = template("list_template", renderData);
			$(".lis_all").html(html);
		});
		
	});
});

$(function(){
	//将商品存入cookie
	$(".lis_all").on("click", ".to_dt", function(e){
		var ID = $(this).find('.pro_id').text();
		$.cookie("id", ID, {path:"/"});
	});	
});
	