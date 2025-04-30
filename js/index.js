$(function(){
	
	$("#main-menu li").mouseover(function(){
		$(this).find(".sub-menu").stop().slideDown();
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

        if (value > 100){
            $('header').addClass('dark');
        } else {
            $('header').removeClass('dark');
        }
    });

	var screenWidth = $(window).innerWidth();

	if(screenWidth >= 1100) {
		$('body').vegas({
			slides: [
				{
					src: 'imgs/video.png',
					video: {src:'video/meeting.mp4',
					loop: true, mute: true}
				},
				{ src: 'imgs/bg-com.jpg'},
				{ src: 'imgs/bg-sup.jpg'},
				{ src: 'imgs/bg-apt.jpg'},
				{ src: 'imgs/bg-job.jpg'}
			],
			delay: 5000
		});
	} else {
		$('body').vegas({
			slides: [
				{
					src: 'imgs/video.png',
					video: {src:'video/meeting.mp4',
					loop: true, mute: true}
				},
				{ src: 'imgs/bg-com.jpg'},
				{ src: 'imgs/bg-sup.jpg'},
			],
			delay: 5000
		});
	}
});