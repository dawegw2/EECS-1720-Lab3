let button;
let slider;
let checkbox;
let colorPicker;
let lineCol;

let colSys = false;

let socket;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    img = createImg('https://icons.iconarchive.com/icons/icons8/windows-8/64/Editing-Eraser-icon.png');

    fill(127,88,167);
    rect(10, 250, 30, 30);
    image(img, 10, 250, 30, 30);


    lineCol = color(0, 0, 0);

    colorPicker = createColorPicker('black');
    colorPicker.position(10, 260);

    slider = createSlider(0, 18, 2);
    slider.position(5, 315);
    slider.style('width', '60px');

    checkbox = createCheckbox('Eraser', false);
    checkbox.position(5, 450);
    checkbox.changed(eraserCheckedEvent);

    textAlign(CENTER);
    textSize(15);
    text('Size', 30, 220);
    //text('Eraser', 30, 300);   
    
    socket = io.connect('http://1127.0.0.1:5000'); //connect to the server

}

function draw() {
    let lineSize = slider.value();
    strokeWeight(lineSize);
    
    if (mouseIsPressed && mouseButton == LEFT && mouseX > 70) {
        stroke(lineCol);
        line(mouseX, mouseY, pmouseX, pmouseY);
    }

    //color buttons
    noStroke();
    fill("red");
    rect(0, 0, 30, 30);

    fill("orange");
    rect(30, 0, 30, 30);

    fill("yellow");
    rect(0, 30, 30, 30);

    fill("green");
    rect(30, 30, 30, 30);

    fill("blue");
    rect(0, 60, 30, 30);

    fill("purple");
    rect(30, 60, 30, 30);

    fill("brown");
    rect(0, 90, 30, 30);

    fill("grey");
    rect(30, 90, 30, 30);

    fill("black");
    rect(0, 120, 30, 30);

    fill("white");
    rect(30, 120, 30, 30);

    //eraser button
 
    
}

function changeStrokeSize() {
    lineSize = this.value();
}

function eraserCheckedEvent() {

    if (checkbox.checked()) {
        lineCol = color(255, 255, 255);
    } else {
        lineCol = color(0, 0, 0);
    }

}

function mousePressed() {
    
    if (mouseX > 0 && mouseX < 60 && mouseY > 160 && mouseY < 190) {
        lineCol = colorPicker.color();
        cursor(CROSS);
    }
    
    if (mouseX > 0 && mouseX < 30 && mouseY > 0 && mouseY < 30) {
        lineCol = "red";
        cursor(CROSS);
    }
    if (mouseX > 30 && mouseX < 60 && mouseY > 0 && mouseY < 30) {
        lineCol = "orange";
        cursor(CROSS);
    }
    if (mouseX > 0 && mouseX < 30 && mouseY > 30 && mouseY < 60) {
        lineCol = "yellow";
        cursor(CROSS);
    }
    if (mouseX > 30 && mouseX < 60 && mouseY > 30 && mouseY < 60) {
        lineCol = "green";
        cursor(CROSS);
    }
    if (mouseX > 0 && mouseX < 30 && mouseY > 60 && mouseY < 90) {
        lineCol = "blue";
        cursor(CROSS);
    }
    if (mouseX > 30 && mouseX < 60 && mouseY > 60 && mouseY < 90) {
        lineCol = "purple";
        cursor(CROSS);
    }
    if (mouseX > 0 && mouseX < 30 && mouseY > 90 && mouseY < 120) {
        lineCol = "brown";
        cursor(CROSS);
    }
    if (mouseX > 30 && mouseX < 60 && mouseY > 90 && mouseY < 120) {
        lineCol = "grey";
        cursor(CROSS);
    }
    if (mouseX > 0 && mouseX < 30 && mouseY > 120 && mouseY < 150) {
        lineCol = "black";
        cursor(CROSS);
    }
    if (mouseX > 30 && mouseX < 60 && mouseY > 120 && mouseY < 150) {
        lineCol = "white";
        cursor(CROSS);
    }

    if (mouseX > 0 && mouseX < 60 && mouseY > 250 && mouseY < 280) {
        lineCol = "white";
        cursor('https://icons.iconarchive.com/icons/pixture/stationary/16/Eraser-2-icon.png');
    }   
}