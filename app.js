//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


// Desafio Oracle, criar um Jogo do Amigo Secreto



//1. Criar uma array para armazenar os nomes dos amigos para o sorteio

let nomesParaSorteio = [];

let campoVazio = document.getElementById("amigo");


// Função para limpar o campo para que possa ser inserido outro nome no Jogo
function limparCampo() {
    let nomeAmigo = document.querySelector("input");
    nomeAmigo.value = "";
}


// Função para adicionar o Nome inserido, em uma lista para que possa ser sorteado
function adicionarAmigo() {
    // Obtém o valor do input
    const input = document.getElementById("amigo").value.trim();

    if (input === "") { // Verifica se o campo está vazio
        console.log("Ta funcionado, mas ta vazio");
        alert("Por favor, insira um nome para que seja sorteado!");
    } else {
        console.log("O botão adicionar foi clicado"); // Verifica se o botão está funcionando corretamente
        nomesParaSorteio.push(input); // Adiciona o nome ao array
        limparCampo(); // Limpa o campo de input
        console.log(nomesParaSorteio); // Exibe o status do array
    }
}


function sortearAmigo() {
    console.log("O botão sortear foi clicado")
}

function digitarNome() {
    let nomeAmigo = document.querySelector("input");
}