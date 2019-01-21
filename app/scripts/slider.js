let i = 1;
const imageCount = 5;
const sliderSpeed = 10000;

$(document).ready(() => {
  setImage();
  setInterval(setImage, sliderSpeed);
});

function setImage() {
  if (i < imageCount) {
      i++;
  } else {
      i=1;
  }
  updateSlider();
};

function prevImg() {
  i--;
  updateSlider();
};

function nextImg() {
  i++;
  updateSlider();
};

function updateSlider() {
  $(".slider").html(createImg(i));
};

function createImg(i) {
  return `<img class="slider__img" src="../images/img${i}.png">`
};

$('.slider__arrow--left').on("click", function() {
    if(i===1) {
        i=imageCount+1;
    }
    prevImg();
});

$('.slider__arrow--right').on("click", function() {
    if(i===imageCount) {
        i = 0;
    }
    nextImg();
});