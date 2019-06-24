// Indicator

var barLinks = $('.progress-bar__indicator__links');

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  $.each($('.reveal'), function(i) {
    var top = ($(this).offset().top),
			bottom = top + $(this).outerHeight();

      var screenheight = $(document).height();
      var trigger = screenheight/2;

    if (cur_pos >= top && cur_pos <= bottom) {
      barLinks.find('a').removeClass('active');
      $('.reveal').removeClass('active');
      $(this).addClass('active');
      barLinks.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');

      var linksNo = barLinks.find('li').length;

      var currentNumber = $(this).attr('id');
      $('.progress-bar__numbers__current-number').text('0'+currentNumber);
      $('.progress-bar__numbers__total-number').text('0' + linksNo);

      var value = 100 / linksNo;
      $('.progress-bar__indicator__bar-container__bar').css('height', value * currentNumber + '%');
    }
  });
 });

barLinks.find('a').on('click', function () {
  var $el = $(this)
  , id = $el.attr('href');

  $('html, body').animate({
  scrollTop: $(id).offset().top + 10
  }, 500);

  return false;
});
