const buttonMore = $(".btn__more");
const buttonLess = $(".btn__less");
const form = $(".form");
const dropdownButton = $(".btn--drop-down");
const dropdownContent = $(".dropdown__content");

buttonMore.on("click", (e) => {
  form.show();
  buttonLess.show();
  buttonMore.hide();
});

buttonLess.on("click", (e) => {
  form.hide();
  buttonLess.hide();
  buttonMore.show();
});

dropdownButton.on("click", (e) => {
  dropdownContent.toggleClass("show");
});

$(".tier").on("click", (e) => {
  $(".tier-options").toggleClass("show");
});

$(".garden").on("click", (e) => {
  $(".garden-options").toggleClass("show");
});

$(".state").on("click", (e) => {
  $(".state-options").toggleClass("show");
});

$(".price").on("click", (e) => {
  $(".price-options").toggleClass("show");
});

$(".ground-l").on("click", (e) => {
  $(".ground").hide();
  $(".plan-foto").append(`<img class="plan ground" src="./images/ground-l.png"></div>`);
});

$(".ground-r").on("click", (e) => {
  $(".ground").hide();
  $(".plan-foto").append(`<img class="plan ground" src="./images/parter.png"></div>`);
});

$(".floor-l").on("click", (e) => {
  $(".ground").hide();
  $(".plan-foto").append(`<img class="plan ground" src="./images/floor-l.png"></div>`);
});

$(".floor-r").on("click", (e) => {
  $(".ground").hide();
  $(".plan-foto").append(`<img class="plan ground" src="./images/floor-r.png"></div>`);
});




