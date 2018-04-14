// add image background
// $(document).ready(function(){
//     $.adaptiveBackground.run({
//         selector: 'img',
//     });
// });

$(document).ready(function() {
    if ($('.main-index').length > 0) {
        var articles = $('.cell');
        articles.on('click', function(event) {
            if (event.target.tagName === "A") { return };
            window.location.href = $(this).find('.read-more a')[0].href;
        });
    }
});

// table of contents
$(document).ready(function() {
    var tocNode = $('.post-toc');
    if (tocNode.length === 0) { return };
    var mainNode = $('.main-post');
    // if the element is less than 10px from the top of the viewport
    // modify "position" to "fixed"
    $(window).on('resize scroll', function(eve) {
        var topDistance = mainNode.offset().top - $(window).scrollTop();
        var leftDistance = mainNode.offset().left + mainNode.innerWidth() - tocNode.outerWidth(true);
        if (topDistance <= 10) {
            tocNode.css({
                'position': 'fixed',
                'left': leftDistance + 'px',
            });
        } else {
            tocNode.css('position', 'static');
        }
    });

    $('.post-toc').find('.toc-link').on('click', function(event) {   
        // li.toc-item 
        // ├──a.toc-link < this
        // │   ├──span.toc-text < event
        // ├──ol.toc
        // │   ├──li.toc-item < show these li
        // │   ├──...
        // li.toc-item 
        // ├──a.toc-link
        // ├──ol.toc
        // │   ├── li.toc-item < hide these li
        // │   ├──...
        // li...
        var parent = this.parentElement;
        // show child element
        $(parent).children('ol').children('li').show();
        // hide child element of parent's slibing elements  
        $(parent).siblings('li').find('li').hide();
        // get target title's height
        var moveDis = $(this.getAttribute('href')).offset().top;
        // scroll animation 
        $('html, body').animate({
            scrollTop: moveDis,
        }, 500);
        // fix bug: navigation beats when clicking navigation elements
        return false;
    });
});