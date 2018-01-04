// 定义模块，加载头部、尾部资源
define(["jquery", "cookie"], function($){
	// 将 header.html 加载显示到 div.header 中
	$(".header").load("/html/include/header.html");
	// 将 footer.html 加载显示到 div.footer 中
	$(".footer").load("/html/include/footer.html");
});