$(function(){
    $(window).load(function(){
        $('#preloader').fadeOut(600)
    })

    $(window).scroll(function(){
        var scrollposition=$(window).scrollTop()

        if(scrollposition > 466){
            $('.nav').addClass("fixed")
        }
        else{
            $('.nav').css('trasition','0.3s linear').removeClass("fixed")

        }
    })
})