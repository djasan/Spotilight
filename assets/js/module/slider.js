const slider = (catalogue,currentTrack) => {

    console.log("initialisation du slider");
    // console.dir(catalogue);

    // console.img(catalogue[0] .cover);
    const sliderhtml = document.querySelector("#slider");
    const coverUrl = "./assets/img/cover/";


    const coverSlider = document.createElement("img");
    coverSlider.src = coverUrl + catalogue[currentTrack].cover;
    sliderhtml.append(coverSlider);

   
    // sliderhtml.prepend(coverSlider);
};

export { slider };


