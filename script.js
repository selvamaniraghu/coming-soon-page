var countDownDate = new Date("NOV 29, 2022 12:10:00").getTime();

var countdownfunction = setInterval(function() {

  var now = new Date().getTime();
  
  var distance = countDownDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  days = days.toString()
  hours = hours.toString()
  minutes = minutes.toString()
  seconds = seconds.toString()
  document.getElementById("days").innerHTML = days.length==2|3 ? days : "0" + days;
  document.getElementById("hours").innerHTML = hours.length==2 ? hours : "0" + hours;
  document.getElementById("minutes").innerHTML = minutes.length==2 ? minutes : "0" + minutes;
  document.getElementById("seconds").innerHTML = seconds.length==2 ? seconds : "0" + seconds;
  
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("tym").innerHTML = "EXPIRED**";
  }
}, 1000);
