document.addEventListener("DOMContentLoaded", () => {
  exibirLista();
  divPai = document.getElementById("card");
  if (divPai.children.length == 0) {
    mensagemDefault();
  }
});

document.getElementById("button-clean").addEventListener("click", (event) => {
  event.preventDefault();
});

function exibirLista() {
  const lista = JSON.parse(localStorage.getItem("listaDeObjetos")) || [];

  const listaElemento = document.getElementById("card");
  listaElemento.innerHTML = "";

  lista.forEach(function (objeto) {
    const li = document.createElement("li");
    li.classList.add("card__content");

    // Criar elementos separados para cada campo do objeto
    const nomeElemento = document.createElement("p");
    nomeElemento.textContent = `Nome: ${objeto.nome}`;
    li.appendChild(nomeElemento);

    const emailElemento = document.createElement("p");
    emailElemento.textContent = `Email: ${objeto.email}`;
    li.appendChild(emailElemento);

    const mensagemElemento = document.createElement("p");
    mensagemElemento.textContent = `Mensagem: ${objeto.mensagem}`;
    li.appendChild(mensagemElemento);

    listaElemento.appendChild(li);
  });
}

function mensagemDefault() {
  const cardDiv = document.getElementById("card");
  const p = document.createElement("p");
  p.textContent = `Você não possui nenhuma mensagem salva.`;
  cardDiv.appendChild(p);
}

function limparLista() {
  localStorage.clear();
  exibirLista();
  mensagemDefault();
}
