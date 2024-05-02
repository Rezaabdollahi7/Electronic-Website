var swiper = new Swiper(".customer-section", {
    effect: "cards",
    grabCursor: true,
});
// -----------------------------------------------------
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".special-offer-swiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});