$(document).ready(function() {

	var winHeight = $(window).innerHeight();

	$(".panel").height(winHeight);

	$(window).on('scroll',function() {
		$(".left").css('bottom',$(window).scrollTop()*-1);
	});


	$("#button").click(function(){
    $("html, body").animate({ scrollTop: $(window).height()}, 600);
    return false;
	});

});



	
	
