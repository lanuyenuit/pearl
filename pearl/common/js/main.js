$(document).ready(function() {

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("topbtn").style.display = "block";
        } else {
            document.getElementById("topbtn").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    $('.smooth-scroll').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    if(!$("#page").hasClass("ie9")) {
        var wow = new WOW({
            offset: 200
        });
        wow.init();
    }

});

$(window).resize(function() {


});

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 60) {
        $('#scroll-top').fadeIn();
    } else {
        $('#scroll-top').fadeOut();
    }
});
