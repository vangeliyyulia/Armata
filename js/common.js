//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.magnificPopup.close();
				$(".form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	$('.cta__btn').click(function() {
		$("#callback h3").html($(this).text());
		$("#callback input[name=formname]").val($(this).text());
	}).magnificPopup({
		type:'inline',
		midClick: true,
		removalDelay: 300,
		mainClass: 'mfp-fade'
	  });

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

//Mobile Menu
	jQuery(document).ready(function() {
		jQuery('button.hamburger').click(function(e) {
		jQuery(this).toggleClass('active');
		jQuery('.nav ul').toggleClass('active');
		e.preventDefault();
		});
	});

	$('button.hamburger').on('click', function() {
		$(this).toggleClass('is-active');
	});

//Scroll-down in the Header
	$(document).ready(function() {
		$('.arrow-down').click(function(){
		$('html, body').animate({scrollTop:$('.property').height() + 20}, 'slow');
		return false;
		});
	});

	$(".top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

$(".heading__main, .heading__text").animated("fadeIn");
$(".heading--pro").animated("fadeInLeft");
$(".form--grey").animated("fadeInRight");
$(".property__item").animated("zoomIn");
$(".accounting__item").animated("fadeInUp");
$(".deals__item").equalHeights();
$(".deals__item .deals__image").equalHeights();

$(".property").waypoint(function() {
	$(".property__item").each(function(index) {
		var ths = $(this);
		setInterval(function() {
			ths.addClass("on");
		}, 200*index);
	});
}, {
	offset : "30%"
});

$(".deals").waypoint(function() {
	$(".deals__item").each(function(index) {
		var ths = $(this);
		setInterval(function() {
			ths.addClass("on");
		}, 200*index);
	});
}, {
	offset : "30%"
});

$(".advantages").waypoint(function() {

	$(".card__item").each(function(index) {
		var ths = $(this);
		setInterval(function() {
			ths.removeClass("card__item--card-off").addClass("card-on");
		}, 200*index);
	});

}, {
	offset : "20%"
});

$(".team").waypoint(function() {

	$(".team__item").each(function(index) {
		var ths = $(this);
		setInterval(function() {
			ths.removeClass("team__item--team-off").addClass("team-on");
		}, 200*index);
	});

}, {
	offset : "35%"
});

$(".pro").waypoint(function() {
	$(".pro__item").each(function(index) {
		var ths = $(this);
		setInterval(function() {
			ths.addClass("on");
		}, 200*index);
	});
}, {
	offset : "30%"
});

$(".slider__list").owlCarousel({
	items : 1,
	nav : true,
	navText : "",
	loop : true,
	autoplay : true,
	autoplayHoverPause : true,
	fluidSpeed : 600,
	autoplaySpeed : 600,
	navSpeed : 600,
	dotsSpeed : 600,
	dragEndSpeed : 600
});

$(".slider__item").animated("fadeIn");

//"Как мы работаем" секция
var waypointsvg = new Waypoint({

	element: $(".working"),
	handler: function(dir) {
		
		if (dir === "down") {

			$(".triangle__icon").each(function(index) {
				var ths = $(this);
				setTimeout(function() {
					var myAnimation = new DrawFillSVG({
						elementId: "tc-svg-" + index
					});
				}, 500*index);
			});
		};
		this.destroy();
	},
	offset: '35%'
});

$(".working").waypoint(function() {

	$(".triangle__content").each(function(index) {
		var ths = $(this);
		setInterval(function() {
			ths.addClass("triangle__content--on");
		}, 500*index);
	});

}, {
	offset : "35%"
});

//SVG Fallback
if(!Modernizr.svg) {
	$("img[src*='svg']").attr("src", function() {
		return $(this).attr("src").replace(".svg", ".png");
	});
};