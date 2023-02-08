let carStart;
let x = 0;
let carImg = document.getElementById("car-img");
let start = document.getElementById("start");
let stop = document.getElementById("stop");

start.addEventListener("click", () => {
  carStart = setInterval(run, 10);

  function run() {
    x += 1;
    carImg.style.marginLeft = x + "px";
  }
});

stop.addEventListener("click", () => {
  clearInterval(carStart);
});
