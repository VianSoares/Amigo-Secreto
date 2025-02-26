// Cria um array vazio para armazenar os nomes dos amigos
let listaNomes = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    listaNomes.push(nome);
    atualizarLista();
    inputNome.value = "";
}

// Função para atualizar a lista de amigos na interface
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaNomes.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (listaNomes.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaNomes.length);
    let amigoSecreto = listaNomes[indiceSorteado];

    document.getElementById("resultado").innerHTML = `<li>Amigo Secreto: ${amigoSecreto}</li>`;
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    listaNomes = [];
    atualizarLista();
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").value = "";
}

// Adiciona um evento para o pressionamento da tecla Enter no campo de nome
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
});
