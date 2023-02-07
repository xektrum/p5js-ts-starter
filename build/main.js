import p5 from './p5import.js';
let sketch = (p) => {
    p.setup = () => {
        let canvas = p.createCanvas(400, 400);
        canvas.parent("app");
        p.background(0);
    };
    p.draw = () => {
        p.ellipse(10, 10, 10, 20);
        p.stroke(100, 100, 100);
        p.fill(255);
    };
};
new p5(sketch);
//# sourceMappingURL=main.js.map