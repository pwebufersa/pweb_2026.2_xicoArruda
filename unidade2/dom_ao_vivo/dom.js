// ─── lógica de negócio (sem tocar no DOM) ──────────────────────────────────
function calcularSituacao(nota) {
  if (nota >= 7) return "Aprovado";
  if (nota >= 5) return "Recuperação";
  return "Reprovado";
}

// ─── registra cada chamada DOM no painel de log ─────────────────────────────
function registrarLog(metodo, argumento, retorno) {
  const log = document.getElementById("log");
  const linha = document.createElement("div");
  linha.className = "entrada-log";
  linha.innerHTML =
    "<span class='metodo'>document." + metodo + "</span>" +
    "(<span class='argumento'>\"" + argumento + "\"</span>)" +
    (retorno !== undefined
      ? " → <span class='retorno'>" + retorno + "</span>"
      : "");
  log.appendChild(linha);
  // mantém só as últimas 6 linhas
  while (log.children.length > 7) log.removeChild(log.children[1]);
}

// ─── redesenha a árvore DOM e destaca um nó por id ──────────────────────────
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
  const classeDestaque = ehDestaque ? " destaque" : "";

  // atributos relevantes (omite style e onclick para não poluir a visualização)
  let atributos = "";
  for (const attr of elemento.attributes) {
    if (attr.name === "style" || attr.name === "onclick") continue;
    atributos +=
      " <span class='atributo'>" + attr.name + "</span>" +
      "=<span class='valor'>\"" + escapar(attr.value) + "\"</span>";
  }

  // filhos
  let filhos = "";
  for (const filho of elemento.childNodes) {
    filhos += renderizarNo(filho, idDestaque, nivel + 1);
  }

  return (
    "<div class='no'>" +
      "<span class='tag" + classeDestaque + "'>&lt;" + tag + "&gt;</span>" +
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

// ─── interação: verificar nota ───────────────────────────────────────────────
function verificar() {
  const campo = document.getElementById("campoNota");
  registrarLog("getElementById", "campoNota", "input#campoNota");
  atualizarArvore("campoNota");

  const nota = parseFloat(campo.value);

  const elementoResultado = document.getElementById("resultado");
  registrarLog("getElementById", "resultado", "p#resultado");

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

  registrarLog("textContent =", elementoResultado.textContent);
  atualizarArvore("resultado");
}

// ─── destaca o campo enquanto o aluno digita ─────────────────────────────────
document.getElementById("campoNota").addEventListener("input", function () {
  atualizarArvore("campoNota");
});

// ─── renderização inicial ────────────────────────────────────────────────────
atualizarArvore(null);
