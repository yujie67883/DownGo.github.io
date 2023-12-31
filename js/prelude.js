var audio = document.getElementById("myAudio");
var volumeBtn = document.getElementById("volumeBtn");

function toggleVolume() {
  if (audio.muted) {
    audio.muted = false;
    audio.play();
    volumeBtn.src = "img/prelude/volume_active.png";
  } else {
    audio.muted = true;
    audio.pause();
    volumeBtn.src = "img/prelude/volume_enable.png";
  }
}

function mDownb(obj) {
  obj.style.width = "3.5vw";
  setTimeout(this, 300);
}

function mUpb(obj) {
  obj.style.width = "4vw";
  setTimeout(this, 300);
}
