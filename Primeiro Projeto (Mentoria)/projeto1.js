const valorDigitado = document.querySelector("#valor");
const enviarButton = document.querySelector("#submit-button");
const resposta= document.querySelector("#itens")
const numRand= Math.floor(Math.random() * (20 + 1));


enviarButton.addEventListener("click", function(){

    const valorUser= valorDigitado.value;


    if (valorUser<=20){
        if(numRand==valorUser){

            resposta.style.color= "green"; 
            resposta.textContent= "VOCE ACERTOU!!!!";
            setTimeout(function(){ window.location.reload();
            },5000);
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
        resposta.textContent = "Voce digitou um valor fora dos limites de 1 a 20." 
    }


});



window.onload = function () {
    var duration = 30; // Converter para segundos
        display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer


};


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
        if(minutes == 0 & seconds==0) 
        {
    
            alert("SEU TEMPO ACABOU.... TENTE NOVAMENTE") 
            window.location.reload();
        }        

    }, 1000);
}






