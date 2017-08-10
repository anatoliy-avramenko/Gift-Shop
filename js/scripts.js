$(window).ready(function() {

	$('.category-item-name').click(function() {
		$(this).parent().siblings().removeClass('active');
		$(this).parent().toggleClass('active');
	});

    $('.burger').click(function() {
        $(this).toggleClass('fa-bars fa-close');
        $('.mobile-nav').toggleClass('active');
    });

    $('#sign-up').click(function() {
        $('.modal').fadeIn().css('display', 'flex');
    });

    $('.modal').click(function(event) {

        var item = $(event.target);

        if (!item.closest($('.form-sign')).length) $('.modal').fadeOut();
        if (item.hasClass('close-modal')) $('.modal').fadeOut();

    });



    if($(window).width() <= 980) {
        $('.card-search').insertAfter('body > header');
    } else {
        $('.card-search').insertBefore('.card-4');
    }

    $(window).resize(function() {

        if($(window).width() <= 980) {
            $('.card-search').insertAfter('body > header');
        } else {
            $('.card-search').insertBefore('.card-4');
        }

    });


    if($(window).width() <= 768) {
        $('nav').appendTo('.mobile-nav');
        $('.categories-bar').appendTo('.mobile-nav');
        $('.header-buttons a:not([class])').prependTo('.mobile-nav');
    } else {
        $('.categories-bar').insertAfter('.header-top');
        $('nav').prependTo('.header-top-links');
        $('.mobile-nav a').prependTo('.header-buttons');
    }

    $(window).resize(function() {

        if($(window).width() <= 768) {
            $('nav').appendTo('.mobile-nav');
            $('.categories-bar').appendTo('.mobile-nav');
            $('.header-buttons a:not([class])').prependTo('.mobile-nav');
        } else {
            $('.categories-bar').insertAfter('.header-top');
            $('nav').prependTo('.header-top-links');
            $('.mobile-nav a').prependTo('.header-buttons');
        }

    });

});