let button;
let slider;
let checkbox;
let colorPicker;
let sel;

let brushChoice;

let lineCol = 0;

let socket;

let lineSize;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    //img = createImg('https://icons.iconarchive.com/icons/designcontest/vintage/32/Eraser-icon.png');

    fill(255);
    rect(10, 250, 30, 30);

    //image(img, 10, 250, 30, 30);

    fill(0, 0, 0);
    textSize(10);
    text('Eraser', 10, 268); 

    colorPicker = createColorPicker('black');
    colorPicker.position(10, 260);

    slider = createSlider(0, 18, 2);
    slider.position(5, 315);
    slider.style('width', '60px');

    textAlign(CENTER);
    sel = createSelect();
    sel.position(10, 10);
    sel.option('line');
    sel.option('circle');
    sel.option('square');
    sel.selected('line');

    //textAlign(CENTER);
    textSize(15);
    fill(0);
    text('Size', 30, 220);
      
    cursor(CROSS);

    socket = io();
    socket.connect('http://127.0.0.1:5000');
    socket.on('connect', function(){
        socket.send('connected');
    });

    socket.on('update values', newDrawing);
    //socket.on('size value', newSize);

    //color buttons
    //noStroke();
    stroke(0);
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

//function newSize(size) {
  //  strokeWeight(size);
//}

function newDrawing(data) {
    noStroke();
    if (data.brush == 'line') {
        strokeWeight(data.size);
        stroke(data.col);
        line(data.x, data.y, data.pX, data.pY);
    } else if (data.brush == 'circle') {
        fill(data.col);
        ellipse(data.x, data.y, data.size, data.size);
    } else if (data.brush == 'square') {
        fill(data.col);
        rect(data.x, data.y, data.size, data.size);
    }
}

function draw() {
}

function mouseDragged() {
    lineSize = slider.value();
    //strokeWeight(lineSize);
    //socket.emit('size', lineSize);

    if (mouseIsPressed && mouseButton == LEFT && mouseX > 70) {
        console.log(mouseX + "," + mouseY + '//' + pmouseX + "," + pmouseY);

        brushChoice = sel.value();

        let data = {
            x: mouseX,
            y: mouseY,
            pX: pmouseX,
            pY: pmouseY,
            col: lineCol,
            size: lineSize,
            brush: brushChoice
        }

        socket.emit('appdata', data);

        noStroke();
        if (brushChoice == 'line') {
            strokeWeight(lineSize);
            stroke(lineCol);
            line(mouseX, mouseY, pmouseX, pmouseY);
        } else if (brushChoice == 'circle') {
            fill(lineCol);
            ellipse(mouseX, mouseY, lineSize, lineSize);
        } else if (brushChoice == 'square') {
            fill(lineCol);
            rect(mouseX, mouseY, lineSize, lineSize);
        }
    }
}

function mousePressed() {
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

    //Color picker
    if (mouseX > 0 && mouseX < 60 && mouseY > 160 && mouseY < 190) {
        lineCol = colorPicker.color();
        cursor(CROSS);
    }

    //Eraser
    if (mouseX > 0 && mouseX < 60 && mouseY > 250 && mouseY < 280) {
        lineCol = "white";
        cursor('https://icons.iconarchive.com/icons/pixture/stationary/16/Eraser-2-icon.png');
    }   
}