$(".bg_1").height($(window).height());
var loader = new createjs.LoadQueue(false);
var progress = $(".loading .pro span");
loader.loadManifest([
    "face_1.png",
    "face_2.png",
    "face_3.png",
    "face_4.png",
    "face_5.png",
    "face_6.png",
    "bg_1.png",
    "bg_2.png",
    "bg_3.png",
    "logo_text.png",
    "oil_drum.png",
    "bg_result.png",
    "loading.gif",
    "QRcode.png",
    "result.png",
    "scan.png",
    "store.png",
    "store_.png",
    "tel.png",
    "tel_.png",
    "user.png",
    "user_.png",
    "verify.png",
    "verify_.png"
], true, "../../static/images/");

loader.addEventListener("progress", function(e){
    var proNum = Math.ceil(e.progress * 100);
    progress.html(  proNum + "%");
});
loader.addEventListener("complete", function(){
    $(".loading").hide();
    $(".bg_1").show();
});