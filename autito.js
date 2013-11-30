'uset strict';
function Autito(x, y) {
    this.x = (x === null) ? 0 : x;
    this.y = (y === null) ? 0 : y;
    this.width = 30;
    this.height = 10;
    this.speed = 0;
    this.accel = 0.5;
    this.breaks = 3;
    this.angle = 0;
    this.turning = 0.3;
    this.max_speed = 30;
    this.name = "Fittipaldi";
      
    this.move = function (PRESSING) {
        if (PRESSING[37]) {
            this.angle += -this.speed * this.turning;
        }
        if (PRESSING[38]) {
            if (this.speed < this.max_speed) {
                this.speed += this.accel; //up
            }
        } else {
            if (Math.abs(this.speed) > 0) {
                this.speed = Math.abs(this.speed) * 0.8;
            }
        }
        if (PRESSING[39]) {
            this.angle += this.speed * this.turning;
        }
        if (PRESSING[40]) {
            if (Math.abs(this.speed) >= this.breaks) {
                this.speed = Math.abs(this.speed) - this.breaks;
            } else {
                this.speed -= this.speed;
            }
        }
      
        this.x += Math.cos(this.angle * Math.PI / 180) * this.speed;
        this.y += Math.sin(this.angle * Math.PI / 180) * this.speed;
        return this.speed;
    };
   
    this.paint = function (ctx) {
        ctx.save();
        ctx.fillStyle = "#0f0";
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.fillRect(-0.5 * this.width, -0.5 * this.height, this.width, this.height);
   
        this.drawWheel(-0.5 * this.height + 3, -0.5 * this.width + 9.5, ctx);
        this.drawWheel(-0.5 * this.height + 19.5, -0.5 * this.width + 9.5, ctx);
        this.drawWheel(-0.5 * this.height + 3, -0.5 * this.width + 20.6, ctx);
        this.drawWheel(-0.5 * this.height + 19.5, -0.5 * this.width + 20.6, ctx);
      
        ctx.restore();
    };
    
    this.drawWheel = function (x, y, ctx) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.bezierCurveTo(x, y + 1.3, x - 2.9, y + 2.3, x - 6.4, y + 2.3);
        ctx.bezierCurveTo(x - 9.9, y + 2.3, x - 12.7, y + 1.3, x - 12.7, y);
        ctx.bezierCurveTo(x - 12.7, y - 1.2, x - 9.9, y - 2.3, x - 6.4, y - 2.3);
        ctx.bezierCurveTo(x - 2.9, y - 2.3, x, y - 1.2, x, y);
        ctx.closePath();
        ctx.fillStyle = "black";
        ctx.fill();
    };
}