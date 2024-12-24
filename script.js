var audio = document.querySelector('audio');
audio.currentTime = 60; // mulai dari menit ke 1

var button = document.querySelector('button');
function playAudio() {
  var audio = document.querySelector('audio');
  if (audio.paused) {
    audio.play();
    button.textContent = 'Stop';
  } else {
    audio.pause();
    button.textContent = 'Play';
  }
}
