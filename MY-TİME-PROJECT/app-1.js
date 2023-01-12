var dialLines = document.getElementsByClassName("diallines");
var clockEl = document.getElementsByClassName("clock")[0];

for (var i = 1; i < 60; i++) {
  clockEl.innerHTML += "<div class='diallines'></div>";
  dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

function clock() {
  var weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let date = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  let hDeg = h * 30 + m * (360 / 720);
  let mDeg = m * 6 + s * (360 / 3600);
  let sDeg = s * 6;

  let hEl = document.querySelector(".hour-hand");
  let mEl = document.querySelector(".minute-hand");
  let sEl = document.querySelector(".second-hand");
  let dateEl = document.querySelector(".date");
  let dayEl = document.querySelector(".day");

  let day = weekday[d.getDay()];

  hEl.style.transform = "rotate(" + hDeg + "deg)";
  mEl.style.transform = "rotate(" + mDeg + "deg)";
  sEl.style.transform = "rotate(" + sDeg + "deg)";

  dateEl.innerHTML = date + "/" + month + "/" + year;
  dayEl.innerHTML = day;
}

setInterval("clock()", 100);
