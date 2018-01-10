require(["config"], function(){
    require(["load"], function(){

    });
});

//banner轮播图
$(function(){
    //第一张显示
    $("#lbt li").eq(0).show();
    var i=0;
    //向右切换
    var play=function(){
         i++;
         i = i > 5 ? 0 : i ;
         $("#porlter li").eq(i).addClass('cur').siblings().removeClass("cur");
         $("#lbt li").eq(i).fadeIn(500).siblings().fadeOut(500);
    }

    //向左切换
    var playLeft=function(){
        i--;
        i = i < 0 ? 5 : i ;
        $("#porlter li").eq(i).addClass('cur').siblings().removeClass("cur");
        $("#lbt li").eq(i).fadeIn(500).siblings().fadeOut(500);
    }

    //自动轮播
    var timer=setInterval(play,3000);

    //鼠标滑过手动切换，淡入淡出
    $("#porlter li").mouseover(function() {
        $(this).addClass('cur').siblings().removeClass("cur");
        var index = $(this).index();
        i = index;
        $("#lbt li").eq(index).fadeIn(500).siblings().fadeOut(500);
    });

    //鼠标移入移出效果
    $(".right").hover(function() {
        clearInterval(timer);
    }, function() {
        timer=setInterval(play,2000);
    });
    //左右点击切换
    $("#porv").click(function(){
        playLeft();
    })
    $("#next").click(function(){
        play();
    });
});

//手风琴动画
$(function(){
    $("#sfq li").mouseover(function(){
        // $("#sfq li").removeClass('onmaxW').addClass('onminW');
        // var index = $(this).index();
        // $(this).addClass('onmaxW').siblings().removeClass('onmaxW').addClass('onminW');
        $(this).stop().animate({width:"620px"},500).siblings().stop().animate({width:"80px"},500);
    });
});

//回到顶部
$(function(){
    $("#toTop").click(function(){
        $("body,html").animate({scrollTop:"0px"},1000);
    });
});

//吸顶导航栏
$(function(){
    $(window).scroll(function(){
        if($(document).scrollTop() >= 500){
            $(".fidx_top").stop().slideDown(200);
        }
        if($(document).scrollTop() <= 500){
            $(".fidx_top").stop().slideUp(200);
        }
    });
});
