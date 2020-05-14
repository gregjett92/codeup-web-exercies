$(document).ready (function() {
    "use strict";
    //HTML Variables
    var display = $("#display");
    var reset = $("#reset");
    var submit = $("#submit");
    var secret = $("#secret");
    var landing = $("#landing");
    var landing2 = $("#unlocked");
    var title = $("#titleUnlocked");
    var lock = $("#lockButton");
    var buttons = $("button");
    //Numeric variables
    var output = "";
    var outputArray = [];

    //Keylogger, outputting certain keys, adding to check string and virtual console

    $(document).keyup(function(event){
        var keycode = event.keyCode;


        switch (keycode) {
            case 38:
                output += "Up, ";
                break
            case 40:
                output += "Down, ";
                break;
            case 37:
                output += "Left, ";
                break;
            case 39:
                output += "Right, ";
                break;
            case 66:
                output += "B, ";
                break;
            case 65:
                output += "A, ";
                break;
            case 13:
                console.log(output);
                check();
                break;
            default:

        }
        display.html(output);
    });
    //Resets everything to original state: displays, style, etc
    reset.click(function() {
        output = "";
        display.html(output);
        secret.html('');
        landing.css("display", "block");
        landing2.css("display", "none");
    });
    ////Resets everything to original state, just like reset. Plan to merge with class button
    lock.click(function() {
        output = "";
        display.html(output);
        secret.html('');
        landing.css("display", "block");
        landing2.css("display", "none");
    });
    //Gives button slight hover styling
    buttons.hover(function() {
            $(this).css("border", "3px solid black");
        },
        function() {
            $(this).css("border", "2px solid blue");
        });
    //checks string for correct konami code
    var check = function() {
        console.log(outputArray);
        console.log(output);
        if (output == "Up, Up, Down, Down, Left, Right, Left, Right, B, A, ") {
            secret.html('<h1>You won!</h1>');
            title.html("MEME STASH")
            landing.css("height", "");
            landing.css("display", "none");
            landing2.css("display", "block");
        }
    }
    //Runs check on submit button click
    submit.click(check);

});