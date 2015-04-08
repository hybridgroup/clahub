// jshint unused:false

(function() {
  "use strict";

  function alert_msg(type, message) {
    $("#message").empty();
    $("#message").prepend("<div class='alert alert-" + type + "'>" + message + "</div>");
    $(".alert").delay(3000).slideUp(400, function(){
      $(this).remove();
    });
  }

  $(document).ready(function() {
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
  });
})();
