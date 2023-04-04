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
        $('.navbar').toggleClass("nobg")
    })
    $('.schoollink').hover(function() {
        $('.expendbar').toggleClass("expended")
        $('.expendtext').text("school projects")
        $('.navbar').toggleClass("nobg")
    })
    $('.personallink').hover(function() {
        $('.expendbar').toggleClass("expended")
        $('.expendtext').text("personal projects")
        $('.navbar').toggleClass("nobg")
    })
    $('.timelink').hover(function() {
        $('.expendbar').toggleClass("expended")
        $('.expendtext').text("timelapse")
        $('.navbar').toggleClass("nobg")
    })
    $('.contactlink').hover(function() {
        $('.expendbar').toggleClass("expended")
        $('.expendtext').text("contact me")
        $('.navbar').toggleClass("nobg")
    })



});