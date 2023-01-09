const valorDigitado = document.querySelector("#valor");
const enviarButton = document.querySelector("#submit-button");
const resposta= document.querySelector("#resposta")



enviarButton.addEventListener("click", function(e){

    const valorUser= valorDigitado.value;
    console.log(valorUser);



});

function getRandomInt() {
    const max= 20;
    const min=1;

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);;

}