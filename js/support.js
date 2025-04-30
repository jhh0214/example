$(function(){

	$('.flexslider').flexslider({
		animation: "slide"
	});

	$('.fs-btn').mouseenter(function(){
		$('.fs-btn').addClass('fs-btn2');
	});

	$('.fs-btn').mouseleave(function(){
		$('.fs-btn').removeClass('fs-btn2');
	});
});