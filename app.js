var word = document.getElementById('qwerty');
var phrase = document.getElementById('phrase');
var missed = 0;

var buttonElement = document.getElementsByClassName('btn__reset')[0];
console.log(buttonElement);

buttonElement.addEventListener('click', () => {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
});