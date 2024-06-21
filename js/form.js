// validação do formulario
function validaFormulario() {
  const nomev = document.getElementById("campo-nome").value;
  const emailv = document.getElementById("campo-email").value;
  const mensagemv = document.getElementById("campo-mensagem").value;

  // validar campo email
  function validateEmail() {
    var re = /\S+@\S+\.\S+/;
    return re.test(emailv);
  }
  if (nomev != "" && validateEmail() && mensagemv != "") {
    return true;
  }
  return false;
}

// limpar campos de texto após envio
function limparCampos() {
  const nomev = document.getElementById("campo-nome");
  const emailv = document.getElementById("campo-email");
  const mensagemv = document.getElementById("campo-mensagem");

  nomev.value = "";
  emailv.value = "";
  mensagemv.value = "";
}

// exibir mensagem
function exibeMensagem() {
  const msg = document.getElementById("mensagem-status");
  if (validaFormulario()) {
    msg.textContent = "Enviando mensagem...";
    setTimeout(() => {
      msg.textContent = "Mensagem Enviada!";
      adicionarObjeto();
      limparCampos();
    }, 1500);
    setTimeout(() => {
      msg.textContent = "";
    }, 3000);
  } else {
    msg.textContent = "Preencha todos os campos corretamente!";
    setTimeout(() => {
      msg.textContent = "";
    }, 2000);
  }
}

// document.querySelector(".button-submit").addEventListener("click", (event) => {
//   event.preventDefault();
// });

// Obtém a URL da página atual
var currentURL = window.location.href;

// Define o valor do input hidden para a URL atual
document.getElementById('nextURL').value = currentURL;


// Função para adicionar um novo objeto à lista
function adicionarObjeto() {
  const nome = document.getElementById("campo-nome").value;
  const email = document.getElementById("campo-email").value;
  const mensagem = document.getElementById("campo-mensagem").value;
  // Cria um objeto com os dados fornecidos
  let objeto = {
    nome: nome,
    email: email,
    mensagem: mensagem,
  };

  // Recupera a lista de objetos do localStorage ou inicializa uma nova lista vazia
  var lista = JSON.parse(localStorage.getItem("listaDeObjetos")) || [];

  // Adiciona o novo objeto à lista
  lista.push(objeto);

  // Armazena a lista atualizada no localStorage
  localStorage.setItem("listaDeObjetos", JSON.stringify(lista));
}

// botão start event
function startEvent() {
  exibeMensagem();
}