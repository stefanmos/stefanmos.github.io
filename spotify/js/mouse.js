$('body').mouseover(function(){
  $(this).css({cursor: 'none'});
});

$(document).on("mousemove", function(event) {
	$(".cursor").css({"top": event.pageY, "left": event.pageX});
});

var $box = $('#box');
function moveBox (e) {
  TweenMax.to( $box, 1.3, {
    css: { left: e.pageX, top: e.pageY },
    ease: Elastic.easeOut.config(1, 0.5)});
}
$(window).on('mousemove', moveBox);

$("a").on("mouseover", function() {
    $('#box').css({
			"width": "25px",
			"height": "25px",
			"margin": '-10px 0 0 -10px',
			"background": "rgba(0,0,0,0.3)"
		}),
		$('.cursor').css({
			"background": "white"
		});
}).on("mouseout", function() {
      $('#box').css({
				"width": "50px",
				"height": "50px",
				"margin": '-22px 0 0 -22px',
				"background": "rgba(255,255,255,0.05)"
			}),
			$('.cursor').css({
				"background": "#000"
			});
});
