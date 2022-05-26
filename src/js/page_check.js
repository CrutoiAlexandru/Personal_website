let el = document.getElementsByClassName("top_bar__buttons--each");

var path = window.location.pathname;
var page = path.split("/").pop();

// color with white the certain page (button) we are on
if (page == "index.html") {
  el[0].style.color = "white";
}

if (page == "about_me.html") {
  el[1].style.color = "white";
}

if (page == "contact_me.html") {
  el[2].style.color = "white";
}
