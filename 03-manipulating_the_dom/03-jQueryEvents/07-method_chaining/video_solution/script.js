$(document).ready(function() {
    // Create the slideToggle effects each of the paragraphs and
    // buttons


   $('.card .bottom_button').on("click", function () {
      // $(this).prev('p.card_para').toggle(350);
        $(this).prev('p.card_para').slideToggle(750);
   });

    $('.bottom_button').on("mouseenter", function () {
        $(this).removeClass("makeRed").addClass("makeBorder");
    });
    $('.bottom_button').on("mouseleave", function () {
        $(this).addClass("makeRed").removeClass("makeBorder");
    });

    $('li').on("click", function(){
        $("div[class^='card stream']").removeClass("makeRed");
        var selector = "div .card."+$(this).attr('id').split('_')[0];
        $(selector).addClass("makeRed");
    });

    $('.card').on('click', function () {
        $(this).toggleClass("pinkBack");
    });

    $('#select').on('click', function () {
       $('.card:not(".pinkBack")').toggle('slow');
    });

    $('#all').on('click', function () {
       $('.card:not(".pinkBack")').toggle('slow');
    });

}); 