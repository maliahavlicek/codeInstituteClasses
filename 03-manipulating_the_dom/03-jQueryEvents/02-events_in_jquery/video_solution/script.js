$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").fadeTo(1000,0.5);
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").show();
        $(".stream2").show('slow');
        $(".stream3").show('fast');
        $(".stream2").show();
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
   $('.card .bottom_button').on("click", function () {
      // $(this).prev('p.card_para').toggle(350);
        $(this).prev('p.card_para').slideToggle(750);
   });
   $('.card .bottom_button').on("mouseenter", function () {
     $(this).fadeTo(1000, 0.5);
   });
   $('.card .bottom_button').on("mouseleave", function () {
     $(this).fadeTo(1000, 1);
   });
/*   $('p').on("click", function () {
       $('p').css('color','red');
   });
   $('h2').on("mouseenter", function () {
       $('h2').css('background-color','lightblue');
       $(this).css('font-size','5rem');
   });
   $('.bottom_button').on("mouseenter", function () {
       $('html').css('background-color','black');
   });
   $('.bottom_button').on("mouseleave", function () {
       $('html').css('background-color','gray');
   });*/
}); 