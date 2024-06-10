//prix
const margarita = 10
const hawaii = 12
const calzone = 13

//variables à stocker
button = document.querySelector("button.submit-btn")
let qteMargarita = document.querySelector("#margarita")
let qteHawaii = document.querySelector("#hawaii")
let qteCalzone = document.querySelector("#Calzone")
console.log(button)
console.log(qteMargarita)
console.log(qteHawaii)
console.log(qteCalzone)

button.addEventListener('click',function(){
    somme = parseInt(qteMargarita.value) * margarita;
    somme += parseInt(qteHawaii.value) * hawaii ;
    somme += parseInt(qteCalzone.value) * calzone;
    inputSomme.value = somme
})


