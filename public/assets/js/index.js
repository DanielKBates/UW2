$(document).ready(function () {
    $(function () {
        var scroller = $('#scroller div.innerScrollArea');
        var scrollerContent = scroller.children('ul');
        scrollerContent.children().clone().appendTo(scrollerContent);
        var curX = 0;
        scrollerContent.children().each(function () {
            var $this = $(this);
            $this.css('left', curX);
            curX += $this.outerWidth(true);
        });
        var fullW = curX / 2;
        var viewportW = scroller.width();

        // Scrolling speed management
        var controller = { curSpeed: 0, fullSpeed: 1 };
        var $controller = $(controller);
        var tweenToNewSpeed = function (newSpeed, duration) {
            if (duration === undefined) {
                duration = 600;
                $controller.stop().animate({ curSpeed: newSpeed }, duration);
            }
        };



        // Scrolling management; start the automatical scrolling
        var doScroll = function () {
            var curX = scroller.scrollLeft();
            var newX = curX + controller.curSpeed;
            if (newX > fullW * 2 - viewportW)
                newX -= fullW;
            scroller.scrollLeft(newX);
        };
        console.log("foo")
        setInterval(doScroll, 20);
        tweenToNewSpeed(controller.fullSpeed);
    });
})

