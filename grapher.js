/**
 * Created by Jeff on 7/25/2015.
 */

window.onload = function () {
    var canvas = document.getElementById("myCanvas");
    var c = canvas.getContext("2d");
    var time = new Date();
    var second = time.getSeconds(),
        minute = time.getMinutes(),
        hour = time.getHours();

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
        c.lineTo(90*Math.cos(second*Math.PI/30 - Math.PI/2), 90*Math.sin(second*Math.PI/30 - Math.PI/2));
        c.strokeStyle = "red";
        c.lineWidth = 1;
        c.stroke();

        second++;
        if (second === 59) {
            second = -1;
        }
    }

    function minutes() {

        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(100*Math.cos(minute*Math.PI/30 - Math.PI/2), 100*Math.sin(minute*Math.PI/30 - Math.PI/2));
        c.strokeStyle = "black";
        c.lineWidth = 3;
        c.stroke();

        if (second === 0) {
            minute++;
        }
        if (minute === 59) {
            minute = -1;
        }
    }

    function hours() {

        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(70*Math.cos(hour*Math.PI/6 - Math.PI/2), 70*Math.sin(hour*Math.PI/6 - Math.PI/2));
        c.strokeStyle = "black";
        c.lineWidth = 5;
        c.stroke();

        if (second === 0 && minute === 0) {
            hour++;
        }
    }

    function update() {
        c.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
        drawCircle();
        seconds();
        minutes();
        hours();
        console.log(hour + ":" + minute + ":" + second);
    }

    window.setInterval(update, 1000);
};
