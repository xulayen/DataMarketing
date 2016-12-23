$(function () {
    pageShow();    //页面显示
    arrowAni();  //箭头动画
});
function pageShow() {
    $('.bg_login,.login_top_wrap').height($(window).height());
    var pageTimer = setInterval(showPage, 200);
    var $pageTop = $('.login_top_wrap');
    function showPage() {
        if ($pageTop.height() == $(window).height()) {
            $('.login_page').show();
            clearInterval(pageTimer);
            $('.login_oil').addClass('fadeInDown');
            pageScroll();  //页面滚动
        }
    }
}
function pageScroll() {
    var myScroll;
    var bH = $('.board').height();
    myScroll = new IScroll('#wrapper', {
        scrollX: false,
        scrollY: true,
        momentum: false,
        disableMouse: true,
        disablePointer: true,
        bounce: false,
        snap: true,
        snapThreshold: 0,
        click: true,
        probeType: 3
    });
    myScroll.on('scroll', updatePosition);
    myScroll.on('scrollEnd', updatePosition);
    function updatePosition() {
        var percent = parseFloat(parseInt(myScroll.y) / (myScroll.maxScrollY * 5)).toFixed(2);
        var p = (1 - percent).toFixed(2);
        var curPage = myScroll.currentPage.pageY;
        if (curPage == 1) {
            $('.arrow_box').addClass('reverse');
        } else {
            $('.arrow_box').removeClass('reverse');
        }
        $('.login_oil').removeClass('fadeInDown').css({ 'transform': 'scale(' + p + ')', '-webkit-transform': 'scale(' + p + ')' });
        $('.board').height(bH * p);
    }
}
function arrowAni() {
    var oArrow = document.getElementById('arrow');
    var aImg = oArrow.getElementsByTagName('img');
    var len = aImg.length;
    setTimeout(function () {
        for (var i = 0; i < len; i++) {
            $(aImg[i]).addClass('ani');
        }
    }, 600);
    setInterval(function () {
        for (var i = 0; i < len; i++) {
            ImgShow(i);
        }
    }, 1500);
    function ImgShow(i) {
        setTimeout(function () {
            $(aImg[i]).removeClass('ani').fadeOut('100', function () {
                setTimeout(function () {
                    $(aImg[i]).addClass('ani').show();
                }, 50);
            });
        }, 300);
    }
}
/* 输入框只能输入数字*/
function change(target) {
    var $input = $("." + target);
    var val = $input.val().replace(/\D/, '');
    $input.val(val);
}
/* 输入框只能输入数字结束*/
function ruleShow() {
    $('#scroller').hide();
    $('.active_content').show();
}
function ruleHide() {
    $('#scroller').show();
    $('.active_content').hide();
}
function noticeShow() {
    $('.mask').show().find('.error_box_common').addClass('zoomIn');
}
function noticeHide() {
    $('.mask').hide();
}