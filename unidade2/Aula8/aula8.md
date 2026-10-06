# Aula 8 - JavaScript: conceitos fundamentais

## Slide 2 - Cliente-servidor

> *[imagem: diagrama cliente-servidor da aula 7, lado do navegador destacado]*

Na aula 7, uma requisição foi enviada pelo terminal:

```bash
# -v = verbose: mostra método, status e cabeçalhos
curl -v http://localhost:3001/ola/XicoDeAssis
```

O servidor recebeu a URL, identificou o nome e enviou uma resposta. Para isso, o código do Express tomou uma decisão: se a rota for `/ola/:nome`, responde com uma saudação.

Essa decisão envolve uma estrutura condicional e uma função executadas no servidor, pelo Node.js.

```text
navegador                    servidor (Node.js)
    |------- requisição ------>|
    |                         |  app.get("/ola/:nome", ...)
    |<------ resposta ---------|
  comportamento             comportamento
  no navegador              no servidor
```

A linguagem JavaScript pode ser executada tanto no navegador quanto no servidor.

---

## Slide 3 - Estrutura, aparência e comportamento

> *[imagem: ícones HTML/CSS/JS - padrão das aulas 3-5]*

Desde a aula 3, trabalha-se com três camadas:

| Camada | Tecnologia | Papel |
|---|---|---|
| Estrutura | HTML | Define o conteúdo e a estrutura da página |
| Aparência | CSS | Define a apresentação visual |
| Comportamento | **JavaScript** | Define o comportamento e a interação |

JavaScript permite programar o comportamento da página no navegador.

---

## Slide 4 - Variáveis

> *[imagem: console do DevTools com typeof]*

```js
let nome  = "Joao";  // texto
let nota  = 7.5;     // número
let ativo = true;    // verdadeiro/falso
```

- `let` - variável que pode receber outro valor.
- `const` - variável que não pode ser reatribuída.
- `var` - declaração antiga, com escopo de função; deve ser evitada em código moderno.

JavaScript possui tipagem dinâmica: os valores possuem tipos e as variáveis podem receber valores de tipos diferentes ao longo da execução.

Essa característica facilita alguns usos e também permite erros que linguagens com tipagem estática detectariam antes da execução.

O TypeScript surgiu como uma extensão do JavaScript com suporte a tipagem estática e verificação de tipos durante o desenvolvimento. Em projetos maiores, seu uso é bastante comum. Nesta disciplina, JavaScript puro é suficiente.

---

## Slide 5 - if / else

> *[imagem: fluxograma de decisão com três saídas: aprovado, recuperação, reprovado]*

Em Programação de Computadores, estruturas condicionais foram apresentadas em Java. JavaScript possui estruturas equivalentes, com sintaxe bastante semelhante.

```js
const nota = 7.5;

if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
```

### `==` e `===`

JavaScript possui dois operadores comuns de igualdade:

```js
"7" == 7    // true  - permite coerção de tipo
"7" === 7   // false - compara valor e tipo
```

O operador `===` deve ser preferido. Ele evita comparações com coerção implícita de tipos.

---

## Slide 6 - for e while

> *[imagem: captura do console com cinco iterações listadas]*

A ideia dos laços é a mesma apresentada em Programação de Computadores.

### `for`

Usado quando a estrutura da repetição é conhecida:

```js
for (let i = 0; i < 5; i++) {
  console.log("Iteração " + i);
}
// Iteração 0, Iteração 1, ... Iteração 4
```

As três partes são:

- inicialização: `let i = 0`
- condição: `i < 5`
- incremento: `i++`

### `while`

Usado quando a repetição depende de uma condição:

```js
let tentativas = 0;

while (tentativas < 3) {
  console.log("Tentativa " + tentativas);
  tentativas++;
}
```

A condição precisa eventualmente se tornar falsa. Caso contrário, o laço pode executar indefinidamente e bloquear a execução do código no navegador.

---

## Slide 7 - Funções

> *[imagem: diagrama entrada/processamento/saída]*

Em Java, utiliza-se o conceito de método. Em JavaScript, uma forma tradicional de declarar uma função utiliza a palavra-chave `function`.

Uma função deve ter uma responsabilidade clara e um nome que indique sua finalidade.

```js
function calcularSituacao(nota) {
  if (nota >= 7) return "Aprovado";
  if (nota >= 5) return "Recuperação";
  return "Reprovado";
}
```

- `function` - declara a função.
- `nota` - parâmetro que recebe o valor de entrada.
- `return` - devolve o resultado.

Chamando a função:

```js
console.log(calcularSituacao(7.5)); // "Aprovado"
console.log(calcularSituacao(6.0)); // "Recuperação"
console.log(calcularSituacao(3.0)); // "Reprovado"
```

