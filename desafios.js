// 1. Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert("Boas vindas ao nosso site!");

// 2. Declare uma variável chamada nome e atribua a ela o valor "Lua".
let nome = "Lua";
console.log(nome);

// 3. Crie uma variável chamada idade e atribua a ela o valor 25.
let idade = 25;
console.log(idade);

// 4. Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas = 50;
console.log(numeroDeVendas);

// 5. Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 1000;
console.log(saldoDisponivel);

// 6. Exiba um alerta com o texto "Erro! Preencha todos os campos"
alert("Erro! Preencha todos os campos");

// 7. Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos". Agora exiba um alerta com o valor da variável mensagemDeErro.
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);

// 8. Use um novo prompt para perguntar o nome do usuário e armazená-lo em uma variável.
let nomeUsuario = prompt("Qual o seu nome?");
console.log(nomeUsuario);

// 9. Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
idade = prompt("Qual a sua idade?");
console.log(idade);

// 10. Valide a idade capturada. Caso a idade seja maior ou igual a 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if (idade >= 18) {
    alert(`${nomeUsuario} pode tirar a habilitação!`);
} else {
    alert(`${nomeUsuario} não pode tirar a habilitação!`);
}
