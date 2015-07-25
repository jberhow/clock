/**
 * Created by Jeff on 7/25/2015.
 */

window.onload = function () {
    var canvas = document.getElementById("myCanvas");
    var c = canvas.getContext("2d");

    c.beginPath();
    c.moveTo(50, 50);
    c.lineTo(100, 100);
    c.stroke();
};