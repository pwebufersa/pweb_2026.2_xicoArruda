// lógica de negócio (sem tocar no DOM)
function calcularSituacao(nota) {
  if (nota >= 7) return "Aprovado";
  if (nota >= 5) return "Recuperação";
  return "Reprovado";
}

// redesenha a árvore DOM e destaca um nó por id
function atualizarArvore(idDestaque) {
  const arvore = document.getElementById("arvore");
  arvore.innerHTML = renderizarNo(
    document.getElementById("pagina"),
    idDestaque,
    0
  );
}

function renderizarNo(elemento, idDestaque, nivel) {
  if (elemento.nodeType === Node.TEXT_NODE) {
    const texto = elemento.textContent.trim();
    if (!texto) return "";
    return "<div class='no texto'>\"" + escapar(texto) + "\"</div>";
  }

  if (elemento.nodeType !== Node.ELEMENT_NODE) return "";

  const tag = elemento.tagName.toLowerCase();
  const ehDestaque = elemento.id === idDestaque;

  // omite style e onclick para não poluir a visualização
  let atributos = "";
  for (const attr of elemento.attributes) {
    if (attr.name === "style" || attr.name === "onclick") continue;
    atributos +=
      " <span class='atributo'>" + attr.name + "</span>" +
      "=<span class='valor'>\"" + escapar(attr.value) + "\"</span>";
  }

  let filhos = "";
  for (const filho of elemento.childNodes) {
    filhos += renderizarNo(filho, idDestaque, nivel + 1);
  }

  return (
    "<div class='no" + (ehDestaque ? " destaque" : "") + "'>" +
      "<span class='tag'>&lt;" + tag + "&gt;</span>" +
      atributos +
      filhos +
      "<span class='tag'>&lt;/" + tag + "&gt;</span>" +
    "</div>"
  );
}

function escapar(texto) {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// interação: verificar nota
function verificar() {
  destacarFuncao("verificar");
  const nota = parseFloat(document.getElementById("campoNota").value);
  const elementoResultado = document.getElementById("resultado");

  if (Number.isNaN(nota)) {
    elementoResultado.textContent = "Digite uma nota válida.";
    elementoResultado.style.color = "#c00";
  } else {
    const situacao = calcularSituacao(nota);
    elementoResultado.textContent = situacao;
    elementoResultado.style.color =
      situacao === "Aprovado"    ? "green"  :
      situacao === "Recuperação" ? "orange" : "red";
  }

  atualizarArvore("resultado");
}

// destaca o campo enquanto o aluno digita
document.getElementById("campoNota").addEventListener("input", function () {
  atualizarArvore("campoNota");
  destacarFuncao("atualizarArvore");
});

// renderização inicial
atualizarArvore(null);

// carrega e exibe o próprio código-fonte no painel
fetch("dom.js")
  .then(function (r) { return r.text(); })
  .then(function (fonte) {
    document.getElementById("codigo-js").textContent = fonte;
  });

function destacarFuncao(nomeFuncao) {
  const pre = document.getElementById("codigo-js");
  const fonte = pre.textContent || pre.innerText;
  const linhas = fonte.split("\n");

  // encontra o início e o fim do bloco da função
  let inicio = -1;
  let profundidade = 0;
  let fim = -1;

  for (let i = 0; i < linhas.length; i++) {
    if (inicio === -1 && linhas[i].match(new RegExp("function " + nomeFuncao + "\\b"))) {
      inicio = i;
    }
    if (inicio !== -1) {
      for (const ch of linhas[i]) {
        if (ch === "{") profundidade++;
        if (ch === "}") profundidade--;
      }
      if (profundidade === 0 && i >= inicio) {
        fim = i;
        break;
      }
    }
  }

  if (inicio === -1) return;

  const antes   = linhas.slice(0, inicio).join("\n");
  const bloco   = linhas.slice(inicio, fim + 1).join("\n");
  const depois  = linhas.slice(fim + 1).join("\n");

  pre.innerHTML =
    escapar(antes) +
    "\n<mark>" + escapar(bloco) + "</mark>\n" +
    escapar(depois);
}
