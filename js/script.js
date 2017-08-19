$(document).ready(function() {

    var bg = $('section#one .background-fixed')
    $(window).scroll(function() {
        bg.css('transform', 'scale(' + (1.1 - ((window.scrollY / (window.innerWidth / 2)) / 10)) + ')')
    })



    new WOW().init();
})

$('.realisation img').on('load', function() {
    console.log('coucou')
    $(this).parent().css('max-height', $(this).height() + 'px')
})
