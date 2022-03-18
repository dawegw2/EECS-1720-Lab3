let button;
let lineSize = 1; 
let slider;
let checkbox;
let lineCol;



function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);

    lineCol = color(0, 0, 0);

    slider = createSlider(0, 18, 1);
    slider.position(10, 10);
    slider.style('width', '100px');

    checkbox = createCheckbox('label', false);
    checkbox.position(100, 10);
    checkbox.changed(eraserCheckedEvent);

    textAlign(CENTER);
}

function draw() {

    let val = slider.value();
    strokeWeight(val);
    
    if (mouseIsPressed && mouseButton == LEFT) {
      stroke(lineCol);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }

}

function changeStrokeSize() {
    lineSize = this.value();
}

function eraserCheckedEvent() {

    if (checkbox.checked()) {
        lineCol = color(255, 255, 255);
    } else {
        lineCol = color(0, 255, 0);
    }

}

