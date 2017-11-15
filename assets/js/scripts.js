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
    if (target.length) {
      console.log("hitting here!");
      $(".cross").click();
      if (!$('.information-overlay').is(':visible')) {
        $('.information-overlay').fadeIn("slow");
        $('.caption').fadeOut("slow");
      }
      showOne(target.selector);
      return false;
    }
  }
});

function showOne(id) {
  if ($('.page').is(':visible')) {
    $('.page').not(id).fadeOut("slow");
    $(id).delay(700).fadeIn("slow");
  } else {
    $(id).fadeIn("slow");
  }
}

var height = $(".parallax").outerHeight();

$(document).keyup(function(e) {
 if ((e.keyCode == 27)&& ($(".menu").is(":visible"))) {
    $(".cross").click();
  }
});

/** Tooltips **/
$('[data-toggle="tooltip"]').tooltip();