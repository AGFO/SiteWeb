jQuery('document').ready(function($){
	var nav = $('#navigation');
	$(window).scroll(function(){
		if ($(this).scrollTop() > 130){
			nav.addClass('navigation2');
			$('.logo_item').removeClass('hide');
		}else{
			nav.removeClass('navigation2');
			$('.logo_item').addClass('hide');
		}
	});

});