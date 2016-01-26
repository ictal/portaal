$(document).ready(function(){
    $('a[href^="#"]').click(function(event) {
        var target = this.hash,
            $target = $(target),
            $main = $('body,html'),
            scrollTop = $main.scrollTop();

        if( $target.length ) {
            event.preventDefault();
            scrollTop += $target.position().top;
            $main.stop('smoothscroll').animate({
                scrollTop: scrollTop,
                queue: 'smoothscroll'
            }, 1000, function() {
                window.location.hash = target;
            });
        }

    });
});