const listItems = [
    { id: 1, tittle: 'پروژه های کاربردی با php', desc: '"مینی پروژه‌های کاربری با PHP" یه دوره آموزشی گام به گام هست که برای توسعه‌دهندگان وب، ', author: 'معین فرجی', courseTime: '99:17', courseStar: '5.0', coursePrice: '4,500,000', customers: '3101', courseCat: ['backend', 'php'], imgSrc: './public/images/courses/php.jpg' },
    { id: 2, tittle: 'آموزش ری اکت ( ReactJS ) در دنیای واقعی | از 0 تا استخدام  ', desc: 'حدود 40 ساعت آموزش جامع و تخصصی ری اکت!  شما در دوره آموزش ری اکت ReactJS ،  ', author: 'محمد امین', courseTime: '18:17', courseStar: '4.5', coursePrice: '2,700,000', customers: '1020', courseCat: ['frontend'], imgSrc: './public/images/courses/react.png' },
    { id: 3, tittle: 'آموزش الگوریتم و  داده به زبان ساده ', desc: 'الگوریتم، یک مهارت ضروری برای ورود به دنیای برنامه نویسیه که دیدگاه شما رو به مسائل  ', author: ' رضا دولتی', courseTime: '24:52', courseStar: '3.8', coursePrice: '1,500,000', customers: '2536', courseCat: ['skills'], imgSrc: './public/images/courses/alghoritm.webp' },
    { id: 4, tittle: 'مینی پروژه های تخصصی با Html، Css + دیزاین اختصاصی ', desc: 'عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این  ', author: ' حمید عبادی', courseTime: '4:39', courseStar: '4.0', coursePrice: '3,500,000', customers: '8425', courseCat: ['frontend'], imgSrc: './public/images/courses/css.jpg' },

    { id: 5, tittle: 'Clean Code برای برنامه نویسان  ', desc: 'فرق بین یه برنامه‌نویس تازه‌کار و حرفه‌ای نوع دیدگاه و طرز کدنویسیشونه. برنامه‌نویس  ', author: ' محمد ظهیری', courseTime: '10:17', courseStar: '2.7', coursePrice: '500,000', customers: '1000', courseCat: ['skills'], imgSrc: './public/images/courses/code.jpg' },
    { id: 6, tittle: 'زیر و بَم و منطق دیپلوی برای برنامه نویسان JS ', desc: 'تو هر فیلدی فعالیت بکنی برای پرزنت خودت تو بازار کار و نمایش نمونه کارات نیاز به دپلوی  ', author: ' حامد ادهم', courseTime: '99:99', courseStar: '1.0', coursePrice: '7,750,000', customers: '2001', courseCat: ['skills'], imgSrc: './public/images/courses/js.jpg' },
    { id: 7, tittle: 'آموزش ساخت ربات تلگرام با PHP ', desc: 'توی دوره فوق‌العاده جذاب و کاربردی "ربات تلگرام با PHP"، به دنیای عجیب و جذاب ربات نویسی  ', author: 'معین فرجی', courseTime: '45:17', courseStar: '3.5', coursePrice: '4,500,000', customers: '3101', courseCat: ['backend', 'php'], imgSrc: './public/images/courses/php.jpg' },
    { id: 8, tittle: 'آموزش بوت استرپ 5 مقدماتی تا پیشرفته (2023) ', desc: 'آموزش bootstrap 5 خوش اومدین به آموزش بوت استرپ 5 سبزلرن! حتما تا الان html و css ', author: ' مهرشاد براتی', courseTime: '23:41', courseStar: '4.2', coursePrice: '1,250,000', customers: '3056', courseCat: ['frontend'], imgSrc: './public/images/courses/bootstrap.jpg' },

    { id: 9, tittle: 'دوره پروژه محور متخصص جنگو ', desc: 'از ویژگی های مهم این دوره میتونیم به توضیح کامل مفاهیم پایه و ساختاری، کامل بودن و  ', author: ' رضا دولتی', courseTime: '45:20', courseStar: '3.9', coursePrice: '500,000', customers: '2026', courseCat: ['backend', 'python'], imgSrc: './public/images/courses/django.png' },
    { id: 10, tittle: 'آموزش حرفه ای NodeJS بدون پیش نیاز ', desc: 'الان و امروز کمتر کسی هست که از بازار کار داغ نود جی اس با خبر نباشه و یکی از…      ', author: ' یگانه جعفری', courseTime: '12:00', courseStar: '5.0', coursePrice: '9,900,000', customers: '9999', courseCat: ['backend'], imgSrc: './public/images/courses/node.jpg' },
    { id: 11, tittle: 'آموزش git و github ', desc: 'گیت یه Version Controller هست که نسخه های مختلف پروژه هامون رو مدیریت و نگهداری  ', author: 'احسان عراقی', courseTime: '29:27', courseStar: '2.8', coursePrice: '2,250,000', customers: '6500', courseCat: ['skills'], imgSrc: './public/images/courses/git.jpg' },
    { id: 12, tittle: 'پروژه های کاربردی با python', desc: 'قبل از اینکه بخواین این دوره رو ببینید اگر دوره آموزش python رو ندیدین حتما دوره رو ببینید  ', author: ' محمد واحدی', courseTime: '8:00', courseStar: '4.0', coursePrice: '2,500,000', customers: '4000', courseCat: ['python'], imgSrc: './public/images/courses/python.png' },

];

