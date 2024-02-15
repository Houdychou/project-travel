const form = document.querySelector('form');
const message = document.querySelector('.hidden')
const email = document.querySelector('#email');
const btn = document.querySelector('.button');
const carouselImg = document.querySelector('.eiffel-image');
const titreCarousel = document.querySelector('.paris');
const endroitCarousel = document.querySelector('.eiffel');
const txtCarousel = document.querySelector('.paris-txt');
const carouselRight = document.querySelector('#carousel-right');
const carouselLeft = document.querySelector('#carousel-left');
const stars = document.querySelector('.star');
const firstDestination = document.querySelector('.first-destination');

function handleCarousel() {
    firstDestination.querySelector('.eiffel-image').setAttribute('src', 'assets/img/newyork.jpg')
    titreCarousel.textContent = "New-York";
    endroitCarousel.textContent = "Liberty Statue";
    endroitCarousel.style.marginBottom = "0px";
    txtCarousel.textContent = "Icon of freedom and hope, majestic, welcomes the world.";
}

function prevImg() {
    firstDestination.querySelector('.newyork').setAttribute('src', 'assets/img/tour-eiffel.jpg');
    titreCarousel.textContent = "Paris";
    endroitCarousel.textContent = "Eiffel Tower";
    endroitCarousel.style.marginBottom = "34px";
    txtCarousel.textContent = "One of the most famous landmarks in the world";
}

carouselRight.addEventListener('click', function() {
    handleCarousel();
})

carouselLeft.addEventListener('click', function() {
    prevImg();
})

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