/**
 * Author: Kris Olszewski
 * CodePen: https://codepen.io/KrisOlszewski/full/wBQBNX
 */

(function($, window, document, undefined) {

  'use strict';

	var $html = $('html');

  $html.on('click', '.dropdown', function(e) {
    e.preventDefault();
    $(this).toggleClass('is-open');
  });

  $html.on('click', '.dropdown [data-dd-value]', function(e) {
    e.preventDefault();
    var $item = $(this);
    var $dropdown = $item.parents('.dropdown');
    $dropdown.find('.js-dropdown__input').val($item.data('data-dd-value'));
    $dropdown.find('.js-dropdown__current').text($item.text());
  });

  $html.on('click', function(e) {
    var $target = $(e.target);
    if (!$target.parents().hasClass('dropdown')) {
      $('.dropdown').removeClass('is-open');
    }
  });

})(jQuery, window, document);
