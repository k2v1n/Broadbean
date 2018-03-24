
$(document).ready(function() {
    var tocNode = $('.post-toc');
    var mainNode = $('.main');
    // if the element is less than 10px from the top of the viewport
    // modify "position" to "fixed"
    $(document).on('scroll', function(eve) {
        var topDistance = mainNode.offset().top - $(window).scrollTop();
        if (topDistance <= 10) {
            tocNode.css('position', 'fixed');
        } else {
            tocNode.css('position', 'static');
        }
    });

    // toggle children elements
    $('.toc-item').on('click', function(event){
        $(event.currentTarget).find('>ol>li').show();
        // hide child elements slibings
        $(event.currentTarget).siblings('li').find('li').hide();
    });

    // scroll animation
    $('.post-toc').find('.toc-link').on('click', function(event){
        var selector = $(event.currentTarget).attr('href');
        var toTopDistance = $(selector).offset().top;
        console.log(toTopDistance);
        $('html, body').animate({
            scrollTop: toTopDistance,
        },'slow');
    })
});