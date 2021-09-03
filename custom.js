var mainslider;
var sliding = false;

$(document).ready(function() {
    var options = {
        slides: '.slide', //Nama slide di slidecontainer
        swipe: false, //handle swipe, wajib include touchSwipe
        Transition: "slide", //Transisi slide=> slide dan fade
        slideTracker: true, //menambah pelacakan slide
        slideTrackerID: 'slideposition', //Nama pelacakan slide
        slideOnInterval: false, //Interval slide
        interval: 9000, //Interval slide, jika slideOnInterval is enabled/true
        animateDuration: 1000, //durasi animasi
        animationonEasing: 'ease', //Nilai yang diterima: linear ease in out in-out snap easeOutCubic
                                    //easeInOutCubic easeInCirc easeOutCirc easeInOutCirc easeInExpo easeOutExpo
                                    //easeInOutExpo easeInQuad easeOutQuad easeInOutQuad easeInQuart easeOutQuart
                                    //easeInOutQuart easeInQuint easeOutQuint easeInOutQuint easeInSine easeOutSine
                                    //easeInOutSine easeInBack easeOutBack easeInOutBack
        pauseOnHover: false, //Pasu jika user mengarahkan kursor ke slide container
        magneticSwipe: true, //efek menempel pada slide ketika swipping/dragging
        neverEnding: true, //aktifkan untuk membuat efel yang tidak pernah berhenti/neverending.
    
    };

    $(".slider").simpleSlider(options);
    mainslider = $(".slider").data("simplesslider");
    /* yes, that's all! */

    $(".slider").on("beforeSliding", function(event) {
        var prevSlide = event.prevSlide;
        var newSlide = event.newSlide;
        $(".slider .slide[data-index='" + prevSlide + "'] .slidecontent").fadeOut();
        $(".slider .slide[data-index='" + newSlide + "'] .slidecontent").hide();
        sliding = true;
    });

    $(".slider").on("afterSliding", function(event) {
        var prevSlide = event.prevSlide;
        var newSlide = event.newSlide;
        $(".slider .slide[data-index='" + newSlide + "'] .slidecontent").fadeIn();
        sliding = false;
    });

    /**
     * Control the slider by scrolling
     */

    $(window).bind('mousewheel', function(event) {
        if(!sliding) {
            if(event.originalEvent.deltaY > 0) {
                mainslider.nextSlide();
            }
            else {
                mainslider.prevSlide();
            }
        }
    });

    $(".tema .temaweb").select2();
    $(".slide#satu").backstretch("images/image1.jpg");
    $(".slide#dua").backstretch("images/image2.jpg");
    $(".slide#tiga").backstretch("images/image3.jpg");
    $(".slide#empat").backstretch("images/image4.jpg");
    $(".slide#lima").backstretch("images/image5.jpg");
    $(".slide#enam").backstretch("images/image6.jpg");

    $("#satu").ripples({
        resolution: 200,
        perturbance: 0.04,
    });
    $("#dua").ripples({
        resolution: 200,
        perturbance: 0.04,
    });
    $("#tiga").ripples({
        resolution: 200,
        perturbance: 0.04,
    });
    $("#empat").ripples({
        resolution: 200,
        perturbance: 0.04,
    });
    $("#lima").ripples({
        resolution: 200,
        perturbance: 0.04,
    });
    $("#enam").ripples({
        resolution: 200,
        perturbance: 0.04,
    });

  

    $('.slide .backstretch img').on('dragstart', function(event) { event.preventDefault(); });

    $(".slidecontent").each(function() {
        $(this).css('margin-top', -$(this).height()/2);
    });
});