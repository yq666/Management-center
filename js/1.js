$(function(){
	$('.frist').hover(function(){
		$(this).find('.hidden').stop().slideToggle(300);
	}, function(){
		$(this).find('.hidden').stop().slideToggle(300);
	})
});