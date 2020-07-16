var word = document.getElementById('qwerty');
var inputPhrase = document.getElementById('phrase');
var missed = 0;

var buttonElement = document.getElementsByClassName('btn__reset')[0];
console.log(buttonElement);

buttonElement.addEventListener('click', () => {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
});

const phrases = ['Hello world',
                  'I love you',
                  'Stay foolish', 
                  'Keep going', 
                  'Long way home'];


function getRandomPhraseAsArray(arr){
  let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  let splitPhrase = randomPhrase.split('');
  return splitPhrase;
} 

const phraseArray = getRandomPhraseAsArray(phrases);


function addPhraseToDisplay(arr) {
  // do stuff any arr that is passed in, and add to `#phrase ul`
  for (let i = 0; i < arr.length; i ++) {
    let Li = document.createElement('LI');
    Li.textContent = arr[i];
    let phraseUl = document.querySelector('#phrase ul');
    phraseUl.appendChild(Li);
    if ( arr[i] !== ' ') {
      Li.classList.add('letter');
    }
  }
}
addPhraseToDisplay(phraseArray); 

//Here is what I stack with...
function checkLetter(button) {
  let inputLetter = document.getElementsByClassName('letter');
  let correctInput = null;
  for (let i = 0; i < inputLetter.length; i ++) {
    if (inputLetter[i].textContent.toLowerCase() === button) {
    inputLetter[i].classList.add("show");
    correctInput = inputLetter[i].textContent;
    } 
  }
  // return correctInput;
  return correctInput;
}

let keyBoard = document.querySelectorAll("#qwerty button");

document.keyBoard.addEventListener("click", function(){
  
console.log('typed');
});
