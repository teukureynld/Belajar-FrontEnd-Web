
// Second canvas
var second_canvas = document.getElementById("second_canvas");

//membuat ool yang ingin dipakai di metod 
var second_ctx = second_canvas.getContext("2d");

second_ctx.moveTo(0,0);
second_ctx.lineTo(200,100);

// mengisi ketebalan stroke
second_ctx.stroke();