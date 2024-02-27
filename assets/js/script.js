const form = document.querySelector('form');
const message = document.querySelector('.hidden')
const email = document.querySelector('#email');
const btn = document.querySelector('.button');
const carouselImg = document.querySelector('.eiffel-image');
const titreCarousel = document.querySelector('.paris');
const endroitCarousel = document.querySelector('.eiffel');
const navbar = document.querySelector('.navbar');
const txtCarousel = document.querySelector('.paris-txt');
const nav = document.querySelector('nav');
const navtop = document.querySelector('.navtop');
const contact = document.querySelector('.c');
const li = document.querySelectorAll('li');
const carouselRight = document.querySelector('#carousel-right');
const carouselLeft = document.querySelector('#carousel-left');
const navbarList = document.querySelector('.nav ul');
const firstDestination = document.querySelector('.first-destination');
const responsiveNav = document.querySelector('.fa-bars');
const IMAGES = [
    {
        "src": "assets/img/tour-eiffel.jpg",
        "city-name": "Paris",
        "endroit-carrousel": "Eiffel Tower",
        "description": "A symbol of Paris, a breathtaking view, an unforgettable experience.",
    },

    {
        "src": "assets/img/big-ben.jpg",
        "city-name": "London",
        "endroit-carrousel": "Big Ben Clock",
        "description": "Majestic London icon, Big Ben, stands tall with its iconic chime",
    },

    {
        "src": "assets/img/newyork.jpg",
        "city-name": "New York",
        "endroit-carrousel": "Liberty Statue",
        "description": "Icon of freedom and hope, majestic, welcomes the world."
    },
    {
        "src": "assets/img/pyramid.png",
        "city-name": "Cairo",
        "endroit-carrousel": "Pyramid",
        "description": "Iconic structures, ancient wonders, monumental tombs, architectural marvels in Egypt.",
    }
]
let currentImageIndex = 0;

function handleCarousel(direction) {
    if (direction === carouselLeft) {
        currentImageIndex = (currentImageIndex + 1) % IMAGES.length;
    } else {
        currentImageIndex = (currentImageIndex - 1 + IMAGES.length) % IMAGES.length;
    }
    const currentImage = IMAGES[currentImageIndex];
    console.log(currentImage);
    carouselImg.src = currentImage.src;
    titreCarousel.textContent = currentImage["city-name"];
    endroitCarousel.textContent = currentImage["endroit-carrousel"];
    txtCarousel.textContent = currentImage.description;
}

carouselRight.addEventListener('click', () => handleCarousel(carouselRight));

carouselLeft.addEventListener('click', () => handleCarousel(carouselLeft));
let navOpen = false;
responsiveNav.addEventListener('click', function () {
    if (!navOpen) {
        nav.style.position = "fixed";
        nav.style.zIndex = "2";
        nav.style.top = "117px";
        nav.style.right = "0px";
        nav.style.width = "243px";
        navtop.style.zIndex = "1";
        navbar.style.opacity = "0";
        contact.style.marginRight = "0";
        navbarList.style.display = "flex";
        navbarList.style.marginTop = "60px";
        navbarList.style.marginRight = "40px";
        navbarList.style.flexDirection = "column";
        navbarList.style.alignItems = "center";
        navbarList.style.justifyContent = "center";
        li[0].style.paddingBottom = "40px";
        li[1].style.paddingBottom = "40px";
        li[2].style.paddingBottom = "40px";
        li[3].style.paddingBottom = "40px";
        li[4].style.paddingBottom = "40px";
        li[5].style.paddingBottom = "40px";
        navOpen = true;
    } else {
        nav.style.position = ""; 
        nav.style.zIndex = "";
        nav.style.top = "";
        nav.style.right = "";
        nav.style.width = "";
        navbar.style.opacity = "1";
        navtop.style.zIndex = "";
        contact.style.marginRight = "";
        navbarList.style.display = "";
        navbarList.style.marginTop = "";
        navbarList.style.marginRight = "";
        navbarList.style.flexDirection = "";
        navbarList.style.alignItems = "";
        navbarList.style.justifyContent = "";
        li[0].style.paddingBottom = "";
        li[1].style.paddingBottom = "";
        li[2].style.paddingBottom = "";
        li[3].style.paddingBottom = "";
        li[4].style.paddingBottom = "";
        li[5].style.paddingBottom = "";
        navOpen = false;
    }
});

form.addEventListener('submit', function (e) {
    e.preventDefault()
    message.classList.remove('add');
    message.textContent = "";
    message.style.margin = "0";
    email.style.backgroundColor = "green";
    email.style.color = "white";
    email.style.border = "3px solid lightgreen";
    btn.style.backgroundColor = "green";

    if (email.value == "") {
        message.classList.remove('hidden');
        message.textContent = "Ce champ ne peut pas être vide!";
        message.style.color = "red";
        message.style.marginTop = "10px";
        email.style.backgroundColor = "#6E86E6";
        email.style.border = "3px solid red";
        btn.style.color = "white";
        btn.style.backgroundColor = "darkred";
    } else if (email.value.indexOf('@') == -1 || email.value.indexOf('@') < 3) {
        message.classList.remove('hidden');
        message.textContent = "L'adresse e-mail doit contenir au moins 3 caractères avant le '@'!";
        message.style.color = "red";
        message.style.marginTop = "10px";
        email.style.backgroundColor = "#6E86E6";
        email.style.border = "3px solid red";
        btn.style.color = "white";
        btn.style.backgroundColor = "darkred";
    }
})

