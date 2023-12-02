// Icons
const sunIcon = document.querySelector('.sun')
const moonIcon = document.querySelector('.moon')

// Theme vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("{prefers-color-schema: dark }").matches;

// Icon Togglieng
const iconToggle = () => {
    moonIcon.classList.toggle("display-none")
    sunIcon.classList.toggle("display-none")
}

// Initial theme Check
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none")
        return
    }
    sunIcon.classList.add("display-none")
}

// Manual theme change 
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
}

// Call themeSwitch on clicking Button
sunIcon.addEventListener("click" , () =>{
    console.log("sun")
    themeSwitch();
})
moonIcon.addEventListener("click", () => {
    console.log("moon")
    themeSwitch();
})

// Initial  theme on load 
themeCheck();