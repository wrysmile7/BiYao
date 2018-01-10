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
			// var html_1 = "",
			// 	html_2 = "",
			// 	html_3 = "";
			// 
			// 	html_1 = ``;
			// 	html_2 = ``;
			// 	html_3 = ``;
			// 
			// $(".dtimg a").html(html_1);
			// $(".info").html(html_2);
			// $("#price span").html(html_3);
			var html = "";
			$.each(array, function(index, element){
				html = `<tr>
					<td width="30" class="chek">
						<input type="checkbox" checked="checked" name="" class="ckd">
					</td>
					<td width="100" class="dtimg">
						<a href="/html/details.html"><img src="${element.big_img1}"></a>
					</td>
					<td class="info" width="535">
						<a href="/html/details.html">${element.dt_name}</a>
						<p>颜色:花灰色</p>
						<p>尺寸:S</p>
					</td>
					<td class="pric" id="price">¥<span>${element.price}</span></td>
					<td>
						<p class="num" width="78">
							<span id="minus" style="border-right: 1px solid #e4e3e5;">-</span>
							<span id="nums" style="border-right: 1px solid #e4e3e5;">1</span>
							<span id="adds">+</span>
						</p>
					</td>
					
					<td class="pric" id="min_total">¥<span>${element.price}</span></td>
					<td class="del">
						<i></i>
					</td>
				</tr>`;
				$(".cart_body table").append(html);
			});
		});
		//小计金额计算
		//数量计算
		$(function(){
			//数量减
			$(".cart_body").on("click", "#minus", function(e){
				var _nums = $("#nums").text(),
					_price = $("#price span").text(),
					_min_total = _price * _nums;
				if(_nums == 1){
					$("#nums").text("1");
				}else{
					_nums--;
					$("#nums").text(_nums);
					$("#min_total span").text(_min_total);
				}
			});
			//数量加
			$(".cart_body").on("click", "#adds", function(e){
				var _nums = $("#nums").text(),
					_price = $("#price span").text(),
					_min_total = _price * _nums;
				_nums++;
				$("#nums").text(_nums);
				$("#min_total span").text(_min_total);
			});
		});
		
	});
});
