
$(document).ready(()=>{
    let current = 1;
    let id = "#slide01"; 
    function gotoNextSlide(){
	    $(id).removeClass('current');
	    $(id).children('img').hide();
	    id = "#slide0" + current;
	    $(id).addClass('current');
	    $(id).children('img').hide().fadeIn('slow')
	}
     function slideNormally(){
	if (current + 1 <= 3){
	        current += 1;
	    }
	    else{
	        current = 1;
	    }
	    gotoNextSlide();
      }
    function rightclick(){
	clearInterval(slidetimer);
	 slideNormally();
	}
    function leftclick(){
	clearInterval(slidetimer);
	    if (current - 1 >= 1){
	        current -= 1;
	    }
	    else{
	        current = 3;
	    }
	    gotoNextSlide();
	}
    $("#rightarrow").on('click',()=>{
	    rightclick();
	});
	$("#leftarrow").on('click',()=>{
		leftclick();
	});
    $('body').on('keyup', function(event){
	if (event.key === "ArrowRight"){
		rightclick();
	}
	else if (event.key === "ArrowLeft"){
		leftclick();
	}
    });
	var slidetimer = setInterval(slideNormally,3000);
	$('#header').on('mouseenter',()=>{
		$('header').slideDown();
	});
	$('#header').on('mouseleave',()=>{
		$('header').slideUp();
	});
	$(window).scroll(()=>{
	    var contentbottom = $("#blurbcontent").offset().top + 500;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > contentbottom ){

                $("#blurbcontent").slideDown(1000);

            }
    });
});