var word = document.getElementById('qwerty');
var inputPhrase = document.getElementById('phrase');
var missed = 0;

var buttonElement = document.getElementsByClassName('btn__reset')[0];
console.log(buttonElement);

buttonElement.addEventListener('click', () => {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
});

const phrases = ['country', 'dish', 'animal', 'nature', 'bedding'];

function getRandomPhraseAsArray(arr){
  let split = phrases[Math.floor(Math.random() * phrases.length)] ;
  return split;
} 