let speech = new SpeechSynthesisUtterance();

document.querySelector('button').addEventListener('click', () => {
  speech.text = document.querySelector('textarea').value;
  window.speechSynthesis.speak(speech);
});

let voiceSelect = document.getElementById('voiceSelect');

function voiceList() {
  voiceSelect.innerHTML = '<option value="">Select a voice</option>';

  const voices = speechSynthesis.getVoices();
  const englishVoices = voices.filter((voice) => voice.lang.startsWith('en')); // use to show limited voices

  for (const voice of englishVoices) {
    const option = document.createElement('option');
    option.textContent = `${voice.name} (${voice.lang})`;
    option.value = voice.name; // Stores the voice name to look it up later
    voiceSelect.appendChild(option); // Appends the option to the dropdown
  }
}
voiceList();
