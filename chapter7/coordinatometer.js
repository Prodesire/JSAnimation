function Coordinatometer (width, height, num) {
    this.width = width;
    this.centerY = height / 2;
    this.start = 0;
    this.interval = width / num;
    this.num = num;
    this.color = utils.parseColor("#000000");
}

Coordinatometer.prototype.draw = function (context, origin) {
    this.start = origin % this.interval;
    var startNum = parseInt(-origin / this.interval);

    context.lineWidth = 1;
    context.fillStyle = this.color;
    context.beginPath();
    context.moveTo(0, this.centerY);
    context.lineTo(this.width, this.centerY);
    for (var i = 0; i <= this.num; i++) {
        context.moveTo(this.start + this.interval * i, this.centerY - 10);
        context.lineTo(this.start + this.interval * i, this.centerY);
        context.fillText(startNum + i, this.start + this.interval * i, this.centerY + 10);
    }
    context.closePath();

    context.fill();
    context.stroke();
};
