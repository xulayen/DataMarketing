$("body").height($(window).height());
var loader = new createjs.LoadQueue(false);
var progress = $(".loading .pro span");
loader.loadManifest([
    "img_r1.png",
    "img_r2.png",
    "img_r3.png",
    "img_r4.png",
    "img_r5.png",
    "img_r6.png",
    "logo.png",
    "QRcode.png",
    "scan.png",
    "back.png",
    "home_gift.png",
    "f_car.png",
    "f_envel.png",
    "bg_login.png",
    "f_tel.png",
    "home_h.png",
    "home_blur.png",
    "bg_scan.png",
    "bg_start.png",
    "loading.gif",
    "result/r_1.png",
    "result/r_2.png",
    "result/r_3.png",
    "result/r_4.png",
    "result/r_5.png",
    "result/r_6.png",
    "result/r_7.png",
    "result/r_8.png",
    "result/r_9.png",
    "result/r_10.png",
    "result/r_11.png",
    "result/r_12.png",
    "result/r_13.png",
    "result/r_14.png",
    "result/r_15.png",
    "result/r_16.png",
    "result/r_17.png"
], true, "../../static/images/");

loader.addEventListener("progress", function(e){
    var proNum = Math.ceil(e.progress * 100);
    progress.html(  proNum + "%");
});
var startTimer=null;
loader.addEventListener("complete", function(){
    $(".loading").hide();
    $(".home_start").show();
    $(".img_start").addClass("home_scale");
    startTimer=setTimeout(function(){
        $(".home_start").fadeOut("1000",function(){
            $(".home_contain").fadeIn("500");
        });
    },3000);
    $(".home_start").click(function(){
        clearTimeout(startTimer);
        $(this).fadeOut("600",function(){
            $(".home_contain").fadeIn("600");
        });
    });
});



