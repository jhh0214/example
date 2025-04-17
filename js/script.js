$(function(){
	// $(".btn-com").click(function(event){
	// 	event.preventDefault();
	// 	$(".bn-box").addClass("hide");
	// 	$(".bn-com").removeClass("hide");
	// })

	// $(".btn-sup").click(function(event){
	// 	event.preventDefault();
	// 	$(".bn-box").addClass("hide");
	// 	$(".bn-sup").removeClass("hide");
	// })

	// $(".btn-apt").click(function(event){
	// 	event.preventDefault();
	// 	$(".bn-box").addClass("hide");
	// 	$(".bn-apt").removeClass("hide");
	// })

	// $(".btn-job").click(function(event){
	// 	event.preventDefault();
	// 	$(".bn-box").addClass("hide");
	// 	$(".bn-job").removeClass("hide");
	// })

	$('.btn').click(function() {
		var index = $(this).parent().index();
			/* $(this).parent().index(); = this에 해당하는 부모를 기준으로 몇번째 자식인지에 대한 값(0~) */
		$('.bn-box').addClass('hide');
		$('.bn-box').eq(index).removeClass('hide');
			/* $('.bn-box').eq(index); = .bn-box의 부모로부터 index번호의 자식 지정 */
	  });

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

	$("#trigger").click(function(event){
		event.preventDefault();
		$("#main-menu").toggleClass("main-act");
		$(this).toggleClass("acive");
	})

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
				loop: false,
				margin: 30
			},
			1550: {
				items: 4,
				nav: true,
				loop: false,
				margin: 30
			}
		}
	});
	
})

