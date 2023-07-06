'use strict';

$(function () {
    // ハンバーガーボタンクリックで実行
    $(".MenuBtn").click(function () {
        $(this).toggleClass("active");
        $(".hbg-menu").toggleClass("active");
    });

    $(".Menu-Group-Item-Link").click(function () {
        $(".MenuBtn").removeClass("active");
        $(".hbg-menu").removeClass("active");
    });

    // ページ内スクロール
    $('a[href^="#"]').click(function () {
        const speed = 1;
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top;
        $("body,html").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });
    // function
});