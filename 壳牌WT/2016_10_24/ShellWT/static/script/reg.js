$(function () {
    var WH = document.getElementsByTagName('html')[0].clientHeight;
    $('body').height(WH);
    var iIndex=0;
    var thisPlace;                           //文本框的placeHolder
    $('.form_reg input').focus(function () {    //文本框获取焦点时上移位置
        thisPlace=$(this).attr('placeholder');
        $(this).attr('placeholder','');
        iIndex=$(this).index()/2+1;
        if(iIndex!=4){
            $(this).next()[0].className='border_rd';
        }
        $(this)[0].className='input_'+iIndex;
    }).blur(function () {                     //文本框失去焦点时改变样式
        $(this).attr('placeholder',thisPlace);
        iIndex=$(this).index()/2+1;
        if(iIndex!=4){
            $(this).next()[0].className='border_yl';
        }
        $(this)[0].className='border_wh input'+iIndex;
    });
});