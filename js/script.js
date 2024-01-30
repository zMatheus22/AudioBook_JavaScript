const audioChapter = document.getElementById("audio-chapter");

const nameChapter = document.getElementById("chapter");

const btnPlayPause = document.getElementById("play-pause");
const btnNext = document.getElementById("next");
const btnPrevious = document.getElementById("previous");

let itPlaying = false;

const numberChapterBook = 10;
let currentChapter = 1;

function playTrack() {
  audioChapter.play();
  btnPlayPause.classList.remove("bi-play-circle-fill");
  btnPlayPause.classList.add("bi-pause-circle-fill");
}

function pauseTrack() {
  audioChapter.pause();
  btnPlayPause.classList.remove("bi-pause-circle-fill");
  btnPlayPause.classList.add("bi-play-circle-fill");
}

function playOrPause() {
  if (!itPlaying) {
    playTrack();
    itPlaying = true;
  } else {
    pauseTrack();
    itPlaying = false;
  }
}

function changeNameTrack() {
  nameChapter.innerHTML = `Capítulo ${currentChapter}`;
}

function nextTrack() {
  if (currentChapter === numberChapterBook) {
    currentChapter = 1;
  } else {
    currentChapter += 1;
  }

  audioChapter.src = `./books/dom-casmurro/${currentChapter}.mp3`;

  playTrack();
  itPlaying = true;
  changeNameTrack();
}

function previousTrack() {
  if (currentChapter === 1) {
    currentChapter = 10;
  } else {
    currentChapter -= 1;
  }

  audioChapter.src = `./books/dom-casmurro/${currentChapter}.mp3`;

  playTrack();
  itPlaying = true;
  changeNameTrack();
}

btnPrevious.addEventListener("click", previousTrack);
btnPlayPause.addEventListener("click", playOrPause);
btnNext.addEventListener("click", nextTrack);
