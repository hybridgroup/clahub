$(function() {
  $(".alert").delay(3000).slideUp(400, function(){
    $(this).remove();
  });

  if ($('.bxslider').length) {
    $('.bxslider').bxSlider({
      mode: 'fade',
      pager: false,
      auto: true,
      onSliderLoad: function() {
        var caption = $('.bxslider li:first-child img').data('caption');
        $('.slider-caption').html(caption);
      },
      onSlideBefore: function() {
        $('.slider-caption h4').fadeOut('fast');
        $('.slider-caption p').fadeOut('fast');
      },
      onSlideAfter: function($element, oldIndex, newIndex) {
        var caption = $('.bxslider li img[alt=' + (newIndex+1*1) +']').data('caption');
        $('.slider-caption').html(caption);
      }
    });
  };
});
