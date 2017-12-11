$(document).ready(function() {

    var bg = $('section#one .background-fixed')
    var header_status = true;
    var top_section_two = $('section#two').offset().top
    var top_header = $('section#one .header').offset().top - scrollY

    var scale = function() {
        var scaleTo = (1.1 - ((window.scrollY / (window.innerWidth / 2)) / 10))
        bg.css('transform', 'scale(' + scaleTo + ')')
        if (scaleTo < 1) {
            bg.css('opacity', 0)
        } else if (scaleTo >= 1) {
            bg.css('opacity', scaleTo)
        }

        if ((top_section_two - scrollY) <= top_header && !header_status) {
            header_status = true;
            $('.header.fixed').css('opacity', 1).css('top', 0)
        } else if ((top_section_two - scrollY) > top_header && header_status) {
            header_status = false;
            $('.header.fixed').css('opacity', 0).css('top', 200)
        }
    }

    $(window).scroll(scale)
    scale()

    var initRea = function(diapo) {
        var minus
        var total = 0
        diapo.find('img:not(.no-absolute)').get().forEach(function (element) {
            total++
            var inter = setInterval(function () {
                let h = $(element).height()
                if (h) {
                    clearInterval(inter)
                    total--
                    $(element).parent().css('max-height', h + 'px')
                    if (!minus || minus.height > h) {
                        minus = {
                            height: h,
                            dom: $(element)
                        }
                    }
                    if (total === 0) {
                        diapo.append(minus.dom.clone().addClass('no-absolute'))
                    }
                }
            }, 100)
        }, this)
    }

    var showRea = function(diapo, nb) {
        var imgs = diapo.find('img:not(.no-absolute)')
        imgs.each(function(i) {
            var factor = i - nb
            $(this).get(0).style.transform = `translateX(${factor * 100}%)`
        })
    }

    $('.diapo').each(function() {
        var diapo = $(this)
        var current = 0

        diapo.parent().find('.arrow.left').click(function() {
            var max = diapo.find('img:not(.no-absolute)').length - 1
            showRea(diapo, (current = (current - 1 >= 0) ? current - 1 : max))
        })

        diapo.parent().find('.arrow.right').click(function() {
            var max = diapo.find('img:not(.no-absolute)').length - 1
            showRea(diapo, (current = (current + 1 <= max) ? current + 1 : 0))
        })

        if (diapo.find('img:not(.no-absolute)').length > 0) {
            initRea(diapo)
            showRea(diapo, current)
        }
    })

    new WOW().init();
})

window.octoboot_before_save = function(done) {
    scrollTo(0,0)
    $('img.no-absolute').remove()
    // let the time to animation finished
    setTimeout(done, 1000)
}
