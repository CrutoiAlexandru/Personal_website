// Get the root element
var r = document.querySelector(':root');

var container = document.querySelector(".spinner");

var active = false;
var currentX;
var initialX;
var xOffset = 0;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {
    if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
    } else {
        initialX = e.clientX - xOffset;
    }

    if (e.target === container) {
        active = true;
    }
}

function dragEnd(e) {
    initialX = currentX;

    active = false;
}

function drag(e) {
    if (active) {

        e.preventDefault();

        if (e.type === "touchmove") {
            currentX = e.touches[0].clientX - initialX;
        } else {
            currentX = e.clientX - initialX;
        }

        xOffset = currentX;

        // set var angle
        r.style.setProperty('--mouse-add-angle', currentX / 5 + 'deg');
    }
}