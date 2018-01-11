require(["config"], function(){
	require(["jquery","cookie","load"], function(){
		$("#btn").click(function(){
			var _userid = $("#names").val(),
				_userpwd = $("#pwds").val();
			$.getJSON("/mock/products.json", function(data){
				let contrastData = data.res_body.user;
				// console.log(contrastData);
				let arr=[],
					xb=0,
					_pwd=0,
					_name="";
				$.each(contrastData,function(index,elements){
					arr.push(`${elements.user_id}`);
				})
				xb = $.inArray(_userid,arr);
				// console.log(xb);
				let cData = {products : data.res_body.user};
				// console.log(cData);
				var array =[]
				array.push(cData.products[xb]);
				// console.log(array);
				$.each(array,function(index,value){
					_pwd = value.user_pwd;
					_name = value.user_name;
					// console.log(_pwd);
					// console.log(_userpwd);
					// console.log(_name);
					if(_pwd == _userpwd){
						location="/index.html";
						//将用户名存入cookie
						$.cookie("username", _name, {path:"/"});
					}else{
						$("#tip_2").text("用户名或密码错误！");
					}
				});
			});
		});
	});
});

$(function(){
	$(".text").focus(function(){
		$(this).removeClass('bor_color');
	});
	//用户名验证
	$("#names").blur(function(){
		var reg = /^1[0-9]{10}$/;
		if($(this).val() == ""){
			$(this).addClass('bor_color');
			$("#name_tip").text("用户名不能为空！");
		}else if(!reg.test($(this).val())){
			$(this).addClass('bor_color');
			$("#name_tip").text("手机号格式不正确！");
		}else{
			$("#name_tip").text("");
		}
	});
	//密码验证
	$("#pwds").blur(function(){
		var reg = /^[a-zA-Z]\w{7,15}$/;
		if($(this).val() == ""){
			$(this).addClass('bor_color');
			$("#pwd_tip").text("密码不能为空！");
		}else if(!reg.test($(this).val())){
			$(this).addClass('bor_color');
			$("#pwd_tip").text("密码格式不正确！请输入8-16位字母开头的密码。");
		}else{
			$("#pwd_tip").text("");
		}
	});

	//
});