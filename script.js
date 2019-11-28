
window.onscroll = function() {scrollFunction(x)};

function scrollFunction(x) {
  if ((x.matches) && ((document.body.scrollTop > 60) || (document.documentElement.scrollTop > 60))) {
    $(".menulogo-container").hide();
    $(".header-image").hide();
    $(".fixed-header").css('display', 'flex');
    $(".hero").css('top', '96px');
    $("#myBtn").show();

  } else  {
    $(".menulogo-container").show();
    $(".header-image").show();
    $(".fixed-header").css('display', 'none');
    $(".hero").css('top', '0px');
    $("#myBtn").hide();
}

}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



var x = window.matchMedia("(min-width: 670px)")
scrollFunction(x) // Call listener function at run time
x.addListener(scrollFunction) // Attach listener function on state changes

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myHamburger() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myMobileTooltip() {
  var x = document.getElementsByClassName("tooltiptext");
  if (x.style.visibility === "visible") {
    x.style.visibility = "none";
  } else {
    x.style.visibility = "visible";
  }
}
document.querySelector
