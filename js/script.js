$(document).ready(function() {

    var bg = $('section#one .background-fixed')
    var header_status = false;

    var scale = function() {
        var scaleTo = (1.1 - ((window.scrollY / (window.innerWidth / 2)) / 10))
        bg.css('transform', 'scale(' + scaleTo + ')')
        if (scaleTo < 1) {
            bg.css('opacity', 0)
        } else if (scaleTo >= 1) {
            bg.css('opacity', scaleTo)
        }

        if (scaleTo < 1.03) {
            if (!header_status) {
                header_status = true;
                $('.header.fixed').css('opacity', 1).css('top', 0)
            }
        } else if (scaleTo >= 0.95) {
            if (header_status) {
                header_status = false;
                $('.header.fixed').css('opacity', 0).css('top', 200)
            }
        }
    }

    $(window).scroll(scale)
    scale()

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
