function Grid (width, height, num) {
    this.width = width;
    this.height = height;
    this.startX = 0;
    this.startY = 0;
    this.intervalX = width / num;
    this.intervalY = height / num;
    this.num = num;
    this.color = utils.parseColor("#000000");
}

Grid.prototype.draw = function (context, originX, originY) {
    this.startX = originX % this.intervalX;
    this.startY = originY % this.intervalY;

    context.lineWidth = 1;
    context.fillStyle = this.color;
    context.beginPath();
    for (var i = 0; i <= this.num; i++) {
        context.moveTo(this.startX + this.intervalX * i, 0);
        context.lineTo(this.startX + this.intervalX * i, this.height);
        context.moveTo(0, this.startY + this.intervalY * i);
        context.lineTo(this.width, this.startY + this.intervalY * i);
    }

    context.closePath();
    context.fill();
    context.stroke();
};
