$(function () {

	// Custom JS

	// ===== Конвертация svg из тега в инлайновый код на странице для управления__start =====//
	jQuery('img.svg').each(function () {
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if (typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');
	});
	// ===== Конвертация svg из тега в инлайновый код на странице для управления__end =====//

	// ===== Плавная прокрутка в начало для кнопки наверх =====//

	$(document).ready(function () {
		// = Вешаем событие прокрутки к нужному месту
		//   на все ссылки якорь которых начинается на #
		//  Для исключения ссылки из плавной прокрутки добавить .not('a[href^="#некая_ссылка"]') после $('a[href^="#"]')
		$('a[href^="#"]').bind('click.smoothscroll', function (e) {
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


	// ===== Сброс проигрывания видео в модальном окне при его закрытии (по id) =====//
	$('#service_modal-video-1, #service_modal-video-2, #service_modal-video-3').click(function () {
		$('iframe').attr('src', $('iframe').attr('src'));
	});
	// ===== Сброс проигрывания видео в модальном окне при его закрытии (по id)_end =====//

});
