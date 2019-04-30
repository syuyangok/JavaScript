//My first JavaScript Program

const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

  var date = new Date();

  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let secPosition = sec*360/60;
  let minPosition = min*360/60 + (secPosition/60);// add  second part
  let hrPosition = hr*360/12 + (minPosition/12);

  // to resolve second arm go back 0 with animation, when they arrive 12. 
function runClock() {
  
  secPosition = secPosition + (360/60);// previous position, add degree for 1 second
  minPosition = minPosition + (360/60)/60;
  hrPosition = hrPosition + (360/12)/3600;// 1 hour have 3600 sec

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
  
}

setInterval(runClock, 1000); // to keep clock running ,very 1 second.

