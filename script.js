$(function () {
    // On Load
    $(".logo").height($(window).height() / 2);

    // Event Handlers
    $(window).resize(function () {
        $(".logo").height($(window).height() / 2);
    });
});
