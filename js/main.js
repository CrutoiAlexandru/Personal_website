// add header animation
var header = document.querySelector(".page_name_h1");

header_length = header.innerHTML.length;

header_array = header.innerHTML.split("");
fake_header_array = header_array;

header.innerHTML = null;

var timer = setInterval(onTick, 50);
var index = 0;
var sec_header = "empty";
var sec_index = 0;
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var charactersLength = characters.length;
var it_number = 5;

function onTick() {
    for (var i = 0; i <= index; i++) {
        sec_header += header_array[i];
    }

    if (sec_index % 2) {
        sec_header += '|';
    }

    for (var i = index; i < header_length; i++) {
        sec_header += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    if (index < header_length - 1) {
        if (sec_index < it_number) {
            if (sec_index % 2) {
                header.innerHTML = sec_header.replace("empty", "");
            } else {
                header.innerHTML = sec_header.replace("empty", "");
            }
        }
    } else {
        header.innerHTML = "Crutoi Alexandru's home";
    }

    if (sec_index < it_number) {
        sec_index++;
    } else {
        sec_index = 0;
        index++;
    }

    sec_header = "empty";
    if (index === header_length) {
        clearInterval(timer);
        return;
    }
}

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