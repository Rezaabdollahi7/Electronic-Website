


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
        for(i=0 ; i<callUsBtn_animate.length;i++){
            callUsBtn_animate[i].classList.remove("hidden");
        }

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
            productName: "خازن SMD 220 میکروفاراد 16 ولت RVE1C221M0607",
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
    let nameLabel = document.createElement("span");
    nameLabel.classList.add("product-name-label");
    nameLabel.innerText = "نام محصول : " ;

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(nameLabel)
    container.appendChild(name);


    //product desc
    let descLabel = document.createElement("span");
    descLabel.classList.add("cat-label");
    descLabel.innerText = "دسته بندی  : ";
    container.appendChild(descLabel);

    let desc = document.createElement("h6");
    desc.classList.add("card-cat");
    desc.innerText = i.desc;
    container.appendChild(desc);

    //see more btn
    let seeMoreBtn = document.createElement("button");
    seeMoreBtn.classList.add("see-more-btn");
    seeMoreBtn.innerText = "مشاهده جزئیات بیشتر";
    container.appendChild(seeMoreBtn);

    //buy btn
    let buyBtn = document.createElement("button");
    buyBtn.classList.add("buy-btn");
    buyBtn.innerText = "برای خرید تماس بگیرید";
    container.appendChild(buyBtn);

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
// ==================================================================



let pageWidth = window.innerWidth;
if(pageWidth < 600){
    cardState("horizontal")
}


function cardState(e){
    if(e==="horizontal"){
        let products_section = document.getElementById("products");
        products_section.classList.remove("lg:grid-cols-4")
        products_section.classList.remove("md:grid-cols-2")
        let cards = document.querySelectorAll(".card");
        cards.forEach((e) => {
            e.classList.add("horizontal")
        });
    }
    // ! vertical عمودی 
    else{
        let products_section = document.getElementById("products");
        products_section.classList.add("lg:grid-cols-4")
        products_section.classList.add("md:grid-cols-2")
        let cards = document.querySelectorAll(".card");
        cards.forEach((e) => {
            e.classList.remove("horizontal")
        });

    }
}