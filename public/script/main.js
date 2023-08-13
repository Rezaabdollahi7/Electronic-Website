
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

// =======================================================================================================
let products = {
    data: [
        {
            productName: "خازن 684J400V پلی استر 680 نانوفاراد 400 ولت",
            category: "capacitor",
            price: "30",
            image: "./public/images/product-images/capacitor/1.webp",
            desc: "خازن"
        },
        {
            productName: "خازن SMD الکترولیتی آلومینیومی 220 میکروفاراد 16 ولت RVE1C221M0607",
            category: "capacitor",
            price: "30",
            image: "./public/images/product-images/capacitor/2.webp",
            desc: "خازن"
        },
        {
            productName: "خازن الکترولیتی DIP با ظرفیت 470 میکروفاراد 25 ولت",
            category: "capacitor",
            price: "30",
            image: "./public/images/product-images/capacitor/3.webp",
            desc: "خازن"
        },
        {
            productName: "خازن الکترولیتی آلومینیومی DIP-LOW-ESR-1000UF-16V",
            category: "Tocapacitorpwear",
            price: "30",
            image: "./public/images/product-images/capacitor/4.jpeg",
            desc: "خازن"
        },
        {
            productName: "خازن الکترولیتی دیپ 100 میکروفاراد 16 ولت",
            category: "capacitor",
            price: "30",
            image: "./public/images/product-images/capacitor/5.webp",
            desc: "خازن"
        },
        // end capacitors

        // ! diods
        {
            productName: "diod ES2G",
            category: "diod",
            price: "49",
            image: "./public/images/product-images/diod/1.jpg",
            desc: "دیود"
        },
        {
            productName: "diod P4KE43A",
            category: "diod",
            price: "99",
            image: "./public/images/product-images/diod/2.webp",
            desc: "دیود"
        },
        {
            productName: "diod S1J SMD",
            category: "diod",
            price: "29",
            image: "./public/images/product-images/diod/3.jpeg",
            desc: "دیود"
        },
        {
            productName: "diod SD03",
            category: "diod",
            price: "129",
            image: "./public/images/product-images/diod/4.webp",
            desc: "دیود"
        },
        {
            productName: "diod SK23A",
            category: "diod",
            price: "89",
            image: "./public/images/product-images/diod/5.webp",
            desc: "دیود"
        },
        // end diods

        // ! ic
        {
            productName: "FM9688AAF",
            category: "ic",
            price: "189",
            image: "./public/images/product-images/ic/1.webp",
            desc: "آی سی"
        },
        {
            productName: "LM 7805",
            category: "ic",
            price: "189",
            image: "./public/images/product-images/ic/2.jpg",
            desc: "آی سی"
        },
        {
            productName: "LM2596HVS-ADJ - DC -DC",
            category: "ic",
            price: "189",
            image: "./public/images/product-images/ic/3.webp",
            desc: "آی سی"
        },
        {
            productName: "PC817",
            category: "ic",
            price: "189",
            image: "./public/images/product-images/ic/4.webp",
            desc: "آی سی"
        },
        // end ic 

        // ! res
        {
            productName: "HoRX-100W-1R",
            category: "res",
            price: "49",
            image: "./public/images/product-images/res/1.webp",
            desc: "مقاومت"
        },
        {
            productName: "HS15R05J",
            category: "res",
            price: "49",
            image: "./public/images/product-images/res/2.webp",
            desc: "مقاومت"
        },
        {
            productName: "HS1001KJ",
            category: "res",
            price: "49",
            image: "./public/images/product-images/res/3.webp",
            desc: "مقاومت"
        },
        {
            productName: "RPM300ZF1K00S",
            category: "res",
            price: "49",
            image: "./public/images/product-images/res/4.webp",
            desc: "مقاومت"
        },
    ],
};

for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);


    let desc = document.createElement("h6");
    desc.classList.add("card-desc");
    desc.innerText = "دسته بندی :    " + i.desc;
    container.appendChild(desc);

    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            //Check if element contains category class
            if (element.classList.contains(value)) {
                //display element based on category
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    //loop through all elements
    elements.forEach((element, index) => {
        //check if text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())) {
            //display matching card
            cards[index].classList.remove("hide");
        } else {
            //hide others
            cards[index].classList.add("hide");
        }
    });
});

//Initially display all products
window.onload = () => {
    filterProduct("all");
};