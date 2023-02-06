// DRUM KIT (Modified Wes Bos JS30 Challenge)

// Listen for key events on the page
document.addEventListener('keydown', processKeyDown);

// Event Function
function processKeyDown(e) {
  console.log(e.code);

  if (e.code === 'KeyA') {
    setKey('A', 'clap',)
  } else if (e.code === 'KeyS') {
    setKey('S', 'hihat',)
  } else if (e.code === 'KeyD') {
    setKey('D', 'kick',)
  } else if (e.code === 'KeyF') {
    setKey('F', 'openhat',)
  } else if (e.code === 'KeyG') {
    setKey('G', 'boom',)
  } else if (e.code === 'KeyH') {
    setKey('H', 'ride',)
  } else if (e.code === 'KeyJ') {
    setKey('J', 'snare',)
  } else if (e.code === 'KeyK') {
    setKey('K', 'tom',)
  } else if (e.code === 'KeyL') {
    setKey('L', 'tink',)
  }
}

function setKey(keyName, audioName) {
  let audio = document.getElementById(audioName)
  audio.currentTime = 0;
  audio.play();
  document.getElementById(keyName).classList.add('playing')
}

// Add transition end listeners
document.getElementById('A').addEventListener('transitionend', removePlaying);
document.getElementById('S').addEventListener('transitionend', removePlaying);
document.getElementById('D').addEventListener('transitionend', removePlaying);
document.getElementById('F').addEventListener('transitionend', removePlaying);
document.getElementById('G').addEventListener('transitionend', removePlaying);
document.getElementById('H').addEventListener('transitionend', removePlaying);
document.getElementById('J').addEventListener('transitionend', removePlaying);
document.getElementById('K').addEventListener('transitionend', removePlaying);
document.getElementById('L').addEventListener('transitionend', removePlaying);

// Transition End Function
function removePlaying(event) {
  event.target.classList.remove('playing');
}