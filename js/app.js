


$(function(){
    $('.banner_sec').slick({
      prevArrow:'<i class="slider_icon fas fa-arrow-left"></i>',
      nextArrow:'<i class="slider_icon fas fa-arrow-right"></i>'
    });

    $('.about_slide').slick({
      
    });
  
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
  //course slider
    $('.course_slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });
  //event calender
    $("#pb-calendar").pb_calendar();
  
    $(".event_slider").slick();

    $('.tes_slider').slick({
      prevArrow:'<i class="slider_icon fas fa-arrow-left"></i>',
      nextArrow:'<i class="slider_icon fas fa-arrow-right"></i>'
    });
    
  });



  