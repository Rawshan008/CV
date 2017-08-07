(function ($) {
	"use strict";

	jQuery(document).ready(function($){

				/* =============================================
					Progress Bar JS
				===============================================*/
	            $(".single-progressbar").each(function() {
					var base = $(this);
					var windowHeight = $(window).height();
					var itemPos = base.offset().top;
					var scrollpos = $(window).scrollTop() + windowHeight - 100;
					if (itemPos <= scrollpos) {
						var auptcoun = base.find(".progress-bar").attr("aria-valuenow");
						base.find(".progress-bar").css({
							"width": auptcoun + "%"
						});
						var str = base.find(".skill_per").text();
						var res = str.replace("%", "");
						if (res == 0) {
							$({
								countNumber: 0
							}).animate({
								countNumber: auptcoun
							}, {
								duration: 1500,
								easing: 'linear',
								step: function() {
									base.find(".skill_per").text(Math.ceil(this.countNumber) + "%");
								}
							});
						}
					}
				});

	});
	jQuery(window).load(function(){


	});


}(jQuery));