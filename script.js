// Fix 1: Correct header selector
let header = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

// Fix 2: Unique Swiper instances with correct pagination
var homeSwiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".home-pagination",
        clickable: true,
    },
});

var cardSwiper = new Swiper(".card", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".card-pagination",
        clickable: true,
    },
});

// Fix 3: Proper localStorage usage
function onAddButtonClick(item) {
    let favourites = JSON.parse(localStorage.getItem('favourite')) || [];
    favourites.push(item);
    localStorage.setItem('favourite', JSON.stringify(favourites));
}

function onFavouriteViewLoad() {
    return JSON.parse(localStorage.getItem('favourite')) || [];
}

