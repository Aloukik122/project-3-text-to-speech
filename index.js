let speech = new SpeechSynthesisUtterance();

document.querySelector('button').addEventListener('click', () => {
  speech.text = document.querySelector('textarea').value;
  window.SpeechSynthesis.speak(speech);
});
