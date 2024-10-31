$( document ).ready(function() {
    console.log( "ready!" );
    if ($(window).width() > 1100){
        $('#pagepiling').pagepiling({
            anchors: ['home','aboutme','schoolprojects','schoolprojects2','schoolexercises','contact'],
            verticalCentered: false,
            navigation: {
                'textColor': '#000',
                'bulletsColor': '#000',
                'position': 'right',
                
            },
        });
}



    $('.slickwrapper').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        slidesToScroll: 3,
        vertical: true,
        verticalSwiping: true,
        arrows: true,
        prevArrow: $('.customback1'),
        nextArrow: $('.customnext1')
    })

    $('.slickwrapper2').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        slidesToScroll: 3,
        vertical: true,
        verticalSwiping: true,
        arrows: true,
        prevArrow: $('.customback2'),
        nextArrow: $('.customnext2')
    })

    $('.slickwrapper3').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        slidesToScroll: 3,
        vertical: true,
        verticalSwiping: true,
        arrows: true,
        prevArrow: $('.customback3'),
        nextArrow: $('.customnext3')
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
    $('.schoolexerciseslink').hover(function() {
        $('.expendbar').toggleClass("expended")
        $('.expendtext').text("school exercises")
        $('.navbar').toggleClass("nobg")
    })

    $('.timelink').hover(function() {
        $('.expendbar').toggleClass("expended")
        $('.expendtext').text("timeline")
        $('.navbar').toggleClass("nobg")
    })
    $('.contactlink').hover(function() {
        $('.expendbar').toggleClass("expended")
        $('.expendtext').text("contact me")
        $('.navbar').toggleClass("nobg")
    })


    $('.skillblock').hover(function(){
        $(this).children("ul").toggleClass("expand")
    })
    

    




});