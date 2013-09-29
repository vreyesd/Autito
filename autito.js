function init()
{
	canvas = document.getElementById("canvas");

	if (canvas.getContext)
	{
		ctx = canvas.getContext("2d");
		ctx.fillStyle = "black";
		ctx.rect(0, 0, 300, 150);
		ctx.fill();

		makeAutito();
	}
}

function makeAutito()
{

	ctx.beginPath();
	ctx.fillStyle = "#0f0";
	ctx.fillRect(9.3,12.9,30,10);

	drawWheel(ctx, 22.3, 12);
	drawWheel(ctx, 38.8, 12);
	drawWheel(ctx, 22.3, 23.5);
	drawWheel(ctx, 38.8, 23.5);
}

function drawWheel(ctx, x, y)
{
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.bezierCurveTo(x,y+1.3, x-2.9, y+2.3, x-6.4, y+2.3);
	ctx.bezierCurveTo(x-9.9, y+2.3, x-12.7, y+1.3, x-12.7, y);
	ctx.bezierCurveTo(x-12.7, y-1.2, x-9.9, y-2.3, x-6.4, y-2.3);
	ctx.bezierCurveTo(x-2.9, y-2.3, x, y-1.2, x, y);
	ctx.closePath();
	ctx.fillStyle="red";
	ctx.fill();
}
