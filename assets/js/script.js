import { catalogue } from "./modules/catalogue.js";
import { slider } from "./modules/slider.js";
import { audio } from "./modules/audio.js";

const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const playPause = document.querySelector("#playPause");
globalThis.catalogue = catalogue;
globalThis.track = null;
globalThis.currentTrack = 0;
globalThis.isPlaying = false;
const statusButtonPlayPause = () => {
  if (!isPlaying)
    playPause.innerText = "pause";

  else {
    playPause.innerText = "play";
  }

}
// Gestion du bouton "prev"
prevButton.addEventListener("click", () => {
  if (currentTrack > 0) {
    currentTrack--;
  } else {
    currentTrack = catalogue.length - 1;
  }
  slider("prev");
  audio("pause");
  audio();//"init";
  audio("play");

  console.log(currentTrack);
});

// Gestion du bouton "next"
nextButton.addEventListener("click", () => {
  if (currentTrack < catalogue.length - 1) {
    currentTrack++;
  } else {
    currentTrack = 0;
  }
  slider("next");
  audio("pause");
  audio();//"init";
  audio("play");
  console.log(currentTrack);
});

playPause.addEventListener("click", () => {
  if (!isPlaying) {

    audio("play")
  } else {

    audio("pause")
  }
  statusButtonPlayPause();
  isPlaying = !isPlaying
});





// Initialisation de la page
slider();
audio();

