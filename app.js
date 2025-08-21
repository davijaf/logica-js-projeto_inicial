alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = Math.floor(Math.random() * 11);
console.log(numeroSecreto);
let chute = prompt("Digite um número entre 0 e 10");
let numeroTentativas = 3;
while (numeroTentativas > 0) {
    if (chute == numeroSecreto) {
        console.log("Isso aí! Você acertou o número secreto.");
        alert("Isso aí! Você acertou o número secreto.");
        break;
    } else {
        numeroTentativas--;
        if (numeroTentativas > 0) {
            chute = prompt("Que pena! Tente novamente. Você ainda tem " + numeroTentativas + " tentativas.");
        }
    }
}
if (chute != numeroSecreto) {
    console.log("Que pena! O número secreto era " + numeroSecreto);
    alert(`Que pena! O número secreto era ${numeroSecreto}`);
}