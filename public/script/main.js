// responsive header in mobile size
const headerMobileToggleBtn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

headerMobileToggleBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});
