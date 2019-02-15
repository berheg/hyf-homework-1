let canvas = document.querySelector('#canvas'),
    circle = canvas.getContext ('2d');
    circle.canvas.width = window.innerWidth;
    circle.canvas.height = window.innerHeight;

    //circle template
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
        circle.beginPath();
        circle.fillStyle = this.fillColor;
        circle.arc (this.x,this.y,this.r,this.startAngle, this.endAngle);
        circle.fill ();
        
    }
}

//generating of random color
const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i=0; i<6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

//drawing circles
setInterval (() => {
    x = Math.floor (Math.random() * 2500);
    y = Math.floor (Math.random() * 1240);
    r = Math.floor (Math.random() * 30);
    fillColor = getRandomColor ();
    let c = new Circle (x, y, r, 0, Math.floor(2*Math.PI), fillColor);
    c.draw();
}, 50)

//creating circles depending on mouse location

let mouseX = 0;
let mouseY = 0;

// track mouse position
let mouseLocation = () => {
    let e = window.event;
    mouseX = e.clientX;
    mouseY = e.clientY;
}

canvas.addEventListener ('mousemove', () => {
    mouseLocation ();
    r = Math.floor (Math.random() * 30);
    fillColor = getRandomColor ();
    let c = new Circle (mouseX, mouseY, r, 0, Math.floor(2*Math.PI), fillColor);
    c.draw();
})

