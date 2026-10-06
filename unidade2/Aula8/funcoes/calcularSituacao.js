function calcularSituacao(nota) {
  if (nota >= 7) return "Aprovado";
  if (nota >= 5) return "Recuperação";
  return "Reprovado";
}

const chamadas = [
  { nota: 7.5 },
  { nota: 6.0 },
  { nota: 3.0 }
];

const saida = document.getElementById("saida");

for (let i = 0; i < chamadas.length; i++) {
  const nota = chamadas[i].nota;
  const resultado = calcularSituacao(nota);
  const linha = document.createElement("p");
  linha.textContent = "calcularSituacao(" + nota + ") → " + resultado;
  saida.appendChild(linha);
}
