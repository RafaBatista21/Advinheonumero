const valorDigitado = document.querySelector("#valor");
const enviarButton = document.querySelector("#submit-button");
const resposta= document.querySelector("#itens")
const numRand= Math.floor(Math.random() * (20 + 1));


enviarButton.addEventListener("click", function(e){

    const valorUser= valorDigitado.value;


    if (valorUser<=20){
        if(numRand==valorUser){

            resposta.style.color= "green"; 
            resposta.textContent= "VOCE ACERTOU";
        }
        else if ( numRand>valorUser)
        {
            resposta.style.color= "red";
            resposta.textContent = "Errou. Um conselho o numero é MAIOR que esse."

        }
        else if (numRand<valorUser){

            resposta.style.color= "red";
            resposta.textContent = "Errou. Um conselho o numero é MENOR que esse." 

        }

    }
    else{
        resposta.style.color= "white";
        resposta.textContent = "Voce digitou um valor fora dos limites de 0 a 20." 
    }


});

