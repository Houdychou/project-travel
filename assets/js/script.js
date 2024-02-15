const form = document.querySelector('form');
const message = document.querySelector('.hidden')
const email = document.querySelector('#email');
const btn = document.querySelector('.button');

const carouselRight = document.querySelector('#carousel-right')

function handleCarousel() {
    const firstDestination = document.querySelector('.first-destination')

    firstDestination.querySelector('.eiffel-image').setAttribute('src', 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flepassetempsderose.l.e.pic.centerblog.net%2Fo%2F0b6fb387.jpg&f=1&nofb=1&ipt=4f1abd79613c95390c05177932fc00746ba1451a4f4200edfcebdd3de9a8d01c&ipo=images')
}


carouselRight.addEventListener('click', function() {
    handleCarousel()
})


form.addEventListener('submit', function(e) {
    e.preventDefault()
    message.classList.remove('add');
    message.textContent = "";
    message.style.margin = "0";
    email.style.backgroundColor = "green";
    email.style.color = "white";
    email.style.border = "3px solid lightgreen";
    btn.style.backgroundColor = "green";

    if(email.value == "") {
        message.classList.remove('hidden');
        message.textContent = "Ce champ ne peut pas être vide!";
        message.style.color = "red";
        message.style.marginTop = "10px";
        email.style.backgroundColor = "#6E86E6";
        email.style.border = "3px solid red";
        btn.style.color = "white";
        btn.style.backgroundColor = "darkred";
    } else if(email.value.indexOf('@') == -1 || email.value.indexOf('@') < 3) {
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