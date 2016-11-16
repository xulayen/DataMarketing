//设置背景宽、高为设备宽、高
bgSet();
window.addEventListener("resize", bgSet, false);
function bgSet(){
    var h=$('html').height();
    if(h>400){
        $('.bg_2').height(h);
    }
    setTimeout(function(){
        $('.img_loading').hide();
        $('.bg_2').show();
    },200);
}
//电话号码为数字
function changeTel(){
    var val = $(".rf_tel").val().replace(/\D/,'');
    $(".rf_tel").val(val);
}
//验证码为数字
function changeCode(){
    var val = $(".rf_code").val().replace(/\D/,'');
    $(".rf_code").val(val);
}
//修改成功弹出层
function modifyS(){
    $('.mask').show();
}

var sexAll={
    'sexList':['男','女'],
    'provinceList':['河南省','山东省','山东省','山东省','山东省','山东省','山东省','山东省','山东省','山东省','山东省'],
    'cityList':['上海市','信阳市','信阳市','信阳市','信阳市','信阳市','信阳市','信阳市','信阳市','信阳市'],
    'jobList':['汽车维修技工','修理厂采购','修理厂','4S店']
};
//选择性别弹出层
function selShow(s,n){
    var arr=sexAll[s+'List'];
    var appendL='';
    arr.forEach(function(item,index){
        appendL+='<li>'+item+'</li>';
    });
    $('.logo_2').removeClass('blur');
    $('.select_box').addClass('select_'+s).append('<li class="select_head">'+n+'</li>'+appendL);
    $('.rf_box_blur,.reg_form').fadeOut(500,function(){
        setTimeout(function(){
            $('.blur_common').addClass('blur_sel_'+s).show();
            $('.select_box').show();
            if(s=='province'||s=='city'){  //logo删除模糊效果
                $('.logo_2').addClass('blur');
            }
        },220);
    });
    //选择选项
    $('.select_box li:not(:first-child)').click(function(){
        var iTargetArr=[];
        var iTarget='';
        var iTargetName=$(this).parent().get(0).className.split(' ');
        iTargetArr=iTargetName.filter(function(item){
            return item.match(/select_/gi)!==null;
        });
        iTarget=iTargetArr[1].slice(7);
        var val=$(this).text();
        $('.sel_'+iTarget).text(val);
        $('.blur_common').removeClass('blur_sel_'+iTarget).hide();
        $('.select_box').removeClass('select_'+iTarget).empty().hide();
        $('.rf_box_blur,.reg_form').show();

        $('.logo_2').addClass('blur');
    });
}
