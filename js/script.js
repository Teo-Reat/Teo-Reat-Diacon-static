$(document).ready(function () {
  //Variables
  var tabletMenuButton = $('.js-header__tablet-menu');

  //Fixed menu
  function fixed_menu() {
    if ($(window).scrollTop() > 0) {
      $('.js-fixed').addClass('fixed');
      $('.js-search__results').addClass('fixed__results');
      $('.js-main').addClass('is-fixed');
    } else {
      $('.js-fixed').removeClass('fixed');
      $('.js-search__results').removeClass('fixed__results');
      $('.js-main').removeClass('is-fixed');
      $('.js-navigation__list__wrapper').css('display', '');
      tabletMenuButton.removeClass('open');
    }
  }

  fixed_menu();
  $(window).scroll(function () {
    fixed_menu();
  });

  //Slick slider in prime section
  $('.js-prime__slider').slick({
    autoplay: true,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev prime__slick-prev"><svg class="icon icon-arrow_sl_l"><use xlink:href="#icon-arrow_sl_l"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next prime__slick-next"><svg class="icon icon-arrow_sl_r"><use xlink:href="#icon-arrow_sl_r"></use></svg></button>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }]
  });

  //Slick slider in news section
  $('.news__actions__slider').slick({
    autoplay: true,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev news__actions__slick-prev"><svg class="icon icon-arrow-l"><use xlink:href="#icon-arrow-l"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next news__actions__slick-next"><svg class="icon icon-arrow-r"><use xlink:href="#icon-arrow-r"></use></svg></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }]
  });

  //Mobile menu toggle
  $('.js-header__menu').click(function () {
    $(this).toggleClass('open');
    $('.js-mobile').slideToggle();
  });

  //Search menu open
  $('.js-header__search__button').click(function () {
    $('.js-search').addClass('search__open');
    $('.js-search__results').show();
  });

  //Search menu close
  $('.js-search__close').click(function () {
    $('.js-search').removeClass('search__open');
    $('.js-search__results').hide();
  });

  //Styles for "select" tag
  $('.js-network__select').niceSelect();
  $('.js-dealer__select').niceSelect(); // Navigation products submenu

  var navigationSubMenu = $('.navigation__products__wrapper');
  $('.js-navigation__products__button').click(function () {
    $('.js-navigation__products__button').toggleClass('navigation__products_active');
    $('.navigation__products__wrapper').toggleClass('js-hover');
  });

  //Change language
  $('.js-header__language').click(function () {
    $('.js-language').slideToggle();
  });

  //Tablet menu open
  tabletMenuButton.click(function () {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $('.js-navigation__list__wrapper').slideUp();
    } else {
      $(this).addClass('open');
      $('.js-navigation__list__wrapper').slideDown();
    }
  });

  //Mobile menu products toggle
  $('.js-mobile__products__open').click(function () {
    $('.mobile__submenu').slideToggle();
    $('.js-mobile__products').toggleClass('mobile__menu__item_active');
  });

  //LK instructions ladder
  $('.js-reagents__first-floor-button').click(function () {
    $('.js-reagents__first-floor-button').toggleClass('reagents__menu--active');
    $('.js-reagents__second-floor').slideToggle();
  });
  $('.js-reagents__second-floor-button').click(function () {
    $('.js-reagents__second-floor-button').toggleClass('reagents__menu--active');
    $('.js-reagents__third-floor').slideToggle();
  });
  $('.js-reagents__third-floor-button').click(function () {
    $('.js-reagents__third-floor-button').toggleClass('reagents__menu--active');
    $('.js-reagents__fourth-floor').slideToggle();
  });
  $('.js-reagents__fourth-floor-button').click(function () {
    $('.js-reagents__fourth-floor-button').toggleClass('reagents__menu--active');
    $('.js-reagents__fifth-floor').slideToggle();
  });
});
