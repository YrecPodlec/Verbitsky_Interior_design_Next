$(document).ready(function (){
    $('.bi-telephone').click(function (event){
        $('.bi-telephone, .phone_call').toggleClass('active');
    });
});
$(document).ready(function (){
    $('.bi-envelope').click(function (event){
        $('.bi-envelope, .mail_call').toggleClass('active');
    });
});