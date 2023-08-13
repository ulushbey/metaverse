(function ($) {
  "user strict";
  $(window).on('load', function () {
    $('.preloader').fadeOut(1000);
    var img = $('.bg_img');
    img.css('background-image', function () {
      var bg = ('url(' + $(this).data('background') + ')');
      return bg;
    });
  });
  $(document).ready(function () {
    new WOW().init(); 
    var scrollTop = $(".scrollToTop");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
      } else {
        scrollTop.addClass("active");
      }
    });
    $('.scrollToTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
    $('.header-bar').on('click', function () {
      $(this).toggleClass('active');
      $('.overlay').toggleClass('active');
      $('.menu').toggleClass('active');
    })
    $('.overlay').on('click', function () {
      $(this).removeClass('active');
      $('.header-bar').removeClass('active');
      $('.menu').removeClass('active');
    })
    var scrollPosition = window.scrollY;
    if (scrollPosition >= 1) {
      $(".header-section").addClass('active');
    }
    var header = $(".header-section");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() < 1) {
          header.removeClass("active");
        } else {
          header.addClass("active");
        }
    });
    $('.plus-icon').on('click', function (e) {
      var item = $(this).parent('.process-bottom').parent('.process-item');
      $(this).toggleClass('active');
      if (item.hasClass('active')) {
        item.removeClass('active');
      } else {
        item.addClass('active');
      }
    });
  });
})(jQuery);
