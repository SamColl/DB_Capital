
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll = 100) {
        $("main-header").addClass("hide");
    }
}
