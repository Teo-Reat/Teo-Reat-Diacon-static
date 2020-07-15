$(document).ready(() => {
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
		}
	}

	fixed_menu();
	$(window).scroll(function () {
		fixed_menu();
	});

	//Slick slider in prime section
	$('.js-prime__slider').slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev prime__slick-prev"><svg class="icon icon-arrow_sl_l"><use xlink:href="#icon-arrow_sl_l"></use></svg></button>',
		nextArrow: '<button type="button" class="slick-next prime__slick-next"><svg class="icon icon-arrow_sl_r"><use xlink:href="#icon-arrow_sl_r"></use></svg></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			},
		]
	});

	//Slick slider in news section
	$('.news__actions__slider').slick({
		// autoplay: true,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev news__actions__slick-prev"><svg class="icon icon-arrow-l"><use xlink:href="#icon-arrow-l"></use></svg></button>',
		nextArrow: '<button type="button" class="slick-next news__actions__slick-next"><svg class="icon icon-arrow-r"><use xlink:href="#icon-arrow-r"></use></svg></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true
				}
			},
		]
	});

	//Mobile menu toggle
	$('.js-header__menu').click(function(){
		$(this).toggleClass('open');
		$('.js-mobile').slideToggle()
	});

	//Search menu open
	$('.js-header__search__button').click(() => {
		$('.js-search').addClass('search__open')
		$('.js-search__results').show()
	})

	//Search menu close
	$('.js-search__close').click(() => {
		$('.js-search').removeClass('search__open')
		$('.js-search__results').hide()
	})

	//Styles for "select" tag
	$('.js-network__select').niceSelect()

	// Navigation products submenu
	$('.js-navigation__products__button').click(() => {
		$('.js-navigation__products__button').toggleClass('navigation__products_active')
		$('.navigation__products__wrapper').toggleClass('js-hover')
	})

	//Change language
	$('.js-header__language').click(() => {
		$('.js-language').slideToggle()
	})

	//Tablet menu open
	$('.js-header__tablet-menu').click(function(){
		$(this).toggleClass('open');
		$('.js-navigation__list__wrapper').slideToggle()
	});
	// $('.js-header__tablet-menu').click(() => {
	// 	$('.js-navigation__list__wrapper').slideToggle()
		// $('.navigation__products__wrapper').removeClass('js-hover')
	// })

	//Mobile menu products toggle
	$('.js-mobile__products__open').click(() => {
		$('.mobile__submenu').slideToggle()
		$('.js-mobile__products').toggleClass('mobile__menu__item_active')
	})
})
