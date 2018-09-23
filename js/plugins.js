/*global $*/
$(document).ready(function () {
    'use strict';
    $('carousel').carousel({
        interval: 5000
    });
    
    //show color option div when click in gear
    $('.gear-check').click(function () {
        $('.color-option').fadeToggle();
        
    });
    
    var colorli = $(".color-option ul li");
    colorli
        .eq(0).css("backgroundColor", "darkred").end()
        .eq(1).css("backgroundColor", "deepskyblue").end()
        .eq(2).css("backgroundColor", "#3de41d").end()
        .eq(3).css("backgroundColor", "deeppink").end()
        .eq(4).css("backgroundColor", "#ecd006");
    
    colorli.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        
    });
//trigger nice scroll
    $('body').niceScroll({
        cursorcolor: '#1abc9c',
        cursorwidth: '10px',
        cursorborder: '1px solid #1abc9c',
        background: "rgba(20,20,20,0.3)",
        cursorborderradius: 0,
        zindex: 1000000,
        autohidemode: "true"
        
    });
    
});

//loading code
$(window).on('load', function () {
    'use strict';
    $(".loading-overlay, .loading-overlay .spinner").fadeOut(2000);
});

//scroll top code
var scrollButton = $("#scroll-top");
$(window).scroll(function () {
    'use strict';
    $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();
});
    
scrollButton.click(function () {
    'use strict';
    $("html,body").animate({scrollTop: 0}, 600);
});