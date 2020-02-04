$(function () {
    // On Load
    $(".logo").height($(window).height() - $(".header").height());

    // Event Handlers
    $(window).resize(function () {
        $(".logo").height($(window).height() - $(".header").height());
    });
});
