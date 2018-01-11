require(["config"], function(){
	require(["jquery","cookie","load"], function(){
		//判断协议是否选中
		$(".check").click(function(){
			if($(this).is(':checked')){
				$("#btn").addClass('on_btn');
			}else{
				$("#btn").removeClass('on_btn');
			}
		});
		
		//点击注册按钮
		$("#btn").click(function(){
			if($(".check").is(":checked")){
				var _userid = $("#names").val();
				$.getJSON("/mock/products.json", function(data){
					let contrastData = data.res_body.user;
					// console.log(contrastData);
					let arr=[],
						xb=0,
						_name="";
					$.each(contrastData,function(index,elements){
						arr.push(`${elements.user_id}`);
					})
					xb = $.inArray(_userid,arr);
					if(xb == "-1"){
						location="/html/login.html";
					}else{
						$("#tip_2").text("该用户名已存在！");
					}
				});
			}else{
				location="javascript:void(0)";
			}
		});

		
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
});
// $(function(){
// 	$(".text").focus(function(){
// 		$(this).removeClass('bor_color');
// 	});
// 	//用户名验证
// 	$("#names").blur(function(){
// 		var reg = /^1[0-9]{10}$/;
// 		if($(this).val() == ""){
// 			$(this).addClass('bor_color');
// 			$("#name_tip").text("用户名不能为空！");
// 		}else if(!reg.test($(this).val())){
// 			$(this).addClass('bor_color');
// 			$("#name_tip").text("手机号格式不正确！");
// 		}else{
// 			$("#name_tip").text("");
// 		}
// 	});
// 	//验证码是否为空验证
// 	$("#yzms").blur(function(){
// 		if($(this).val() == ""){
// 			$(this).addClass('bor_color');
// 			$("#yzm_tip").text("验证码不能为空！");
// 		}else{
// 			$("#yzm_tip").text("");
// 		}
// 	});
// 	//密码验证
// 	$("#pwd").blur(function(){
// 		var reg = /^[a-zA-Z]\w{7,15}$/;
// 		if($(this).val() == ""){
// 			$(this).addClass('bor_color');
// 			$("#pwd_tip").text("密码不能为空！");
// 		}else if(!reg.test($(this).val())){
// 			$(this).addClass('bor_color');
// 			$("#pwd_tip").text("密码格式不正确！请输入8-16位字母开头的密码。");
// 		}else{
// 			$("#pwd_tip").text("");
// 		}
// 	});
// 	//两次密码是否一致验证
// 	$("#repwd").blur(function(){
// 		if($(this).val() !== $("#pwd").val()){
// 			$(this).addClass('bor_color');
// 			$("#repwd_tip").text("两次密码输入不一致！");
// 		}else{
// 			$("#repwd_tip").text("");
// 		}
// 	});
	
	
// });