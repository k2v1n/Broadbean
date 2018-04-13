// add image background
// $(document).ready(function(){
//     $.adaptiveBackground.run({
//         selector: 'img',
//     });
// });

// table of contents
$(document).ready(function() {
    var tocNode = $('.post-toc');
    if (tocNode.length === 0) {return};
    var mainNode = $('.main-post');
    // if the element is less than 10px from the top of the viewport
    // modify "position" to "fixed"
    $(window).on('resize scroll', function(eve) {
        var topDistance = mainNode.offset().top - $(window).scrollTop();
        var leftDistance = mainNode.offset().left + mainNode.innerWidth() - tocNode.outerWidth(true);
        if (topDistance <= 10) {
            // tocNode.css('position', 'fixed');
            tocNode.css({
                'position': 'fixed',
                'left': leftDistance + 'px', 
            });
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
        $('html, body').animate({
            scrollTop: toTopDistance,
        },'slow');
    })
});