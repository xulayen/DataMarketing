app.controller('homeCtrl', ['$scope', 'instance', 'windowService', '$location', 'httpService', '$http', function ($scope, instance, windowService, $location, httpService, $http) {
    var home={
    };
    //home.btn='立即参与';
    //home.isPopShow=false;
    //home.popShow=function(){
    //  if(!home.isPopShow){
    //      home.isPopShow=true;
    //      home.btn='关闭';
    //      $('.active_join')[0].style.fontSize='1rem';
    //  }
    //};
    //home.btnFn=function(){
    //  if(home.btn=='关闭'){
    //      home.isPopShow=false;
    //      home.btn='立即参与';
    //      $('.active_join')[0].style.fontSize='1.3rem';
    //  }else{
    //      location.href='register.html';
    //  }
    //};
    $('.active_rule').click(function(){
        $('.active_content,.active_content_blur').show();
        $('.active_join').text('关闭').addClass('btn_close');
        $('.oil_drum,.logo_text').addClass('bg_blur');
    });
    $('.active_join').click(function(){
        if($(this).hasClass('btn_close')){
            $('.active_content,.active_content_blur').hide();
            $(this).text('立即参与').removeClass('btn_close');
            $('.oil_drum,.logo_text').removeClass('bg_blur');
        }else{
            //location.href='register.html';
        }
    });
    $scope.home = home;
} ]);