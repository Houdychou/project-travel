const form = document.querySelector('form');
const message = document.querySelector('.hidden')
const email = document.querySelector('.email');
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
const lightbox = document.createElement('div');
const images = document.querySelectorAll('.thumbnail')

lightbox.id = 'lightbox';
document.body.appendChild(lightbox);
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        img.classList.add('lightbox-img');
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active');
})

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
        nav.classList.add('nav-open');
        navtop.style.zIndex = "1";
        navbar.style.opacity = "0";
        contact.style.marginRight = "0";
        navOpen = true;
    } else {
        nav.classList.remove('nav-open');
        navbar.style.opacity = "1";
        navtop.style.zIndex = "";
        contact.style.marginRight = "";
        navOpen = false;
    }
});

// Ajoute des classes CSS pour le style ci-dessous
// Avec le JavaScript, tu peux ajouter ou enlever des classes HTML

form.addEventListener('submit', function(e) {
    e.preventDefault();
    message.classList.remove('add');
    message.textContent = "";
    message.style.margin = "0";
    btn.style.backgroundColor = "green";
    if (email.value === "") {
        message.classList.remove('hidden');
        message.textContent = "This can't be empty!";
        message.style.color = "red";
        message.style.marginTop = "10px";
        email.classList.add('email-label');
        btn.style.color = "white";
        btn.style.backgroundColor = "darkred";
    } else if (email.value.indexOf('@') == -1 || email.value.indexOf('@') < 3) {
        message.classList.remove('hidden');
        message.textContent = "Email adress need to have at least three letters/numbers before the '@'!";
        message.style.color = "red";
        message.style.marginTop = "10px";
        email.style.backgroundColor = "#6E86E6";
        email.style.border = "3px solid red";
        btn.style.color = "white";
        btn.style.backgroundColor = "darkred";
    }
})

