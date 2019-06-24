$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
        items:1,
        loop:false,
        center:true,
        nav: true,
        margin:0,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash'
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
});