

// ============================================================================================
// Get the button:
let callUsbutton = document.getElementById("callUsBtn");
let callUsBtnNumber = document.getElementById("callUsBtnNumber");
let callUsBtn_animate = document.querySelectorAll(".callUsBtn-animate");
const scroolVal = 20;
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > scroolVal || document.documentElement.scrollTop > scroolVal) {
        callUsbutton.style.display = "block";
        callUsBtnNumber.classList.remove("hidden")
        for (i = 0; i < callUsBtn_animate.length; i++) {
            callUsBtn_animate[i].classList.add("hidden");
        }

    } else {
        callUsBtnNumber.classList.add("hidden");
        for (i = 0; i < callUsBtn_animate.length; i++) {
            callUsBtn_animate[i].classList.remove("hidden");
        }

    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// ===================== swiper ===========================
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: 'true',
    },
    autoplay: {
        delay: "60000",
        pauseOnMouseEnter: "true",
    },
    Pagination: {

    }
});
const swiper2 = new Swiper('.first-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    }, autoplay: {
        delay: "3000",
        pauseOnMouseEnter: "true",
    }, pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },

});
