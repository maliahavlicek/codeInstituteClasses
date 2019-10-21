$(document).ready(function() {
    $('tr:odd').css('background-color','salmon');
    $('tr:even').css('background-color','pink');
    $('th').click(function(){
        $('td').removeClass('highlight').addClass('white');
	    $(this).siblings().addClass('highlight').removeClass('white');
   });

});
