let c = document.querySelector('#canvas'),
      circle = c.getContext ('2d');

class Circle {
    constructor (x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }

    draw () {
        circle.fillStyle = this.fillColor;
        circle.arc (this.x,this.y,this.r,this.startAngle, this.endAngle);
        circle.fill ();
    }
}

const c1 = new Circle(50, 50, 20, 0, 2*Math.PI, '#FFC5D1');
const c2 = new Circle(100, 50, 10, 0, 2*Math.PI, 'blue');
c1.draw();
c2.draw();