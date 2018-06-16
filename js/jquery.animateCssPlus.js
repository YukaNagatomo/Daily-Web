/*!
 * jquery.animateCssPlus.js v0.1.0
 * Animate-css to work in click, hover and scroll events.
 * License : MIT
 * Author : Tadashi Suyama<info@its-office.jp> (http://its-office.jp/)
 */

;(function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(function($) {
	'use strict';
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

	$.fn.animateCssPlus = function(options){

		var elements = this;
		var defaults = {
			click  : false,
			scroll : false,
			class  : 'bounce'
		};

		elements.each(function() {
			var opts = $.extend({}, defaults, options, $(this).data());
			if(opts.click === true) {
				$(this).on('click', function(e) {
					e.preventDefault();
					$(this).addClass('animated ' + opts.class).one(animationEnd, function() {
						$(this).removeClass('animated ' + opts.class);
					});
				});
			} else if(opts.scroll === true) {
				var place = $(this);
				var mado = $(window);
				mado.on('scroll', function(){
					var position = place.offset().top - mado.height();
					if (mado.scrollTop() > position) {
						place.addClass('animated ' + opts.class);
					}
				});
			} else {
				$(this).on('mouseenter', function(){
					$(this).addClass('animated ' + opts.class);
				}).on('mouseleave', function(){
					$(this).removeClass('animated ' + opts.class);
				});
			}
		});
	};
}));

