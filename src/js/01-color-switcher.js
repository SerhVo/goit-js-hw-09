const btnStart = document.querySelector('button[data-start]'),
  btnStop = document.querySelector('button[data-stop]');
let r = 0;
function changeColor() {
  document.body.style.backgroundColor = `#${Math.floor(
    16777215 * Math.random()
  ).toString(16)}`;
}
btnStart.addEventListener('click', function () {
  (r = setInterval(changeColor, 1000)),
    btnStart.setAttribute('disabled', 'true'),
    btnStop.removeAttribute('disabled', 'true');
}),
  btnStop.addEventListener('click', function () {
    clearInterval(r),
      btnStop.setAttribute('disabled', 'true'),
      btnStart.removeAttribute('disabled', 'true');
  });
