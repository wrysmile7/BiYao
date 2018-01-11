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

		/* 删除商品 */
		$(".cart_body").on("click", ".del i", function(){
			if (confirm("确认删除？")){
				// 当前“删除”链接所在行
				var _row = $(this).parents(".product");
				// 获取当前删除商品的 id
				var _id = _row.children(".id").text();
				// 当前删除商品在所有数组元素中的下标
				var index = exist(_id, _products);
				// 删除数组中对应下标处元素
				_products.splice(index, 1);
				// 保存回 cookie 中
				$.cookie("products", _products, {expires:7, path:"/"});
				// 从页面删除DOM元素
				_row.remove();	
				// 计算合计
				calcTotal();		
			}
		});

		/*删除选中商品*/
		// $("#del_ck").click(function(event) {
		// 	/* Act on the event */
		// });		

		/* 修改商品数量 */
		$(".cart_body").on("click", ".adds,.minus", function(){
			// 当前“+/-”所在行
			var _row = $(this).parent().parent().parent();
			//获取当前删除商品的 id
			var _id = $(this).parent().parent().siblings('.id').text();
			// 当前删除商品在所有数组元素中的下标
			var index = exist(_id, _products);
			// 当前行所对应的商品对象
			var _prod = _products[index];

			if ($(this).is(".adds")) { // 数量加			
				_prod.amount++;
			} else { // 数量减
				if (_prod.amount <= 1)
					return;
				_prod.amount--;
			}
			// 保存回 cookie 中
			$.cookie("products", _products, {expires:7, path:"/"});
			// 显示修改后的数量
			_row.find(".nums").text(_prod.amount);
			// 显示小计
			_row.children(".min_total").text(_prod.amount * _prod.price);
			// 计算合计
			calcTotal();
		});
		
		/* 全选 */
		$(".ckd_all").click(function(){
			// 获取当前“全选”复选框选中状态
			var status = $(this).prop("checked");
			// 将所有商品行前复选框选中状态设置为与“全选”一致的状态
			$(".ck_product").prop("checked", status);
			// 计算合计
			calcTotal();
		});

		$(".ck_product").click(function(){
			var status = $(".ck_product:checked").length === _products.length
			$(".ckd_all").prop("checked", status);
			// 计算合计
			calcTotal();
		});


		/* 计算合计 */
		function calcTotal() {
			// 获取所有选中的商品行前的复选框
			var sum = 0;
			$(".ckd:checked").each(function(index, element){
				sum += Number($(this).parent().parents(".product").find(".min_total span").text());
			});
			$(".total").text(sum.toFixed(2));
		}


		//将点击的商品id存入cookie
		$(".cart_body").on("click", ".dtimg", function(){
			var _id = $(this).siblings('.id').text();
			$.cookie("id", _id, {path:"/"});
		});

	});
});
