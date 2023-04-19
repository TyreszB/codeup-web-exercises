"use strict";

$(function () {
    $('h1').on({
        click: function () {
            $(this).css('background-color', 'yellow')
        }
    });

    $('p').on({
        click: function () {
            $(this).css('font-size', '18px')
        }
    });

    $('li').hover(
        function (){
            $(this).css('color', 'red')
        },
        function (){
            $(this).css('color', 'black')
        }
        );
});