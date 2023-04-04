$( document ).ready(function() {
    console.log( "ready!" );





    $('.slickwrapper').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        slidesToScroll: 3,
        vertical: true,
        verticalSwiping: true,
        arrows: true
    })


    $('.aboutmelink').hover(function() {
        $('.expendbar').toggleClass("expended")
        $('.expendtext').text("aboutme")
    })
    $('.schoollink').hover(function() {
        $('.expendbar').toggleClass("expended")
        $('.expendtext').text("school projects")
    })
    $('.personallink').hover(function() {
        $('.expendbar').toggleClass("expended")
        $('.expendtext').text("personal projects")
    })
    $('.timelink').hover(function() {
        $('.expendbar').toggleClass("expended")
        $('.expendtext').text("timelapse")
    })
    $('.contactlink').hover(function() {
        $('.expendbar').toggleClass("expended")
        $('.expendtext').text("contact me")
    })



});