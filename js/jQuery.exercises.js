"use strict"

$(document).ready(function(){
    // id selctors
    // var contents = $('#book-welcome').html();
    // alert(contents);
// ----------- classes -----------
//     $('.codeup').css('border', '1px solid red');

});

$('h1').click(function() {
    $(this).css('background-color', "#ef0");
});

//double clickedparagraphs have font size of 18px;
$("p").dblclick(function() {
    $(this).css("font-size", "18px");
});
//set li text color to red when hovering, and black when leaving

$("li").hover((function ()  {

})