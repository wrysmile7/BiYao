// 定义模块，加载头部、尾部资源
define(["jquery", "cookie","load"], function($){
	$.ajax("/html/include/header.html").done(function(data){
		$(".header").html(data);
	}).done(function(){
		//加载对应商品的数据
		var username = $.cookie("username"),
			log_html = `<a href="/html/login.html" title="登录">登录</a>`,
			reg_html = `<a href="/html/regist.html" title="注册">注册</a>`,
			zx = `<a href="javascript:void(0)" title="退出当前用户" id="zx">注销</a>`;
		if(username == "undefined"){
			
		}else if(username == undefined){
			$("#log").html(log_html);
			$("#reg").html(reg_html);
		}else{
			$("#log").text("您好！" + username);
			$("#reg").html(zx);
		}
		$("#zx").click(function(){
			$.cookie("username","undefined", {path:"/"});
			$("#log").html(log_html);
			$("#reg").html(reg_html);
		});
	});
	// 将 footer.html 加载显示到 div.footer 中
	$(".footer").load("/html/include/footer.html");
	
});





