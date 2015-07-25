/**
 * Created by Jeff on 7/25/2015.
 */

window.onload = function () {
    var canvas = document.getElementById("myCanvas");
    var c = canvas.getContext("2d");
    var i = 0, j = 0, k = 0;

    c.translate(canvas.width / 2, canvas.height / 2);

    function drawCircle() {
        c.beginPath();
        c.arc(0, 0, 110, 0, 2 * Math.PI);
        c.strokeStyle = "black";
        c.lineWidth = 1;
        c.stroke();
    }

    function seconds() {

        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(90*Math.cos(i*Math.PI/30), 90*Math.sin(i*Math.PI/30));
        c.strokeStyle = "red";
        c.lineWidth = 1;
        c.stroke();

        i++;
    }

    function minutes() {

        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(100*Math.cos(j*Math.PI/30), 100*Math.sin(j*Math.PI/30));
        c.strokeStyle = "black";
        c.lineWidth = 3;
        c.stroke();

        if (i % 61 === 0 && i > 60) {
            j++;
        }
    }

    function hours() {

        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(70*Math.cos(k*Math.PI/30), 70*Math.sin(k*Math.PI/30));
        c.strokeStyle = "black";
        c.lineWidth = 5;
        c.stroke();

        if (j % 61 === 0 && j > 60) {
            k++;
        }
    }

    function update() {
        c.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
        drawCircle();
        seconds();
        minutes();
        hours();
    }

    window.setInterval(update, 100);
};
