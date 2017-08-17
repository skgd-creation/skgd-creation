$(document).ready(function() {

    var bg = $('section#one .background-fixed')
    $(window).scroll(function() {
        bg.css('transform', 'scale(' + (1.1 - ((window.scrollY / (window.innerWidth / 2)) / 10)) + ')')
    })

    new WOW().init();
})
