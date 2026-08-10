document.addEventListener("DOMContentLoaded", function () {
  carregarClientes();
});

function carregarClientes() {
  var listaClientes = document.getElementById("cliente-lista");

  // Realiza uma chamada AJAX para o endpoint REST
  var request = new XMLHttpRequest();
  request.open("GET", "http://localhost:8080/clientes", true);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      data.forEach(function (cliente) {
        var li = document.createElement("li");
        li.className = "cliente-item";
        li.innerHTML =
          "<span><strong>ID:</strong> " +
          cliente.id +
          "</span>" +
          "<span><strong>Nome:</strong> " +
          cliente.nomeCompleto +
          "</span>" +
          "<span><strong>Rua:</strong> " +
          cliente.rua +
          "</span>" +
          "<span><strong>Bairro:</strong> " +
          cliente.bairro +
          "</span>" +
          "<span><strong>Gênero:</strong> " +
          cliente.genero +
          "</span>" +
          "<span><strong>Email:</strong> " +
          cliente.email +
          "</span>";
        listaClientes.appendChild(li);
      });
    } else {
      console.error("Erro ao carregar clientes: ", request.status);
    }
  };

  request.onerror = function () {
    console.error("Erro de conexão");
  };

  request.send();
}
