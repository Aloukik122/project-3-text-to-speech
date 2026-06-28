let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.getElementById('voiceSelect');

//this is for the firefox/safari and other browser
function populateVoice() {
  voices = window.speechSynthesis.getVoices();

  speech.voice = voices[0];

  voices.forEach((voice, i) => {
    voiceSelect.options[i] = new Option(voice.name, i);
  });
}
populateVoice();

//this is for the crome/eage/opera browser
window.speechSynthesis.onvoiceschanged = () => {
  populateVoice();
};
voiceSelect.addEventListener('change', () => {
  speech.voice = voices[voiceSelect.value];
});

// Triger speech when it clicks
document.querySelector('button').addEventListener('click', () => {
  speech.text = document.querySelector('textarea').value;
  window.speechSynthesis.speak(speech);
});
