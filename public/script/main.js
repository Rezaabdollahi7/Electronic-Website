
// responsive header in mobile size
const headerMobileToggleBtn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

headerMobileToggleBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});



// Get the button:
let callUsbutton = document.getElementById("callUsBtn");
const scroolVal = 40;
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > scroolVal || document.documentElement.scrollTop > scroolVal) {
        console.log("iam here")
        callUsbutton.style.display = "block";
    } else {
        callUsbutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 