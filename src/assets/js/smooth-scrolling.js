$(document).ready(function(){
$(function () {
    $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});


            //Smooth scrolling when click to nav
            $('.nav-wrapper > ul > li > a').click(function (e) {
               
                var curLink = $(this);
                var scrollPoint = $(curLink.attr('href')).position().top;
                $('body,html').animate({
                    scrollTop: scrollPoint
                }, 700);
            })
            $(window).scroll(function () {
                onScrollHandle();
            });
            function onScrollHandle() {
               
                //Get current scroll position
                var currentScrollPos = $(document).scrollTop();
                //Iterate through all node
                $('#nav-mobile > li > a').each(function () {
                    var curLink = $(this);
                    var refElem = $(curLink.attr('href'));
                    //Compare the value of current position and the every section position in each scroll
                    if (refElem.offset().top <= currentScrollPos && refElem.offset().top + refElem.height() > currentScrollPos) {
                        //Remove class active in all nav
                        $('#nav-mobile > li').removeClass("active");
                        //Add class active
                        curLink.parent().addClass("active");
                    }
                    else {
                        curLink.parent().removeClass("active");
                    }
                });
            }
        });
 

