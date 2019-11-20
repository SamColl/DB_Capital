
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $(".menulogo-container").hide();
    $(".header-image").hide();
    $(".fixed-header").show();
    $(".hero").css('top', '96px');

  } else {
    document.getElementById("header").style.fontSize = "90px";
  }
}
