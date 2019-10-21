$(document).ready(function(){
 // put your code here

    $('.container .container').on('click', function () {
        $(this).siblings().css('opacity',.1);
        var bgColor = $(this).children('.theButton').css('background-color');
        $(this).css('opacity', 1)
        $('.superButton').css('background-color',bgColor);
    });

    $('.superButton').on('click', function () {
        $('.container .container').css('opacity', 1);
    });



});