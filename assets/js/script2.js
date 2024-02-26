const nameTextarea = document.querySelector("#name");
const email = document.querySelector("#email");
const messageTextarea = document.querySelector("#write-requests");
const confirm = document.querySelector(".submit");
const number = document.querySelector("#number");
const labelName = document.querySelector(".label-name");
const labelEmail = document.querySelector(".label-email");
const labelMessageTextarea = document.querySelector(".label-name");
const labelNumber = document.querySelector(".label-number");
const writeRequests = document.querySelector(".write-requests");
const select = document.querySelector("select");
const option = document.querySelector(".selec");

confirm.addEventListener("click", function (e) {
    e.preventDefault();
    if (email.value === "") {
        email.style.borderColor = "red";
        labelEmail.style.color = "red";
    }
    else {
        email.style.borderColor = "#4EE1A0";
        labelEmail.style.color = "#4EE1A0";
    }

    if (messageTextarea.value === "") {
        messageTextarea.style.borderColor = "red";
        writeRequests.style.color = "red";
    }
    else {
        messageTextarea.style.borderColor = "#4EE1A0";
        writeRequests.style.color = "#4EE1A0";
    }

    if (number.value === "") {
        number.style.borderColor = "red";
        labelNumber.style.color = "red";

    }
    else {
        number.style.borderColor = "#4EE1A0";
        labelNumber.style.color = "#4EE1A0";
    }

    if (nameTextarea.value === "") {
        nameTextarea.style.borderColor = "red";
        labelName.style.color = "red";
    }
    else {
        nameTextarea.style.borderColor = "#4EE1A0";
        labelName.style.color = "#4EE1A0";
    }
})
