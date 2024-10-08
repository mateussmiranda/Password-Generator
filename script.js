let sliderElement = document.querySelector("#slider");
let sliderNumber = document.querySelector("#slider-number");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let sizeNumber = document.querySelector("#valor-number")
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#*";
let numbers = "0123456789";
let novaSenha = ""

sizePassword.innerHTML = sliderElement.value;
sizeNumber.innerHTML = sliderNumber.value;

sliderElement.oninput = function () {
    sizePassword.innerHTML = this.value;

    if (sliderNumber.value > sliderElement.value) {
        sliderNumber.value = sliderElement.value;
        sliderNumber.innerHTML = sliderNumber.value;
        alert("A quantidade de números não pode ser maior que a quantidade de caracteres!")
    }
}

sliderNumber.oninput = function () {

    if (sliderNumber.value > sliderElement.value) {
        sliderNumber.value = sliderElement.value;
        alert("A quantidade de números não pode ser maior que a quantidade de caracteres!")
    }
    sizeNumber.innerHTML = sliderNumber.value;
}

function generatePassword() {

    let pass = "";
    let numPass = "";
    let n = charset.length;

    if (sliderNumber.value > sliderElement.value) {
        sliderNumber.value = sliderElement.value;
    }

    // Gera a parte com números
    for (let i = 0; i < sliderNumber.value; ++i) {
        numPass += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    // Gera a parte sem números, respeitando o tamanho total - quantidade de números.
    for (let i = 0; i < sliderElement.value - sliderNumber.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    // Combina os números gerados com os outros caracteres.
    let finalPassword = pass + numPass;

    // Embaralha a senha para não deixar os números sempre no final.
    finalPassword = finalPassword.split('').sort(() => 0.5 - Math.random()).join('');

    containerPassword.classList.remove("hide");
    password.innerHTML = finalPassword;
    novaSenha = finalPassword;
}

function copyPassword() {
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha);
}