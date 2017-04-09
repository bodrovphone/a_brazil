
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
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).find('ul').slideToggle();
    });

    $("#back-to-top").click(function (e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: 0}, 1000);
    });
});