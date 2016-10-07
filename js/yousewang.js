$(document).ready(function(){
    var i=0;
    var setInter;
    var speen=3000;
    var index=0;
    //轮播效果
    $("#bbon li").each(function(index,element){
        //鼠标移上小圆点切换图片
     	$(element).mouseover(function(event){
	        var index = $(this).index();//获取小圆点的索引值
	        $("#pictrue img").eq(index).fadeIn().siblings().hide();
	        $(this).addClass("oon").siblings().removeClass("oon");
        });
        //鼠标点击小圆点切换图片及自动切换图片
        $(element).click(function(){
	        i = index;//获取索引值
	        $(this).addClass("oon").siblings().removeClass("oon");
	        $("#pictrue img").eq(index).animate({opacity:"show"},300).siblings().animate({opacity:"hide"},300);
        })  //每300毫秒切换一次
            $(element).hover(function(){//hover事件
                clearInterval(setInter);
                    },function(){
                outPlay();//自动播放函数
            });
        })
        
        //索引不同的图片
        out_fun = function(){
            var listLen=$("#bbon li").length;
            if(i < listLen){
              	i++;
            }else{
              	i = 0;
            };
                $("#bbon li").eq(i).addClass("oon").siblings().removeClass("oon");
                $("#pictrue img").eq(i).animate({opacity:"show"},300).siblings().animate({opacity:"hide"},300);
        }
        
        //自动播放函数
        outPlay = function(){
            setInter = setInterval("out_fun()",speen);//设置定时器
        }
        
        outPlay();//调用自动播放函数

        //点击左右按钮切换图片
        $(".arrow").click(function(){       
            var listLen=$("#bbon li").length;//获取索引个数
            if(i < listLen){
              	i++;
            }else{
              	i=0;
            };
            $("#bbon li").eq(i).addClass("oon").siblings().removeClass("oon");
            $("#pictrue img").eq(i).fadeIn().siblings().hide();
        })
     
    
    //点击广告标签图片切换广告背景图片
    $("#advertise_title img").click(function(){
	    var index = $(this).index();//获取图标的索引值
	    $("#pictrue img").eq(index).fadeIn().siblings().hide();
	    $("#bbon li").eq(index).addClass("oon").siblings().removeClass("oon");
    });

    
    //选项卡效果
    $("#tit #ul li").mouseover(function(event){
        var index= $(this).index();//获取导航的索引值
        $("#content #mod").eq(index).fadeIn().siblings().hide();
        $(this).addClass("active").siblings().removeClass("active");//切换高亮
    });
    
    //左侧导航移入移出效果
    $(".li1").mouseover(function(event){
        $(".aside_hide_nav1").slideToggle();
            });
        $(".li1").mouseout(function(event){
        $(".aside_hide_nav1").hide();
            });
        $(".li2").mouseover(function(event){
        $(".aside_hide_nav").slideToggle();
            });
        $(".li2").mouseout(function(event){
        $(".aside_hide_nav").hide();
            });
});