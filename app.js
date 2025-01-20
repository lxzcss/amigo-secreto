//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


// Desafio Oracle, criar um Jogo do Amigo Secreto



// Lista para armazenar os nomes dos participantes

let nomesParaSorteio = [];


// Função para exibir os nomes adicionados a lista
function exibirNomeNaLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    // loop para que seja adicionar em formato de lista cada nome inserido no Jogo
    for (let i = 0; i < nomesParaSorteio.length; i++) {
        // como o índicie 'i' é = a 0, ele começa sempre do primeiro valor da array
        // enquanto i for menor que o número total de conteúdo da array, ele continuará no loop
        // ao final de tudo ele soma um valor ao índice para que vá até o último valor da array
        let listaNomes = document.createElement("li");
        // 'createElement' cria uma tag para que possa ser manipulado diretamente do JS
        listaNomes.textContent = nomesParaSorteio[i];
        // 'textContent' adiciona conteúdo à tag criada
        lista.appendChild(listaNomes);
        // 'appendChild' relaciona uma coisa a outra como 'pai e filho'
    }
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

function limparNome() {

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

function sorteioDosNomes() {
    let amigoAleatorio = Math.floor(Math.random() * nomesParaSorteio.length);
    return nomesParaSorteio[amigoAleatorio]; // retorna o nome que foi sorteado acima
}

function nomeNaTela() {
    let nomeDoAmigo = document.getElementById("resultado");
    let nomeSorteado = sorteioDosNomes(); // a variável agora recebe o nome sorteado
    nomeDoAmigo.innerHTML = (`O seu amigo secreto é: ${nomeSorteado}`);
    console.log(nomeDoAmigo);
}

function sortearAmigo() {
    if (nomesParaSorteio.length !== 0) {    // veriifica se a lista está vazia para que possa sortear um nome
        nomeNaTela();
    } else {
        console.log("A lista está vazia mano");
    }

}