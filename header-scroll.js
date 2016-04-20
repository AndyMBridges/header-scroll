// Header scroll background change
var bodyEl = $("body");
$(window).on("scroll", function() {
  var scrollTop = $(this).scrollTop();
  $(".panel").each(function() {
    var el = $(this),
        className = el.attr("data-panel-color");
    if (el.offset().top < scrollTop + 60 ) {
        bodyEl.attr("data-panel-color", className);
    }
  });
});
