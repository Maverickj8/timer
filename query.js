// variables for buttons
const startStopButton = document.getElementById("start-button");
const resetButton = document.getElementById("stop-button");

// Variable for time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading zero
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for set interval and timerstatus
let timeInterval = null;
let timeStatus = "stopped"

// create a function

function stopWatch() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }
  // Lets create a function that will control the leading zero
   
  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  }else {
    leadingSeconds = seconds;
  }
  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  }else {
    leadingMinutes = minutes;
  }
  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  }else {
    leadingHours = hours;
  }

  // A variable that will display the time on the browser
  let timeDisplayer = (document.getElementById("timer").innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds);
}
// lets create a method that calls a function at a specified interval
// window.setInterval(stopWatch, 1000)

// create an eventListner function
// The function will check when the timerstatus is started or stopped
startStopButton.addEventListener('click', function () {
    
    if (timeStatus === "stopped") {
        timeInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('start-button').innerHTML =
        `<i class="fa-solid fa-pause" ></i>`;
        timeStatus = "started";
    }else {
        window.clearInterval(timeInterval);
        document.getElementById('start-button').innerHTML =
        `<i class="fa-solid fa-play" ></i>`
        timeStatus = "stopped"
    }
})
// eventLister for reset button
resetButton.addEventListener('click', function () {
    // The clearInterval method will clear the timer
    window.clearInterval(timeInterval);
    // This will revert the time back to zero
    seconds = 0;
    minutes = 0;
    hours = 0;
// This will put the above into the browser
    document.getElementById('timer').innerHTML = "00:00:00";
})
