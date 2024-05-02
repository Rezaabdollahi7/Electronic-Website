var swiper = new Swiper(".customer-section", {
    effect: "cards",
    grabCursor: true,
});
// -----------------------------------------------------
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
// ----------------------------------------------------
var swiper = new Swiper(".banners-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});