let itemListContainer = document.querySelector('#list')
let paginationContainer = document.querySelector('#pagination')

let currentPage = 1
let rowsCount = 3

function displayUesrsList(allUesrsArray, usersContainer, rowsCount, currentPage) {
    if (allUesrsArray.length == 0) {
        console.log(`empty`);
        usersContainer.innerHTML = 'Not Found'
    } else {
        usersContainer.innerHTML = ''
        let endIndex = rowsCount * currentPage
        let startIndex = endIndex - rowsCount

        let paginatedItems = allUesrsArray.slice(startIndex, endIndex)

        paginatedItems.forEach(function (e) {
            // Using e.courseCat instead of e
            let itemsCatSpans = e.courseCat.map(category => `<span class="card-cat">${category}</span>`).join('');

            // Creating the card-cat-wrapper HTML with the generated spans
            let cardCatWrapperHTML = `<div class="card-cat-wrapper">${itemsCatSpans}</div>`;

            // item
            let itemCard = `
          <div class="item-card ">
            <img class=" item-img " src = ${e.imgSrc} >
            <div class="card-body ">
                 ${cardCatWrapperHTML}
                <h3 class="card-tittle">${e.tittle}</h3>
                <p class="card-desc "> ${e.desc}</p>

                <div class="card-extra-details">
                    <div class="star-section-wrapper ">
                        <i class="fa-solid fa-star"></i>
                        <span class="star-count">${e.courseStar}</span>
                    </div>

                    <div class="clock-section-wrapper ">
                    <i class="fa-regular   fa-clock"></i>
                    <span class="clock-time">${e.courseTime}</span>
                    </div>
                    <div class="author-section-wrapper ">
                    <i class="fa-solid fa-user "></i>
                    <span class="author-name">${e.author}</span>
                    </div>
                </div>

                <hr class="bg-black">
                <div class="card-footer">
                  <div class="users-counter-wrapper">
                    <i class="fa-solid fa-users "></i>
                    <span class="users-counter">${e.customers}</span>
                    </div>
                    <div class="course-price-wrapper ">
                        <span class="course-price">${e.coursePrice}</span>
                        <span>تومان</span>
                    </div>
                </div>
            </div>


        </div>

        `


            let tempContainer = document.createElement('div');
            tempContainer.innerHTML = itemCard;
            usersContainer.appendChild(tempContainer);
        })
    }


}

function setupPagination(allUesrsArray, pagesContainer, rowsCount) {

    pagesContainer.innerHTML = ''

    let pageCount = Math.ceil(allUesrsArray.length / rowsCount)

    for (let i = 1; i < pageCount + 1; i++) {
        let btn = ButtonGenerator(i, allUesrsArray)
        pagesContainer.appendChild(btn)
    }

}

function ButtonGenerator(page, allUesrsArray) {
    let button = document.createElement('button')
    button.innerHTML = page

    if (page === currentPage) {
        button.classList.add('active')
    }
    button.classList.add('pgbtn')

    button.addEventListener('click', function () {
        currentPage = page
        displayUesrsList(allUesrsArray, itemListContainer, rowsCount, currentPage)

        let prevPage = document.querySelector('button.active')
        prevPage.classList.remove('active')

        button.classList.add('active')


    })

    return button
}

displayUesrsList(listItems, itemListContainer, rowsCount, currentPage)
setupPagination(listItems, paginationContainer, rowsCount)

// Function to filter courses based on selected category
function filterCourses(category) {
    currentPage = 1;
    if (category == "all") {
        displayUesrsList(listItems, itemListContainer, rowsCount, currentPage)
        setupPagination(listItems, paginationContainer, rowsCount)
    } else {


        const filteredCourses = listItems.filter(item => item.courseCat.includes(category));
        displayUesrsList(filteredCourses, itemListContainer, rowsCount, currentPage)
        setupPagination(filteredCourses, paginationContainer, rowsCount)

    }
}

function performSearch() {

    const searchText = document.getElementById('searchInput').value.toLowerCase();

    const searchResults = listItems.filter(item => item.tittle.toLowerCase().includes(searchText));

    displayUesrsList(searchResults, itemListContainer, rowsCount, currentPage);
    setupPagination(searchResults, paginationContainer, rowsCount);
}
