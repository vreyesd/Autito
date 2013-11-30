'uset strict';
function Autito(x, y) {
    this.x = (x === null) ? 0 : x;
    this.y = (y === null) ? 0 : y;
    this.width = 42;
    this.height = 15;
    this.speed = 0;
    this.accel = 0.5;
    this.breaks = 3;
    this.angle = 0;
    this.turning = 0.3;
    this.max_speed = 30;
    this.name = "Fittipaldi";
    this.colorFrontwing = "lightgreen";
    this.colorRearwing = "blue";
    this.colorChasis = "yellow";
    this.colorPilot = "red";
      
    this.move = function (PRESSING) {
        if (PRESSING[37]) {
            this.angle += -this.speed * this.turning;
        }
        if (PRESSING[38]) {
            if (this.speed < this.max_speed) {
                this.speed += this.accel;
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
        
		this.drawFrontwing(0.5 * this.width - this.width * 3 / 28, -0.5 * this.height + this.height * 3 / 20, ctx);
        this.drawchasis(-0.5 * this.width + this.width / 14, -0.5 * this.height + this.height * 3 / 20, ctx);
        this.drawRearwing(-0.5 * this.width, -this.height / 4, ctx);
                
        this.drawWheel(-0.5 * this.width + this.width / 14, -0.5 * this.height, ctx);
        this.drawWheel(-0.5 * this.width + this.width / 14, -0.5 * this.height + this.height * 4 / 5, ctx);
        this.drawWheel(-0.5 * this.width + this.width * 81 / 112, -0.5 * this.height, ctx);
        this.drawWheel(-0.5 * this.width + this.width * 81 / 112, -0.5 * this.height + this.height * 4 / 5, ctx);
        
        this.drawPilot(0, 0, ctx);
                
        ctx.restore();
    };
    
    this.drawFrontwing = function (x, y, ctx) {
		ctx.fillSytle = this.colorFrontwing;
        ctx.fillRect(x, y, this.width * 5 / 56, this.height * 7 / 10);
    };
    
    this.drawRearwing = function (x, y, ctx) {
        ctx.fillStyle = this.colorRearwing;
        ctx.fillRect(x, y, this.width * 5 / 56, this.height / 2);
    };
    
    this.drawWheel = function (x, y, ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(x, y, this.width / 8, this.height / 5);
    };
    
    this.drawchasis = function (x, y, ctx) {
        ctx.fillStyle = this.colorChasis;
        ctx.beginPath();
        ctx.moveTo(x, y);
                
        ctx.lineTo(x + this.width * 15 / 28, y);
        ctx.lineTo(x + this.width * 15 / 28, y + this.height / 4);
        ctx.lineTo(x + this.width * 13 / 14, y + this.height / 4);
        ctx.lineTo(x + this.width * 13 / 14, y + this.height * 9 / 20);
        ctx.lineTo(x + this.width * 15 / 28, y + this.height * 9 / 20);
        ctx.lineTo(x + this.width * 15 / 28, y + this.height * 7 / 10);
        ctx.lineTo(x, y + this.height * 7 / 10);
        
        ctx.fill();
    };
    
    this.drawPilot = function (x, y, ctx) {
        ctx.fillStyle = this.colorPilot;
        ctx.beginPath();
        ctx.arc(x, y, this.height * 3 / 40, 0, 2 * Math.PI);
        ctx.fill();
    };
}