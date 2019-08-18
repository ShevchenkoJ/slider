$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
        items:1,
		loop:true,
		rewind:false,
        center:true,
        nav:true
        /*margin:0,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash'*/
    });

	$('.owl-carousel').on('changed.owl.carousel', function(e) {
  		console.log('The current item is at index', e.item.index);
  	$('.header__link').removeClass('active-link');
  	$('.header__link').eq(e.item.index - 3).addClass('active-link');  	
	});

	/*$('.header__link').eq(e.item.index - 3).addClass('active-link');  	
	});*/
    
	$('.header__link').click(function() {
	    $('.header__link').removeClass('active-link');
	    $(this).addClass('active-link');
	});

	/*if ( $('.slide-background').hasClass('slide-1') ) {
		$('.list_item-1').toggleClass('active-link');
	};

	if ( $('.slide-background').hasClass('slide-2') ) {
		$('.list_item-2').toggleClass('active-link');
	};*/

	$('.burger-menu_icon__wrapper').click(function() {
	    $('.burger-menu_icon').toggleClass('burger-menu_icon__active');
	    $('.burger-menu_container').toggleClass('burger-menu_container-shifting');
	});

	$('.burger-menu__item').click(function() {
	    $('.burger-menu_icon__wrapper').trigger('click');
	});

	$('.nav-prev').click(function() {
		$('.owl-prev').trigger('click');
	});

	$('.nav-next').click(function() {
		$('.owl-next').trigger('click');
	}); 

	$('.copy_button').click(function() {
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($('.copy_content').text()).select();
		document.execCommand("copy");
		alert("Content copied");
		$temp.remove();
	});
	
});

