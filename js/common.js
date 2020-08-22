$(function () {

	// Custom JS

	// ===== Переключение тем для сайта__start =====//
	// $(".light-theme").click(function () {
	// 	$("body").attr('data-theme', 'light');
	// });

	// $(".dark-theme").click(function () {
	// 	$("body").attr('data-theme', 'dark');
	// });
	// ===== Переключение тем для сайта__end =====//

	// ===== Добавление оверлея для раскрытого мобильного меню__start =====//
	// $('.navbar-toggler').click(function () {
	// 	if ($(this).hasClass('collapsed')) {
	// 		$('.overlay-nav').addClass('overlay-nav-open');
	// 	} else {
	// 		$('.overlay-nav').removeClass('overlay-nav-open');
	// 	}
	// });
	// ===== Добавление оверлея для раскрытого мобильного меню__end =====//

	// ===== Анимация "гамбургера" для мобильного меню__start =====//
	// $('.navbar-toggler').click(function () {
	// 	if ($(this).hasClass('collapsed')) {
	// 		$('.hambergerIcon').addClass('open');
	// 	} else {
	// 		$('.hambergerIcon').removeClass('open');
	// 	}
	// });
	// ===== Анимация "гамбургера" для мобильного меню__end =====//

	// ===== Конвертация svg из тега в инлайновый код на странице для управления__start =====//
	 jQuery('img.svg').each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function(data) {
			 // Get the SVG tag, ignore the rest
			 var $svg = jQuery(data).find('svg');

			 // Add replaced image's ID to the new SVG
			 if(typeof imgID !== 'undefined') {
				  $svg = $svg.attr('id', imgID);
			 }
			 // Add replaced image's classes to the new SVG
			 if(typeof imgClass !== 'undefined') {
				  $svg = $svg.attr('class', imgClass+' replaced-svg');
			 }

			 // Remove any invalid XML tags as per http://validator.w3.org
			 $svg = $svg.removeAttr('xmlns:a');

			 // Replace image with new SVG
			 $img.replaceWith($svg);

		}, 'xml');
	});
	// ===== Конвертация svg из тега в инлайновый код на странице для управления__end =====//

	// ===== Анимация кнопки "up/down" для аккордиона в section-1__start =====//
	// $('.sec-1__card_btn').click(function () {
	// 	if ($(this).hasClass('collapsed')) {
	// 		$('.sec-1__card_btn-icon', this).addClass('sec-1__card_btn-icon_open');
	// 	} else {
	// 		$('.sec-1__card_btn-icon', this).removeClass('sec-1__card_btn-icon_open');
	// 	}
	// });
	// ===== Анимация кнопки "up/down" для аккордиона в section-1__end =====//

	// ===== Плавная прокрутка в начало для кнопки наверх =====//

	$(document).ready(function(){
		// = Вешаем событие прокрутки к нужному месту
			//   на все ссылки якорь которых начинается на #
			//  Для исключения ссылки из плавной прокрутки добавить .not('a[href^="#некая_ссылка"]') после $('a[href^="#"]')
			$('a[href^="#"]').bind('click.smoothscroll',function (e) {
				e.preventDefault();
	
				var target = this.hash,
				$target = $(target);
	
				$('html, body').stop().animate({
					'scrollTop': $target.offset().top
				}, 700, 'swing', function () {
					window.location.hash = target;
				});
			});
	
		});

	// ===== Плавная прокрутка в начало для кнопки наверх_end =====//

});
