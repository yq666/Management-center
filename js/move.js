	// (function($){
	// $.fn.extend({
	//     Scroll:function(opt,callback){
	//             //参数初始化
	//             if(!opt) var opt={};
	//             var _this=this.eq(0).find("ul:first");
	//             var        lineH=_this.find("li:first").height(), //获取行高
	//                     line=opt.line?parseInt(opt.line,10):parseInt(this.height()/lineH,10), //每次滚动的行数，默认为一屏，即父容器高度
	//                     speed=opt.speed?parseInt(opt.speed,10):500, //卷动速度，数值越大，速度越慢（毫秒）
	//                     timer=opt.timer?parseInt(opt.timer,10):3000; //滚动的时间间隔（毫秒）
	//             if(line==0) line=1;
	//             var upHeight=0-line*lineH;
	//             //滚动函数
	//             scrollUp=function(){
	//                     _this.animate({
	//                             marginTop:upHeight
	//                     },speed,function(){
	//                             for(i=1;i<=line;i++){
	//                                     _this.find("li:first").appendTo(_this);
	//                             }
	//                             _this.css({marginTop:0});
	//                     });
	//             }
	//             //鼠标事件绑定
	//             _this.hover(function(){
	//                     clearInterval(timerID);
	//             },function(){
	//                     timerID=setInterval("scrollUp()",timer);
	//             }).mouseout();
	//     }        
	// })
	// })(jQuery);
	// $(document).ready(function(){
	//     $("#callboard").Scroll({line:1,speed:500,timer:3000});
	// });
	var t = n =0, count;
	$(document).ready(function(){ 
	count=$("#banner_list a").length;
	$("#banner_list a:not(:first-child)").hide();
	$("#banner_info").html($("#banner_list a:first-child").find("img").attr('alt'));
	$("#banner li").click( function() {
			var i = $(this).text() -1;//获取Li元素内的值，即1，2，3，4
			n = i;
			if (i >= count) return;
	$("#banner_info").html($("#banner_list a").eq(i).find("img").attr('alt'));
	$("#banner_info").unbind().click(function(){
		window.open($("#banner_list a").eq(i).attr('href'), "_blank")
})
	$("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
	document.getElementById("banner").style.background="";
	$(this).toggleClass("on");
	$(this).siblings().removeAttr("class");
});
	t = setInterval("showAuto()", 4000);
	$("#banner").hover(function(){clearInterval(t)}, function(){t = setInterval("showAuto()", 3000);});
	})

	function showAuto()
	{
		n = n >=(count -1) ?0 : ++n;
		$("#banner li").eq(n).trigger('click');
	}
	$('.hid').hover(function(){
		$(this).find('.sub-nav').stop().slideToggle(300);
	}, function(){
		$(this).find('.sub-nav').stop().slideToggle(300);
	})
	 var $backToTopTxt = "返回顶部", $backToTopEle = $('<div class="backToTop"></div>').appendTo($("body"))
        .text($backToTopTxt).attr("title", $backToTopTxt).click(function() {
            $("html, body").animate({ scrollTop: 0 }, 1000);
    }), $backToTopFun = function() {
        var st = $(document).scrollTop(), winh = $(window).height();
        (st > 0)? $backToTopEle.show(): $backToTopEle.hide();
        //IE6下的定位
        if (!window.XMLHttpRequest) {
            $backToTopEle.css("top", st + winh - 166);
        }
    };
    $(window).bind("scroll", $backToTopFun);
    $(function() { $backToTopFun(); });

// 首页通知公告滚动
	var $notice=$('#listbox')
		setInterval(function(){
			$notice.animate({
				top:'-40px'
			},300,function(){
				$notice.append($notice.children().first());
				$notice.css('top',0);
			})
		},2000)