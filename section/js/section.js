$(document).ready(function(){

	var trendingsection = document.getElementById("trendingsection");
	var stop = (trendingsection.offsetTop - 10);

window.onscroll = function (e) {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    console.log(scrollTop, trendingsection.offsetTop);
    // left.offsetTop;

    if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
        trendingsection.className = 'stick';
    }

    else {
        trendingsection.className = '';
    }
}


});