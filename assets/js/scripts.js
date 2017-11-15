/** Menu Control **/
$(".cross").hide();
$(".menu").hide();

$(".hamburger").click(function() {
  $(".menu").slideToggle( "slow", function() {
    $(".hamburger").hide();
    $(".cross").show();
  });
});

$(".cross").click(function() {
  $(".menu").slideToggle( "slow", function() {
    $(".cross").hide();
    $(".hamburger").show();
  });
});

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      if ($(window).width() < 768) {
        $(".cross").click();
      }
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 2000);
      return false;
    }
  }
});

var height = $(".parallax").outerHeight();

$(document).keyup(function(e) {
 if ((e.keyCode == 27)&& ($(".menu").is(":visible"))) {
    $(".cross").click();
  }
});

/** Tooltips **/
$('[data-toggle="tooltip"]').tooltip();