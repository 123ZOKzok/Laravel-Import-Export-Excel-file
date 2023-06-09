$(function() {

/*------------------------------------------------------------------
    Scrool Top
------------------------------------------------------------------*/
    if ($('.scrool-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.scrool-top').addClass('show');
                } else {
                    $('.scrool-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('.scrool-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
/*------------------------------------------------------------------
     Main Navigation 
------------------------------------------------------------------*/
    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 30)
        }, 1250, 'easeInOutExpo');
        //event.preventDefault();
    });


/*------------------------------------------------------------------
    Highlight the top nav as scrolling occurs
------------------------------------------------------------------*/
    $('body').scrollspy({
        target: '.main-sidebar',
        offset: 50
    });
/*------------------------------------------------------------------
    Closes the Responsive Menu on Menu Item Click
------------------------------------------------------------------*/
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').on('click', function() {
        $('.navbar-toggle:visible').click();
    });
});
