
const sliderHTML = document.querySelector("#slider");
const coverUrl = "./assets/img/cover/";

const initSlider = () => {
    const coverSlider = document.createElement("img");
    coverSlider.src = coverUrl + catalogue[currentTrack].cover;
   
    // prepend insere un element avant ceux qui existent déjà dans le parent
    //sliderHTML.prepend(coverSlider);
    // append insere un element après ceux qui existent déjà dans le parent
    

    const imgA = document.createElement("img");
    imgA.src = coverUrl + catalogue[currentTrack].cover;
    imgA.id = "imgA";
    sliderHTML.append(imgA);

}
const nextSlider = () => {
   
    document.querySelector("#imgA").classList.add("transSlider");
    document.querySelector("#imgA").classList.add("slideRight");
    setTimeout(() => {
      document.querySelector("#imgA").src =
        coverUrl + catalogue[currentTrack].cover;
      document.querySelector("#imgA").classList.remove("transSlider");
      document.querySelector("#imgA").classList.remove("slideRight");
    },500);
  };



const slider = (status = "init") => {
    console.log("initialisation du slider");
    /* console.dir(catalogue);
    console.log(catalogue[0].cover); */
    //console.log(catalogue[0]["cover"]);



    switch (status) {
        case "init":
            initSlider();

            break;
        case "next":
            nextSlider();




            break;
        case "prev":
            document.querySelector("#coverSlider").src =
                coverUrl + catalogue[currentTrack].cover;
            break;
        default:
            break;
    }



};

export { slider };


