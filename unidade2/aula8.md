# Programação WEB - Aula 8
## Aprofundando JavaScript

---

## Slide 1 - Capa

**Programação WEB - Aula 8**
Aprofundando JavaScript
`xico@ufersa.edu.br`

---

## Slide 2 - Cliente-servidor

> *[imagem: diagrama cliente-servidor da aula 7, lado do navegador destacado]*

Na aula 7, isso rodou no terminal:

```bash
# -v = verbose: mostra método, status e cabeçalhos
curl -v http://localhost:3001/ola/XicoDeAssis
```

O servidor recebeu a URL, leu o nome e respondeu. Para fazer isso, o código do Express tomou uma decisão: _se a rota for `/ola/:nome`, responde com saudação_. Isso é `if/else` e função no servidor, rodando no Node.js.

```
navegador                    servidor (Node.js)
    |------- requisição ------>|
    |                         |  app.get("/ola/:nome", ...)
    |<------ resposta ---------|
  comportamento             comportamento
  no navegador              no servidor
```

A linguagem JavaScript é a mesma dos dois lados.

---

## Slide 3 - Estrutura, Aparência e Comportamento

> *[imagem: ícones HTML/CSS/JS - padrão das aulas 3-5]*

Desde a aula 3, trabalha-se com três camadas:

| Camada | Tecnologia | Papel |
|---|---|---|
| Estrutura | HTML | Define o que existe na página |
| Aparência | CSS | Define como parece |
| Comportamento | **JavaScript** | Define o que faz quando o usuário interage |

A sintaxe do JavaScript não é a mais bonita - mas é o que o navegador entende, e é o que está em todo site do mundo.

---

## Slide 4 - Variáveis (revisão rápida)

> *[imagem: console do DevTools com typeof]*

```js
let nome  = "Joao";  // texto
let nota  = 7.5;     // número
let ativo = true;    // verdadeiro/falso
```

- `let` - pode mudar de valor
- `const` - não muda
- `var` - evite, escopo imprevisível

O JavaScript detecta o tipo automaticamente pois tem tipagem dinâmica, é conveniente mas fonte de erros clássicos.

Essa ausência de tipos explícitos incomoda tanto que surgiu o TypeScript: JavaScript com declaração de tipos obrigatória, verificada em tempo de codificação antes do código rodar. Em projetos maiores, TypeScript é padrão. Nesta disciplina, JavaScript puro é suficiente.

---

## Slide 5 - if / else

> *[imagem: fluxograma de decisão com três saídas: aprovado, recuperação, reprovado]*

Em Programação de Computadores o `if/else` foi apresentado em Java. JavaScript tem a mesma estrutura, só muda a saída:

```js
// Java:  System.out.println("Aprovado");
// JS:    console.log("Aprovado");
```

Com três casos:

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

**`==` vs `===`** - uma armadilha clássica do JavaScript:

```js
"7" == 7    // true  - coerção de tipo: JS converte antes de comparar
"7" === 7   // false - compara valor E tipo
```

Sempre use `===`.

---

## Slide 6 - for e while

> *[imagem: captura do console com cinco iterações listadas]*

Mesma ideia de Programação de Computadores, mesma sintaxe de Java.

**for** - número de repetições conhecido:

```js
for (let i = 0; i < 5; i++) {
  console.log("Iteração " + i);
}
// Iteração 0, Iteração 1, ... Iteração 4
```

Três partes separadas por `;`: inicialização (`let i = 0`), condição (`i < 5`), incremento (`i++`).

**while** - número de repetições desconhecido:

```js
let tentativas = 0;

while (tentativas < 3) {
  console.log("Tentativa " + tentativas);
  tentativas++;
}
```

Se a condição nunca se tornar falsa, o laço roda para sempre e trava o navegador. Laço infinito quase sempre é incremento esquecido.

---

## Slide 7 - Funções

> *[imagem: diagrama entrada/processamento/saída]*

Em Programação de Computadores: método. Em JavaScript: `function`.

Uma função faz uma coisa só. O nome descreve o que ela faz.

```js
let valorNota = 7.5; // let: pode ser reatribuída depois
// const valorNota = 7.5; // const: valor fixo - preferível quando não muda

function calcularSituacao(nota) {
  if (nota >= 7) return "Aprovado";
  if (nota >= 5) return "Recuperação";
  return "Reprovado";
}
```

