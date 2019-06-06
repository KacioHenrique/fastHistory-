function playAudioTag(audioTag) {
	var playPromise = audioTag.play();
	playPromise.then(_ => {
      // Automatic playback started!
      // Show playing UI.
      console.log("played");
    })
    .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
      console.log("error");
    });
}

function playAudio(fileName) {
	var audio = new Audio(fileName);
	playAudioTag(audio);
	console.log(fileName);
}

function playAudioById(id) {
	var audio = document.getElementById(id);
	playAudioTag(audio);
	console.log(audio, "audio");
}

