$(function(){

	var screenWidth = $(window).innerWidth();

	if(screenWidth >= 1150) {
		$("#main-menu li").mouseover(function(){
			$(this).find(".sub-menu").stop().
			slideDown();
			$(this).find(".sub-bar").stop().
			addClass("sub-act");
		});
	
		$("#main-menu").mouseout(function(){
			$(this).find(".sub-menu").stop().slideUp();
			$(this).find(".sub-bar").stop().removeClass("sub-act");
		});
	} else {
		$("#main-menu li").click(function(){
			$("#main-menu li").find(".slide").stop().slideUp();
			$("#main-menu li").find(".sub-menu").removeClass(".slide");
			$(this).find(".sub-menu").stop().
			addClass("slide");
			$(this).find(".slide").stop().
			slideDown();
		});
	}

	$("#trigger").click(function(event){
		event.preventDefault();
		$("#main-menu").toggleClass("main-act");
		$(this).toggleClass("acive");
	});

	$(window).scroll(function(){
        var value = $(window).scrollTop();

        if (value > 350){
            $('header').addClass('dark');
        } else {
            $('header').removeClass('dark');
        }
    });

	$('.owl-carousel').owlCarousel({
		loop: true,
		nav: true,
		responsiveClass: true,
		responsive: {
			0: { items: 1 },
			750: { 
				items: 2,
				margin: 30
			},
			1150: {
				items: 3,
				nav: true,
				margin: 30
			},
			1550: {
				items: 4,
				nav: true,
				margin: 30
			}
		}
	});
})

