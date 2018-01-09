require(["config"], function(){
	require(["load"], function(){

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
	//验证码是否为空验证
	$("#yzms").blur(function(){
		if($(this).val() == ""){
			$(this).addClass('bor_color');
			$("#yzm_tip").text("验证码不能为空！");
		}else{
			$("#yzm_tip").text("");
		}
	});
	//密码验证
	$("#pwd").blur(function(){
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
	//两次密码是否一致验证
	$("#repwd").blur(function(){
		if($(this).val() !== $("#pwd").val()){
			$(this).addClass('bor_color');
			$("#repwd_tip").text("两次密码输入不一致！");
		}else{
			$("#repwd_tip").text("");
		}
	});
});