`calcularSituacao` não depende de HTML nem do navegador. Recebe um número e devolve um texto.

---

## Slide 8 - Conectando JavaScript ao HTML

> *[imagem: página com campo de nota, botão verificar e parágrafo de resultado]*

JavaScript pode acessar e modificar a página por meio do DOM - Document Object Model.

O DOM representa os elementos da página como objetos que podem ser consultados e manipulados pelo JavaScript.

### `getElementById`

Localiza um elemento pelo atributo `id`:

```js
document.getElementById("campoNota").value
```

### `textContent`

Altera o texto de um elemento:

```js
document.getElementById("resultado").textContent = "Aprovado";
```

### `onclick`

Permite associar uma ação ao clique de um botão:

```html
<button onclick="verificar()">Verificar</button>
```

---

## Slide 9 - Exemplo completo

> *[imagem: página rodando no navegador com "Aprovado" visível]*

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Verificador de Nota</title>
</head>
<body>

  <h1>Verificador de Nota</h1>

  <label for="campoNota">Nota (0 a 10):</label>
  <input type="number" id="campoNota" min="0" max="10" step="0.1">

  <button onclick="verificar()">Verificar</button>

  <p id="resultado"></p>

  <script>
    function calcularSituacao(nota) {
      if (nota >= 7) return "Aprovado";
      if (nota >= 5) return "Recuperação";
      return "Reprovado";
    }

    function verificar() {
      const nota = parseFloat(document.getElementById("campoNota").value);
      const resultado = document.getElementById("resultado");

      if (Number.isNaN(nota)) {
        resultado.textContent = "Digite uma nota válida.";
        return;
      }

      resultado.textContent = calcularSituacao(nota);
    }
  </script>

</body>
</html>
```

- `parseFloat` - converte uma representação textual em número decimal.
- `Number.isNaN` - verifica se o resultado da conversão é `NaN`.
- `calcularSituacao` concentra a regra de negócio e não depende do HTML.
- `verificar` faz a ligação entre a página e a função de cálculo.

O arquivo pode ser salvo como `index.html` e aberto no navegador. O console do DevTools pode ser acessado com F12.

---

## Slide 10 - Erros comuns

> *[imagem: captura do Chrome com erro vermelho no console]*

O console do DevTools apresenta mensagens úteis para localizar erros.

| Erro | Causa provável |
|---|---|
| `ReferenceError: verificar is not defined` | A função não está disponível no escopo em que foi chamada, ou ocorreu algum erro anterior no script |
| `TypeError: Cannot read properties of null` | `getElementById` não encontrou o elemento |
| Página trava ao clicar | Possível laço infinito ou operação que bloqueia a execução |
| Comparação com `==` produz resultado inesperado | Coerção implícita de tipos |
| `NaN` no resultado | Conversão de um valor que não representa um número |

---

## Slide 11 - Resumo

- `if / else if / else` - estruturas condicionais.
- `for` e `while` - estruturas de repetição.
- `let` e `const` - declarações modernas de variáveis.
- `function`, parâmetros e `return` - definição e uso de funções.
- `getElementById`, `textContent` e `onclick` - recursos básicos para interação com o DOM.
- `parseFloat` e `Number.isNaN` - conversão e validação de valores numéricos.
- Próxima aula: eventos e manipulação de listas no DOM.

---

## Exercício - Atividade Online 4

Faça o projeto em [codesandbox.io](https://codesandbox.io) ou outro editor e cole seu código completo no Moodle.

Substituir o conteúdo do `index.html` por:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Verificador de Nota</title>
</head>
<body>

  <h1>Verificador de Nota</h1>

  <label for="campoNome">Nome completo:</label>
  <input type="text" id="campoNome">

  <label for="campoNota">Nota (0 a 10):</label>
  <input type="number" id="campoNota" min="0" max="10" step="0.1">

  <button onclick="verificar()">Verificar</button>

  <p id="resultado"></p>

  <script>
    function calcularSituacao(nota) {
      if (nota >= 7) return "Aprovado";
      if (nota >= 5) return "Recuperação";
      return "Reprovado";
    }

    function verificar() {
      const nome = document.getElementById("campoNome").value.trim();
      const nota = parseFloat(document.getElementById("campoNota").value);
      const resultado = document.getElementById("resultado");

    }
  </script>

</body>
</html>
```

---

## O que entregar

Completar a função `verificar()` com:

- Se o nome estiver vazio, exibir uma mensagem de erro.
- Se a nota for inválida, exibir uma mensagem de erro.
- Caso os dados sejam válidos, calcular a situação usando `calcularSituacao()`.
- Exibir o nome junto com a situação.
- Usar uma cor diferente para cada situação (verde para aprovado, laranja para recuperação, vermelho para reprovado).