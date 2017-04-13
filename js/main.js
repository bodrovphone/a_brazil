
$(document).ready(function(){

    $('.parent').hover(
        function(){
            $(this).addClass('line');
        },
        function(){
            $(this).removeClass('line');
        }
    );

    $('.parent').on('click', function(e){
        $(this).toggleClass('active');
        $(this).find('ul').slideToggle();
    });

    $("#back-to-top").click(function (e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: 0}, 1000);
    });
    
    $('.custom-cse-toggle img').on('click', function(e){
        e.preventDefault();
        $('.custom-cse').toggleClass('cse-display');
        if($('.cse-display').size() > 0) $(this).attr('src', 'img/cancel_search.svg');
        else $(this).attr('src', 'img/search.svg'); 
    });
});