Por que não `var`? `var` tem escopo de função, não de bloco. Uma variável declarada com `var` dentro de um `if` vaza para fora dele. `let` e `const` se comportam como Java - ficam no bloco onde foram declaradas.

- `function` - palavra-chave para declarar
- `nota` - parâmetro: o valor que entra
- `return` - devolve o resultado para quem chamou

Chamando:

```js
console.log(calcularSituacao(valorNota)); // "Aprovado"
console.log(calcularSituacao(6.0));       // "Recuperação"
console.log(calcularSituacao(3.0));       // "Reprovado"
```

`calcularSituacao` não sabe nada sobre HTML, sobre a página, sobre o usuário. Recebe número, devolve texto.

---

## Slide 8 - Conectando ao HTML: getElementById e onclick

> *[imagem: página com campo de nota, botão verificar e parágrafo de resultado]*

JavaScript sozinho não muda a tela. As pontes para o HTML vêm do DOM - Document Object Model, o modelo que representa a página como objetos manipuláveis.

**`getElementById`** - encontra um elemento pelo `id`:

```js
document.getElementById("nota").value  // lê o que o usuário digitou
```

**`textContent`** - escreve texto num elemento:

```js
document.getElementById("resultado").textContent = "Aprovado";
```

**`onclick`** - executa uma função no clique:

```html
<button onclick="verificar()">Verificar</button>
```

---

## Slide 9 - O exemplo completo

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

      if (isNaN(nota)) {
        resultado.textContent = "Digite uma nota válida.";
        return;
      }

      resultado.textContent = calcularSituacao(nota);
    }
  </script>

</body>
</html>
```

- `parseFloat` - converte o texto do campo para número decimal. Sem isso, `"7.5"` é texto e a comparação com `>= 7` falha silenciosamente.
- `isNaN` - campo vazio ou com letras faz `parseFloat` retornar `NaN`. A verificação evita resultado sem sentido.
- `calcularSituacao` não sabe que existe HTML. A mesma função funcionaria num servidor Express.
- `verificar` faz a ponte: lê o HTML, chama o cálculo, escreve o resultado.

Salvar como `index.html` e abrir no Chrome. F12 para ver erros no console.

---

## Slide 10 - Erros comuns

> *[imagem: captura do Chrome com erro vermelho no console]*

F12, aba Console. Leia o erro antes de tentar corrigir.

| Erro | Causa |
|---|---|
| `ReferenceError: verificar is not defined` | Função chamada antes de ser declarada no `<script>` |
| `TypeError: Cannot read properties of null` | `getElementById` não achou o elemento - `id` diferente entre HTML e JavaScript |
| Página trava ao clicar | Laço infinito - condição do `while` nunca muda |
| Resultado sempre "Reprovado" | `==` com coerção de tipo - use `===` |
| `NaN` no resultado | `parseFloat` ausente - campo devolve texto |

---

## Slide 11 - Resumo

- `if / else if / else` - mesma lógica de Programação de Computadores, sintaxe igual a Java
- `for` e `while` - mesmos laços de Programação de Computadores
- `let` e `const` ficam no bloco onde foram declarados; `var` vaza - evite
- `function` com parâmetros e `return` - mesmo conceito de método
- `getElementById`, `textContent`, `onclick` - pontes entre JavaScript e HTML
- `parseFloat` e `isNaN` - ler e validar campo numérico
- Próxima aula: eventos e manipulação de listas no DOM

---

# Exercício - Aula 8

## O que fazer

Construir uma página que verifica a situação de um aluno - nome e nota - e exibe o resultado. O fluxo é o mesmo do exemplo da aula: o usuário digita, o botão chama a função, a função lê o HTML, calcula e escreve o resultado.

---

## Ponto de partida

[codesandbox.io](https://codesandbox.io) - projeto estático. Substituir o `index.html` por:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Verificador de Nota</title>
</head>
<body>

  <h1>Verificador de Nota</h1>

  <label for="campoNome">Nome:</label>
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

## O que implementar

Complete a função `verificar()`.

Se o nome estiver vazio ou a nota for inválida, exiba uma mensagem e encerre a função. Caso contrário, calcule a situação e exiba o nome junto com o resultado. A cor do texto deve refletir a situação: verde para aprovado, laranja para recuperação e vermelho para reprovado.

```js
resultado.style.color = "green";
```
