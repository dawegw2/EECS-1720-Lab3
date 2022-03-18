let button;
let slider;
let checkbox;
let colorPicker;

let lineCol;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);

    lineCol = color(0, 0, 0);

    colorPicker = createColorPicker('#ed225d');
    colorPicker.position(10, 350);

    slider = createSlider(0, 18, 1);
    slider.position(5, 300);
    slider.style('width', '60px');

    checkbox = createCheckbox('Eraser', false);
    checkbox.position(5, 450);
    checkbox.changed(eraserCheckedEvent);

    textAlign(CENTER);
    textSize(15);
    text('Size', 30, 200);   
}

function draw() {
    let lineSize = slider.value();
    strokeWeight(lineSize);

    lineCol = colorPicker.color();
    
    if (mouseIsPressed && mouseButton == LEFT) {
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
}

function changeStrokeSize() {
    lineSize = this.value();
}

function eraserCheckedEvent() {

    let prevCol = lineCol;

    if (checkbox.checked()) {
        lineCol = color(255, 255, 255);
    } else {
        lineCol = color(0, 0, 0);
    }

}

function mousePressed() {
    if (mouseX > 0 && mouseX < 30 && mouseY > 0 && mouseY < 30) {
        lineCol = "red";
    }
    if (mouseX > 30 && mouseX < 60 && mouseY > 0 && mouseY < 30) {
        lineCol = "orange";
    }
    if (mouseX > 0 && mouseX < 30 && mouseY > 30 && mouseY < 60) {
        lineCol = "yellow";
    }
    if (mouseX > 30 && mouseX < 60 && mouseY > 30 && mouseY < 60) {
        lineCol = "green";
    }
    if (mouseX > 0 && mouseX < 30 && mouseY > 60 && mouseY < 90) {
        lineCol = "blue";
    }
    if (mouseX > 30 && mouseX < 60 && mouseY > 60 && mouseY < 90) {
        lineCol = "purple";
    }
    if (mouseX > 0 && mouseX < 30 && mouseY > 90 && mouseY < 120) {
        lineCol = "brown";
    }
    if (mouseX > 30 && mouseX < 60 && mouseY > 90 && mouseY < 120) {
        lineCol = "grey";
    }
    if (mouseX > 0 && mouseX < 30 && mouseY > 120 && mouseY < 150) {
        lineCol = "black";
    }
    if (mouseX > 30 && mouseX < 60 && mouseY > 120 && mouseY < 150) {
        lineCol = "white";
    }
     
}