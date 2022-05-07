var canvas = document.getElementById("mycanvas");
var draw = canvas.getContext("2d");
var pencolor = "crimson";


function drawCircle() {
    draw.beginPath();
    draw.strokeStyle = pencolor;
    draw.lineWidth = 3;
    draw.arc(mouseX, mouseY, 40, 0, 360, );
    draw.stroke();
}


canvas.addEventListener("mousedown", usermousedown);

function usermousedown(clickdetails) {
    mouseX = clickdetails.clientX - canvas.offsetLeft;
    mouseY = clickdetails.clientY - canvas.offsetTop;
    drawCircle(mouseX, mouseY);
}