$(window).on('load', function() {
  "use strict";

  $('.megamenu-li').parent('.container').parent('ul').addClass('mega-menu');
  $('.banner-wrap').parent('.container').parent('ul').addClass('bottom-banner');
  $('.menu-banner').parent('.container').parent('ul').addClass('banner-menu');
  $('.submenu-li').parent('.container').parent('ul').addClass('sub-menu');

  // popup
  var popup = localStorage.getItem('popup_value'); 
  if(popup != 1){
    $('#news-letter-modal').modal('show');
  }
  $('#popup-close').on('click',function(){
      localStorage.setItem('popup_value', '1');
  });
  $(window).on('load',function(){
    $('#news-letter-modal').modal('show');
  });

  // menu toggler js
  $(".navbar-toggler").on('click', function() {
    $(".main-menu-area").addClass("active");
    $(".mm-fullscreen-bg").addClass("active");
    $("body").addClass("hidden");
  });
  $(".close-box").on('click', function() {
    $(".main-menu-area").removeClass("active");
    $(".mm-fullscreen-bg").removeClass("active");
    $("body").removeClass("hidden");
  });

  // filter button js
  $("button.filter-button").on('click', function() {
    $(".filter-sidebar").addClass("active");
    $(".mm-fullscreen-bg").addClass("active");
  });
  $("button.close-filter-sidebar").on('click', function() {
    $(".filter-sidebar").removeClass("active");
    $(".mm-fullscreen-bg").removeClass("active");
  });

  // add to cart js via product show mini-cart
  $(".shopping-cart a.cart-count").on('click', function() {
    $(".mini-cart").addClass("show");
    $(".mm-fullscreen-bg").addClass("active");
  });

  $(".shopping-cart-close i").on('click', function() {
    $(".mini-cart").removeClass("show");
    $(".mm-fullscreen-bg").removeClass("active");
     $("body").removeClass("hidden");
  });

   $(".ajax-spin-cart").on('click', function() {
    window.setTimeout(function() {
      $(".mini-cart").addClass("show");
      $(".mm-fullscreen-bg").addClass("active");
      $("body").addClass("hidden");
    }, 1000);
  });

  // body background color js
  $(".mm-fullscreen-bg").on('click', function() {
    $(".main-menu-area").removeClass("active");
    $(".filter-sidebar").removeClass("active");
    $(".mm-fullscreen-bg").removeClass("active");
    $(".mini-cart").removeClass("show");
    $("body").removeClass("hidden");
  });

  // product-img full-view & magnific popup
  $('.full-view, .zoom').on('click', function() {
    $('.product_img_top').magnificPopup({
      delegate: 'a',
      type:'image',
      showCloseBtn: true,
      closeBtnInside: false,
      midClick: true,
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1]
      }
    }).magnificPopup('open');
  });

  $('.play-button, .popup-vimeo, .popup-gmaps').magnificPopup({
      tClose: 'Close (Esc)',
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
  });

  // sticky header
  $(window).scroll(function() {
    var sticky = $('.header-sticky-area'),
    scroll = $(window).scrollTop();
    if (scroll >= 150) {
      sticky.addClass('is-sticky');
    }
    else {
      sticky.removeClass('is-sticky');
    }
  });

  // back to top
  $(window).scroll(function() { 
    if ($(this).scrollTop() > 600) { 
       $('#top').addClass('show'); 
    } else { 
      $('#top').removeClass('show'); 
    } 
  }); 
  $('#top').click(function(){ 
    $("html, body").animate({ scrollTop: 0 }, 600); 
    return false; 
  });

  $('.count').counterUp({
    delay: 10,
    time: 3000
  });

  // contect us page
  $('label.box-area').on('click', function () {
    if($('.cust-checkbox').is(':checked')) {
      $('.contact-f-btn').removeClass('disabled');
    }
    else {
      $('.contact-f-btn').addClass('disabled');
    }
  });

  // account page
  $('.read-agree').on('click', function () {
    if($('.create-checkbox').is(':checked')) {
      $('.create').removeAttr('disabled');
    }
    else {
      $('.create').attr('disabled', 'disabled');
    }
  });

  // tooltip
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
});