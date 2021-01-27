function setup() {
    createCanvas(windowWidth, windowWidth);
    noFill();
    noStroke();
    frameRate(3);

}

function draw() {
    background(255);

    var windowPane = 10; // padding around box array
    var num = 5; //number of boxes in array
    var shift = random(-5, 5); //degree of shift in quad
    var space = 50; //space between squares

    translate(windowPane + space / 2, windowPane + space / 2); //(x,y) start point offset for padding

    var sideLen = (windowWidth - 2 * windowPane) / num //length of individual side of a box

    for (var x = 0; x < num * sideLen; x = x + sideLen) {
        for (var y = 0; y < num * sideLen; y = y + sideLen) {

            fill(0, random(170, 255), random(170, 255));

            //a random shift is added to each vertex
            // add length of individual side of a box (num) and 
            //subtract space between squares (space) to keep spacing true

            quad(random(-shift, shift) + x,
                random(-shift, shift) + y,

                random(-shift, shift) + x + sideLen - space,
                random(-shift, shift) + y,

                random(-shift, shift) + x + sideLen - space,
                random(-shift, shift) + y + sideLen - space,

                random(-shift, shift) + x,
                random(-shift, shift) + y + sideLen - space);
        }
    }

}
