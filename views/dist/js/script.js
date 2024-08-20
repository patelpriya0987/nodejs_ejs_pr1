$(document).ready(function(){
    $(".hamburger_menu").click(function(){
    
        $('.menu').slideToggle();
        
    });
})
$(window).on('load',function(){

    $('.loader-warper').delay(1000).fadeOut("fast");
})

$(window).scroll(function(){

    if ($(this).scrollTop() > 600){

        $('.header').addClass("fixed_header");

    }else{
        
        $('.header').removeClass("fixed_header");

    }


})
