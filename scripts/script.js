$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        center:true,
        nav: true,
        margin:0,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash'
    });

	$('.owl-carousel').on('changed.owl.carousel', function(e) {
  		console.log('The current item is at index', e.item.index);
  	$('.header__link').removeClass('active-link');
  	$('.header__link').eq(e.item.index - 3).addClass('active-link');  	
	});
    
	$('.header__link').click(function() {
	    $('.header__link').removeClass('active-link');
	    $(this).addClass('active-link');
	});

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

});

