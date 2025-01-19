//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


// Desafio Oracle, criar um Jogo do Amigo Secreto



// Lista para armazenar os nomes dos participantes

let nomesParaSorteio = [];


// Função para exibir os nomes adicionados a lista
function exibirNomeNaLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = (nomesParaSorteio);
}

for (let i = 0; i < nomesParaSorteio; i++) {
    lista.innerHTML += `<li>${nomesParaSorteio}</li>`;
}

// Função para limpar o campo para que possa ser inserido outro nome no Jogo
function limparCampo() {
    let nomeAmigo = document.querySelector("input");
    nomeAmigo.value = "";
}

function limparLista() {
    nomesParaSorteio = [];
    let lista = document.getElementById("listaAmigos"); // Obtém o elemento <ul>
    lista.innerHTML = ""; // Limpa o conteúdo da lista exibida
    console.log("Limpou a lista");
}


// Função para adicionar o Nome inserido, em uma lista para que possa ser sorteado
function adicionarAmigo() {
    // Obtém o valor do input
    let input = document.getElementById("amigo").value;

    if (input === "") { // Verifica se o campo está vazio
        console.log("Ta funcionado, mas ta vazio");
        alert("Por favor, insira um nome para que seja sorteado!");
    } else {
        console.log("O botão adicionar foi clicado"); // Verifica se o botão está funcionando corretamente
        nomesParaSorteio.push(input); // Adiciona o nome à lista
        limparCampo(); // Limpa o campo de input
        console.log(nomesParaSorteio); // Exibe os nomes da lista
        exibirNomeNaLista();
    }
}


function sortearAmigo() {
    console.log("O botão sortear foi clicado");
    limparLista();
    console.log(nomesParaSorteio);
}