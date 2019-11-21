
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $(".menulogo-container").hide();
    $(".header-image").hide();
    $(".fixed-header").css('display', 'flex');
    $(".hero").css('top', '96px');

  } else  {
    $(".menulogo-container").show();
    $(".header-image").show();
    $(".fixed-header").css('display', 'none');
    $(".hero").css('top', '0px');


}
}
