import { catalogue } from "./module/catalogue.js";
import { slider } from "./module/slider.js";


console.dir(catalogue);
let currentTrack = 0;
const prevButton = document.querySelector("#prev")
const nextButton = document.querySelector("#next")
nextButton.addEventListener("click", () => {

    if (currentTrack < catalogue.length - 1) {
        currentTrack++;
    } else {
        currentTrack = 0;

    }



    console.log(currentTrack);
});

prevButton.addEventListener("click", () => {

    if (currentTrack > 0) {
        currentTrack--;
    } else {
        currentTrack = catalogue.length - 1;

    }



    console.log(currentTrack);
});

slider(catalogue, currentTrack); 