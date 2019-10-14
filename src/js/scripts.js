const piece = (function() {
  let el = null;
  const init = function(el) {
    this.el = el;
  };

  const moveDelta = function(dx, dy) {
    const pos = this.el.getBoundingClientRect();
    this.el.style.left = `${pos.left + dx}px`;
    this.el.style.top = `${pos.top + dy}px`;
  };
  return {
    init,
    moveDelta,
  };
})();

function handleClick(ev) {
  piece.moveDelta(parseInt(this.dataset.dx), parseInt(this.dataset.dy));
}
// function init() {
//   const $btnUp = document.getElementById("btn-up");
//   // $btnUp.dataset.dx = 0;
//   $btnUp.dataset.dy = -100;
//   $btnUp.addEventListener("click", handleClick);
//   const $btnRight = document.getElementById("btn-right");
//   $btnRight.dataset.dx = 100;
//   // $btnRight.dataset.dy = 0;
//   $btnRight.addEventListener("click", handleClick);
//   const $btnDown = document.getElementById("btn-down");
//   // $btnDown.dataset.dx = 0;
//   $btnDown.dataset.dy = 100;
//   $btnDown.addEventListener("click", handleClick);
//   const $btnLeft = document.getElementById("btn-left");
//   $btnLeft.dataset.dx = -100;
//   // $btnLeft.dataset.dy = 0;
//   $btnLeft.addEventListener("click", handleClick);
// }

function init() {
  let array = ['btn-up', 'btn-right', 'btn-down', 'btn-left'];
  for (let i=0; i < array.length; i++) {
    const $btn = document.getElementById(array[i]);
    switch (i) {
      case 0:
        $btn.dataset.dy = -100;
        break;
      case 1:
        $btn.dataset.dx = 100;
        break;
      case 2:
        $btn.dataset.dy = 100;
        break;
      case 3:
        $btn.dataset.dx = -100;
        break;
    }
    $btn.addEventListener("click", handleClick);
  }

}

window.addEventListener("DOMContentLoaded", event => {
  piece.init(document.getElementById("piece"));
  init();
  changeColor();
});

function changeColor() {

    const API_KEY = '55c6b18bfb9d0aefd9f80ddf58e38a83';
    const city = 'Tel Aviv';
// const city = 'Oslo';
// const city = 'London';

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
              console.log(data);
              temp = data.main.temp;
              console.log(temp);
              if(temp <=10) {
                document.getElementById("piece").style.backgroundColor = `blue`;
              }else if(temp <= 20){
                document.getElementById("piece").style.backgroundColor = `green`;
              }else if(temp <= 30) {
                document.getElementById("piece").style.backgroundColor = `yellow`
                // piece.init.style.background = `yellow`;
              }else{
                document.getElementById("piece").style.backgroundColor = `red`;
              }
            });
}
