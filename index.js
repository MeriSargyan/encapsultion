
const canvas = document.querySelector("canvas")
const context  = canvas.getContext("2d")

function Hero(x, y, width, height){

    
    const heroImg = new Image()
    heroImg.src = "hero.png"

    let xDelta  = 0;
    let yDelta  = 0;


    this.update = () =>{
        x += xDelta;
        y += yDelta;

        x = Math.max(0, Math.min(x, canvas.width - width))
        y = Math.max(0, Math.min(y, canvas.width - width))
    };

    this.render = () =>{
        context.drawImage(heroImg, x, y, width, height);
    }

    this.goRight = () =>{
        xDelta = 1
    }
    this.goLeft = () =>{
        xDelta = -1
    }
    this.goUp = () =>{
        yDelta = -1
    }
    this.goDown = () =>{
        yDelta = 1
    }
    this.stopHorizontal = () =>{
        xDelta = 0
    }
    this.stopVertical = () =>{
        yDelta = 0
    }

}



let data = {
    hero: new Hero(20, 20, 80, 80)
}

function update(){
    data.hero.update();
}

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height );
    data.hero.render()
}



function loop (){
    requestAnimationFrame(loop);
    update();
    render();
}

loop()


document.addEventListener("keydown", (evt) =>{
    if(evt.code === "ArrowRight"){
        data.hero.goRight();
    }else if(evt.code === "ArrowLeft"){
        data.hero.goLeft();
    }
    else if(evt.code === "ArrowUp"){
        data.hero.goUp();
    }
    else if(evt.code === "ArrowDown"){
        data.hero.goDown();
    }
})
document.addEventListener("keyup", (evt) => {
    data.hero.stopHorizontal();
    data.hero.stopVertical();
})