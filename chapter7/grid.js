function Grid (width, height, num) {
    this.width = width;
    this.height = height;
    this.start = 0;
    this.startY = 0;
    this.interval = width / num;
    this.intervalY = height / num;
    this.num = num;
    this.color = utils.parseColor("#000000");
}

Grid.prototype.draw = function (context, originX, originY) {
    this.start = originX % this.interval;
    this.startY = originY % this.intervalY;

    context.lineWidth = 1;
    context.fillStyle = this.color;
    context.beginPath();
    for (var i = 0; i <= this.num; i++) {
        context.moveTo(this.start + this.interval * i, 0);
        context.lineTo(this.start + this.interval * i, this.height);
        context.moveTo(0, this.startY + this.intervalY * i);
        context.lineTo(this.width, this.startY + this.intervalY * i);
    }

    context.closePath();
    context.fill();
    context.stroke();
};
