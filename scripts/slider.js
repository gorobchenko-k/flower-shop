const arrowPrev = document.querySelector(".slider__prev");
const arrowNext = document.querySelector(".slider__next");
const sliderPhoto1 = document.querySelector("#photo-1");
const sliderPhoto2 = document.querySelector("#photo-2");
const sliderPhoto3 = document.querySelector("#photo-3");

const sliderImages = [1, 2, 3, 4, 5, 6];
let index = 0;

function nextPhoto() {
    if (index > sliderImages.length - 2) {
        index = 0;

        sliderPhoto1.src = `photo/${sliderImages.at(index)}.jpg`;
        sliderPhoto2.src = `photo/${sliderImages.at(index + 1 - 6)}.jpg`;
        sliderPhoto3.src = `photo/${sliderImages.at(index + 2 - 6)}.jpg`;
    } else {
        index++;
        sliderPhoto1.src = `photo/${sliderImages.at(index)}.jpg`;
        sliderPhoto2.src = `photo/${sliderImages.at(index + 1 - 6)}.jpg`;
        sliderPhoto3.src = `photo/${sliderImages.at(index + 2 - 6)}.jpg`;
    }

}

setInterval(nextPhoto, 2000);


arrowNext.addEventListener("click", nextPhoto);

arrowPrev.addEventListener("click", function () {
    if (index > -3) {
        index--;
        sliderPhoto1.src = `photo/${sliderImages.at(index)}.jpg`;
        sliderPhoto2.src = `photo/${sliderImages.at(index + 1)}.jpg`;
        sliderPhoto3.src = `photo/${sliderImages.at(index + 2)}.jpg`;
    } else {
        index = 2;
        sliderPhoto1.src = `photo/${sliderImages.at(index)}.jpg`;
        sliderPhoto2.src = `photo/${sliderImages.at(index + 1)}.jpg`;
        sliderPhoto3.src = `photo/${sliderImages.at(index + 2)}.jpg`;
    }
});
