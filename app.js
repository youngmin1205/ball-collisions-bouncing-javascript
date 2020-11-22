import {
    Ball
} from './ball.js';

class App{
    constructor() {
        //create canvas as script
        this.canvas = document.createElement('canvas');
        //bring context
        this.ctx = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);

        /*resize event - bring screens ize and then define animation
        it is important to know size of animation you are making
        it is better than fix the screen size since browser size is not fixed*/
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 15);

        window.requestAnimationFrame(this.animate.bind(this));
    }
    //bring screen size function
    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);
    }

    //run animation function
    animate(t) {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight);
    }
}

window,onload = () => {
    new App();
}