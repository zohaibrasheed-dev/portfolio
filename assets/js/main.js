$(document).ready(function () {

  // Desktop Menu
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    const target = $(this.getAttribute('href'));
    $('html, body').animate({
      scrollTop: target.offset().top - 150
    }, 600); // 600 = speed in ms
  });

  // Mobile Menu
  $('.menuBtn').click(function () {
    $(this).toggleClass('animate');
    $('body').toggleClass('overflow-hidden');
    $('.navbar').toggleClass('active');
  })
  $('.navbar-link').click(function () {
    $('.menuBtn').removeClass('animate');
    $('body').removeClass('overflow-hidden');
    $('.navbar').removeClass('active');
  })

  // Sticky Header
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 50) {
      $("header").addClass("scrolled");
    } else {
      $("header").removeClass("scrolled");
    }
  });

  // Animations Setup
  var scrollController = new ScrollMagic.Controller();
  $('.fadeInUp,.fadeInDown,.boxAnimateBottom,.fadeIn,.fadeInLeft,.fadeInRight').each(function () {
    var fadeInUpScene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: .9,
      reverse: false
    })
      .setClassToggle(this, 'isAnimated')
      .addTo(scrollController);
  });


  // Filter
  $(".filterBtn").click(function () {
    $(".filterBtn").removeClass("active");
    $(this).addClass("active");
    $(".work-content").addClass("hidden");
    $("#" + $(this).data("content")).removeClass("hidden");
  });

  // Open modal
  $(".emailCard").click(function () {

    const img = $(this).data("img");

    $(".template-img").attr("src", img);

    $("#emailModal").addClass("active");
    $("body").addClass("overflow-hidden");

  });

  // Close modal
  $(".closeModal").click(function () {

    $("#emailModal").removeClass("active");
    $(".template-img").attr("src", "");

    $("body").removeClass("overflow-hidden");

  });

});