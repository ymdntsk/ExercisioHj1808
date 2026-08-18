const nome = document.getElementById("nome");
const card = document.getElementById("card");


card.addEventListener("click", criartitulo);


function criartitulo() {
    const novoTitulo = document.createElement("h2");
    /* Incluir ELemento no titulo */
    novoTitulo.textContent = nome.value;
    /* incluir elemento na pagina html */
   card.appendChild(novoTitulo);

}

const tarefa = document.getElementById("tarefa");
const btnTarefa = document.getElementById("btn-tarefa");
const ul = document.getElementById("ul-tarefas");

btnTarefa.addEventListener("click", criarTarefa);

function criarTarefa() {
    const valorTarefa = tarefa.value;

    const novaTarefa = document.createElement("li");

    novaTarefa.textContent = valorTarefa;

    ul.appendChild(novaTarefa);

}