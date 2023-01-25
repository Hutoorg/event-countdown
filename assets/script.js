// Set the date we're counting down to
var countDownDate = new Date("Apr 14, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

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
  document.getElementById("countdown-number").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  // If "d" = "0", delete it
  if (days == 0) {
    document.getElementById("countdown-number").innerHTML = hours + "h " + minutes
      + "m " + seconds + "s ";
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-number").innerHTML = "Happy Valentine's Day! <br> We know it's a sad day :(";
  }
}, 1000);

function d() {
  location.href = 'dark';
}

function w() {
  location.href = '//hutoorg.github.io/event-countdown';
}

// Import form JSON
const titlename = document.getElementById("name");

async function getData() {
  try {
    const response = await fetch('assets/info.json');
    const config = await response.json();

    titlename.innerHTML = config.ttn;
    document.getElementById("headtitle").innerHTML = config.ttn + " | Countdown timer | Huto"
    
  } catch (error) {
    console.error(error)
  }
};

getData()