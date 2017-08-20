$(document).ready(function() {

    var bg = $('section#one .background-fixed')
    $(window).scroll(function() {
        bg.css('transform', 'scale(' + (1.1 - ((window.scrollY / (window.innerWidth / 2)) / 10)) + ')')
    })

    $('.realisation img').get().forEach(function(element) {
        var inter = setInterval(function() {
            if (element.naturalHeight) {
               clearInterval(inter)
               $(element).parent().css('max-height', $(element).height() + 'px')
            }
        }, 100)
    }, this);

    new WOW().init();
})
