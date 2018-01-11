require(["config"], function(){
	require(["jquery","template","cookie","load"], function($,template){
		// cookie 配置
		$.cookie.json = true;

		// 读取cookie 中保存的购物车数据
		var _products = $.cookie("products") || [];
		// 判断
		if (_products.length === 0) { // 购物车为空
			$(".cart_body").html(`购物车为空，请<a href="/index.html">选购商品</a>`);
			return;
		}

		/* 将购物车中保存的商品渲染显示到页面中 */
		var html = template("cart_template", {products: _products});
		$(".cart_body").html(html);
		calcTotal();

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
	});
});
