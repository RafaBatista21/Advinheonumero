const valorDigitado = document.querySelector("#valor");
const enviarButton = document.querySelector("#submit-button");
const resposta= document.querySelector("#itens")
const numRand= Math.floor(Math.random() * (20 + 1));


enviarButton.addEventListener("click", function(e){

    const valorUser= valorDigitado.value;
    console.log(valorUser);

    console.log(numRand);


    if(numRand==valorUser){

        resposta.textContent= "VOCE ACERTOU";
    }
    else if ( numRand>valorUser)
    {
        resposta.textContent = "Errou. Um conselho o numero é maior que esse."

    }
    else if (numRand<valorUser){

        resposta.textContent = "Errou. Um conselho o numero é menor que esse." 

    }
    else{

        resposta.textContent = "Voce digitou um valor fora dos limites de 1 a 20." 
    }    




});

