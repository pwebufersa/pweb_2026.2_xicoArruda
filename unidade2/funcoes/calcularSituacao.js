function calcularSituacao(nota) {
  if (nota >= 7) return "Aprovado";
  if (nota >= 5) return "Recuperação";
  return "Reprovado";
}

var chamadas = [
  { nota: 7.5 },
  { nota: 6.0 },
  { nota: 3.0 }
];

var saida = document.getElementById("saida");

for (var i = 0; i < chamadas.length; i++) {
  var nota = chamadas[i].nota;
  var resultado = calcularSituacao(nota);
  var linha = document.createElement("p");
  linha.textContent = "calcularSituacao(" + nota + ") → " + resultado;
  saida.appendChild(linha);
}
