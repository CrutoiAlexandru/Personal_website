// Get the root element
var r = document.querySelector(':root');

// do a drag animation for the spinner cards
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

// onclick function for the about me card
var about_me_button = document.querySelector(".spinner__card--about_me");

about_me_button.addEventListener("click", function() {
    document.body.style.cursor = "wait";
    window.location = "https://google.com";
});

about_me_button.addEventListener("mouseover", event => {
    document.body.style.cursor = "pointer";
});

about_me_button.addEventListener("mouseout", event => {
    document.body.style.cursor = "default";
});

// onclick function for the my code card
var my_code_button = document.querySelector(".spinner__card--my_code");

my_code_button.addEventListener("click", function() {
    document.body.style.cursor = "wait";
    window.location = "https://github.com/CrutoiAlexandru";
});

my_code_button.addEventListener("mouseover", event => {
    document.body.style.cursor = "pointer";
});

my_code_button.addEventListener("mouseout", event => {
    document.body.style.cursor = "default";
});

// onclick function for the about me card
var contact_me_button = document.querySelector(".spinner__card--contact_me");

contact_me_button.addEventListener("click", function() {
    document.body.style.cursor = "wait";
    window.location = "https://google.com";
});

contact_me_button.addEventListener("mouseover", event => {
    document.body.style.cursor = "pointer";
});

contact_me_button.addEventListener("mouseout", event => {
    document.body.style.cursor = "default";
});