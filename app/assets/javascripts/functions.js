function alert_msg(type, message) {
  $("#message").empty();
  $("#message").prepend("<div class='alert alert-" + type + "'>" + message + "</div>");
  $(".alert").delay(3000).slideUp(400, function(){
    $(this).remove();
  });
}

$(function() {
  $(".alert").delay(3000).slideUp(400, function(){
    $(this).remove();
  });

  $("#btn-session").click(function() {
    $(this).toggleClass("active");
    $(".dropdown-menu").toggle();
  });

  $(document).on("click", function(event) {
    if (!$(event.target).closest("#session-btn").length) {
      $(".dropdown-menu").hide();
      $("#btn-session").removeClass("active");
    }
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
        $('.slider-caption').html('');
      },
      onSlideAfter: function($element, oldIndex, newIndex) {
        var caption = $('.bxslider li img[alt=' + (newIndex+1*1) +']').data('caption');
        $('.slider-caption').html(caption);
      }
    });
  };
});
