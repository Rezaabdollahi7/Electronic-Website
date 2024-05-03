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
// ---------------------------------------------------
var swiper = new Swiper(".now-courses-swiper", {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 30,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,

    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});
// ----------------------------------------------------
var swiper = new Swiper(".podcasts-slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        770: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
function playAudio(button) {
    var audio = button.previousElementSibling;
    audio.play();
}

function pauseAudio(button) {
    var audio = button.previousElementSibling.previousElementSibling;
    audio.pause();
}
function formatTime(seconds) {
    if (!seconds) {
        return '00:00';
    }

    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
}