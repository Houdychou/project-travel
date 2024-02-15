let form = document.querySelector('form');
let message = document.querySelector('.hidden')
let email = document.querySelector('#email');
let btn = document.querySelector('.button');

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