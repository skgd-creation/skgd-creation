$(document).ready(function() {

    var bg = $('section#one .background-fixed')
    $(window).scroll(function() {
        var scaleTo = (1.1 - ((window.scrollY / (window.innerWidth / 2)) / 10))
        bg.css('transform', 'scale(' + scaleTo + ')')
        if (scaleTo < 1) {
            bg.css('opacity', 0)
        } else if (scaleTo >= 1) {
            bg.css('opacity', scaleTo)
        }
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
