// * Set the date we're counting down to
var countDownDate = new Date("Dec 25, 2023 00:00:00").getTime();

// Update the count down every 1 second
var loop = setInterval(countDown, 1000);

function countDown() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown-number"
  document.getElementById("countdown-number").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If "days" = "0", delete it
  if (days == 0) {
    document.getElementById("countdown-number").innerHTML =
      hours + "h " + minutes + "m " + seconds + "s ";
  }

  // If "hours" = "0", delete it
  if (hours == 0) {
    document.getElementById("countdown-number").innerHTML =
      minutes + "m " + seconds + "s ";
  }

  // If "minutes" = "0", delete it
  if (minutes == 0) {
    document.getElementById("countdown-number").innerHTML = seconds + "s ";
  }
  // ? Should we change it to `${hours}` instead?

  // If the count down is finished, write some text
  if (distance < 0) {
    document.getElementById("countdown-number").innerHTML =
      "Happy Christmas Day!";
    // const audio = new Audio("assets/Halloween.mp3");
    // audio.play();
    clearInterval(loop);
  }
}

function d() {
  location.href = "dark";
}

function w() {
  location.href = "//hutoorg.github.io/event-countdown";
}

async function getData() {
  try {
    // Import form JSON
    const titlename = document.getElementById("name");
    const response = await fetch("assets/info.json");
    const config = await response.json();

    titlename.innerHTML = config.ttn;
    document.getElementById(
      "headtitle"
    ).innerHTML = `${config.ttn} | Countdown timer | Huto`;
  } catch (error) {
    console.error(error);
  }
}

getData();
