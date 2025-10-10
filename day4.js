const numeroAdivinhacao = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let chute = "";
let acertou = false;

alert("Vamos ao jogo de adivinhação. Eu estou pensando em um número inteiro que está entre 0 e 10, você tem 3 tentativas para adivinhar o número.");

for(let contador = 1; contador < 4; contador++){    
    chute = prompt("Chute um número de 0 a 10:");
    if(chute == numeroAdivinhacao){
        alert(`Parabéns, você acertou! O número era ${numeroAdivinhacao}.`);
        acertou = true;
        break;
    } else {
      alert(`Errado! Essa é a sua tentativa ${contador}`);
    }
    
}
if(!acertou){
    alert(`Que pena, você não acertou. O número era ${numeroAdivinhacao}!`);
}