# Programação WEB - Aula 8
## Estruturas de Controle e Funções em JavaScript

> **Duração:** 30 minutos | **Semana:** 12/10 a 17/10 | `xico@ufersa.edu.br`

---

## MENU DE AULA

- 8.1 Onde paramos
- 8.2 Variáveis (revisão rápida)
- 8.3 if / else
- 8.4 for e while
- 8.5 Funções
- 8.6 Conectando ao HTML: getElementById e onclick
- 8.7 O exemplo completo
- 8.8 IA e programação
- 8.9 Resumo e exercício

---

## Slide 1 - Capa

**Programação WEB - Aula 8**
Estruturas de Controle e Funções
`xico@ufersa.edu.br`

---

## Slide 2 - Onde paramos

> *[imagem: diagrama cliente-servidor da aula 7, lado do navegador destacado]*

Na aula 7, isso rodou no terminal:

```bash
# -v = verbose: mostra método, status e cabeçalhos
curl -v http://localhost:3001/ola/XicoDeAssis
```

O servidor recebeu a URL, leu o nome e respondeu. Para fazer isso, o código do Express tomou uma decisão: _se a rota for `/ola/:nome`, responde com saudação_. Isso é `if/else` e função no back-end, rodando no Node.js.

```
navegador                    servidor (Node.js)
    |------- requisição ------>|
    |                         |  app.get("/ola/:nome", ...)
    |<------ resposta ---------|
  comportamento             comportamento
  no front-end              no back-end
```

Aula 7: comportamento no servidor.
Esta aula: comportamento no navegador - o lado esquerdo do diagrama.

A linguagem é a mesma: JavaScript. O ambiente de execução muda.

---

## Slide 3 - Estrutura, Aparência e Comportamento

> *[imagem: ícones HTML/CSS/JS - padrão das aulas 3-5]*

Desde a aula 3, trabalhamos com três camadas:

| Camada | Tecnologia | Papel |
|---|---|---|
| Estrutura | HTML | Define o quê existe na página |
| Aparência | CSS | Define como parece |
| Comportamento | **JavaScript** | Define o que faz quando o usuário interage |

Aulas 2 a 5 foram estrutura e aparência. Aulas 7 e 8 são comportamento.

O JavaScript da aula 5 foi uma introdução: um botão que mudava o título da página. Esta aula aprofunda isso. A sintaxe do JavaScript não é a mais bonita - mas é o que o navegador entende, e é o que está em todo site do mundo.

---

## Slide 4 - Variáveis (revisão rápida)

> *[imagem: console do DevTools com typeof]*

Antes de entrar em estruturas de controle, um recall rápido de variáveis, porque elas aparecem em todo código daqui pra frente.

```js
let nome  = "Maria";  // texto (string)
let nota  = 7.5;      // número (number)
let ativo = true;     // verdadeiro/falso (boolean)
```

- `let` declara uma variável que pode mudar de valor
- `const` declara uma constante - o valor não muda
- `var` é o modo antigo, evite - tem comportamento de escopo imprevisível

Você não precisa dizer o tipo: o JavaScript detecta automaticamente. Isso é chamado de tipagem dinâmica. É conveniente e também é fonte de bugs clássicos - veremos um logo.

---

## Slide 5 - if / else

> *[imagem: fluxograma de decisão com três saídas: aprovado, recuperação, reprovado]*

O `if/else` é o bloco de tomada de decisão. Todo aluno que cursou Programação de Computadores viu isso - mas em Java. A sintaxe em JavaScript é quase idêntica.

**Em Java (que vocês já viram):**
```java
if (nota >= 7) {
    System.out.println("Aprovado");
} else {
    System.out.println("Reprovado");
}
```

**Em JavaScript:**
```js
if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}
```

A diferença é `System.out.println` versus `console.log`. A lógica é a mesma.

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

**Um detalhe importante: `==` vs `===`**

JavaScript tem dois operadores de igualdade. Essa é uma das armadilhas clássicas da linguagem:

```js
"7" == 7    // true  — coerção de tipo: JS tenta converter antes de comparar
"7" === 7   // false — compara valor E tipo: string não é igual a number
```

Sempre use `===`. O `==` faz conversões automáticas que produzem resultados inesperados.

---

## Slide 6 - for e while

> *[imagem: print do console com cinco iterações listadas]*

Laços de repetição também existem em Programação de Computadores. Em Java vocês usaram `for` e `while`. JavaScript tem os mesmos.

**for** - quando você sabe quantas vezes vai repetir:

```js
for (let i = 0; i < 5; i++) {
  console.log("Iteração " + i);
}
// exibe: Iteração 0, Iteração 1, Iteração 2, Iteração 3, Iteração 4
```

A estrutura do `for` tem três partes separadas por `;`:
1. `let i = 0` - inicialização: começa em zero
2. `i < 5` - condição: continua enquanto for verdade
3. `i++` - incremento: soma 1 a cada volta

**while** - quando você não sabe quantas vezes vai repetir:

```js
let tentativas = 0;

while (tentativas < 3) {
  console.log("Tentativa " + tentativas);
  tentativas++;
}
```

**Aviso:** se a condição do `while` nunca se tornar falsa, o laço roda para sempre. Isso trava a aba do navegador. É o loop infinito. Acontece quando você esquece o incremento (`tentativas++`).

---

## Slide 7 - Funções

> *[imagem: diagrama entrada/processamento/saída]*

Uma função é um bloco de código com nome que você pode chamar quantas vezes quiser. Em Programação de Computadores você viu isso como método.

A ideia principal: **uma função faz uma coisa só**. Se o nome não descreve claramente o que ela faz, o nome está errado.

```js
function calcularSituacao(nota) {
  if (nota >= 7) return "Aprovado";
  if (nota >= 5) return "Recuperação";
  return "Reprovado";
}
```

- `function` é a palavra-chave para declarar
- `calcularSituacao` é o nome - descreve o que a função faz
- `nota` é o parâmetro - o valor que entra
- `return` devolve um resultado para quem chamou

Chamando a função:

```js
const resultado = calcularSituacao(7.5);
console.log(resultado); // "Aprovado"

console.log(calcularSituacao(6.0)); // "Recuperação"
console.log(calcularSituacao(3.0)); // "Reprovado"
```

A função não sabe nada sobre HTML, sobre a página, sobre o usuário. Ela recebe um número e devolve uma string. Essa separação é deliberada - e vai aparecer de novo quando conectarmos ao HTML.

---

## Slide 8 - Conectando ao HTML: getElementById e onclick

> *[imagem: página com input de nota, botão verificar e parágrafo de resultado]*

JavaScript sozinho não muda nada na tela. Ele precisa de pontes para o HTML. Essas pontes são fornecidas pelo DOM - Document Object Model, o modelo que representa a página como objetos que o JavaScript pode manipular.

Três peças:

**1. `getElementById`** - encontra um elemento HTML pelo atributo `id`:

```js
const campo = document.getElementById("nota");
const valor = campo.value; // lê o que o usuário digitou
```

**2. `textContent`** - escreve texto dentro de um elemento:

```js
const paragrafo = document.getElementById("resultado");
paragrafo.textContent = "Aprovado";
```

**3. `onclick`** - executa uma função quando o usuário clica:

```html
<button onclick="verificar()">Verificar</button>
```

Quando o usuário clica no botão, o JavaScript chama `verificar()`. Essa função lê o input, calcula e escreve o resultado.

Agora veja como essas três peças se juntam.

---

## Slide 9 - O exemplo completo

> *[imagem: página rodando no navegador com resultado visível]*

Este é o exemplo da aula. Uma página completa que o aluno pode abrir no navegador, ver funcionando e entender cada parte.

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

**Lendo o código linha por linha:**

- `parseFloat(...)` - converte o texto digitado no input para número decimal. Sem isso, `"7.5"` é uma string e a comparação `>= 7` vai falhar silenciosamente.
- `isNaN(nota)` - verifica se o valor é "Not a Number". Se o campo estiver vazio ou com letras, `parseFloat` retorna `NaN`.
- `calcularSituacao` não sabe que existe um HTML. Ela recebe um número e devolve texto. Isso permite reusar a mesma lógica no servidor (como fizemos com Express na aula 7).
- As duas funções têm responsabilidades distintas: `calcularSituacao` calcula; `verificar` faz a ponte entre o HTML e o cálculo.

Para testar: salve como `index.html` e abra no Chrome. F12 abre o console para ver mensagens de erro.

---

## Slide 10 - IA e programação

> *[imagem: dado appfigures da aula 1 - muitos apps, poucos downloads]*

Lembram do dado da aula 1? +30% de apps lançados, +3% de downloads. Q1 de 2026: 2x mais apps, +2% de downloads. Mais apps, mesma fatia de usuários.

A IA vai gerar esse código para você. Em segundos, com comentários, com CSS, com validações extras. O problema não é o código gerado.

O problema é você não saber o que fazer quando o código gerado _não funciona_ - ou pior, funciona errado mas você não percebe.

A IA não decide o que o código precisa fazer. Não detecta quando a lógica está errada. Não sabe se o resultado faz sentido no contexto do seu problema.

**Teste prático:** peça à IA para gerar o exemplo desta aula. Leia o código. Explique cada linha sem consultar nada. Se travar em alguma, você encontrou o que ainda precisa aprender.

---

## Slide 11 - Erros comuns

> *[imagem: Console do Chrome com erro vermelho]*

O Console do DevTools (F12, aba Console) é onde os erros aparecem. Leia o erro antes de tentar corrigir.

| Erro | Causa |
|---|---|
| `ReferenceError: verificar is not defined` | A função foi chamada no `onclick` antes de existir no `<script>` - verifique a ordem |
| `TypeError: Cannot read properties of null` | `getElementById` não encontrou o elemento - o `id` no HTML e no JS estão diferentes |
| Página trava ao clicar | Loop infinito - verifique a condição do `while` |
| Resultado sempre "Reprovado" | Comparação com `==` e coerção de tipo - use `===` |
| `NaN` no resultado | Esqueceu o `parseFloat` - o input retorna string |

Errar faz parte. O erro que você entende hoje não vai te travar amanhã.

---

## Slide 12 - Resumo e exercício

> *[imagem: mapa visual aulas 7-8]*

O que vimos nesta aula:

- `if / else if / else` - tomada de decisão (mesmo conceito de Programação de Computadores, sintaxe diferente)
- `for` / `while` - repetição com controle de condição
- `function` - bloco com nome, parâmetros e retorno
- `getElementById` + `textContent` + `onclick` - pontes entre JavaScript e HTML
- `parseFloat` + `isNaN` - leitura e validação de input numérico

A lógica de `calcularSituacao` é a mesma que usaríamos num servidor Express. A separação entre _calcular_ e _exibir_ é intencional: funções com uma responsabilidade são mais fáceis de testar, reusar e entender.

**Próxima aula:** eventos, manipulação de listas e arrays no DOM.

---
---

# Exercício - Aula 8

## O que você vai fazer

Você vai construir uma página que verifica a situação de um aluno - nome e nota - e exibe o resultado. É exatamente o que foi demonstrado na aula, mas com um campo a mais e um detalhe de cor.

O objetivo não é decorar sintaxe. É entender o fluxo: usuário digita, botão chama função, função lê o HTML, calcula, escreve de volta no HTML.

---

## Ponto de partida

Abra o [codesandbox.io](https://codesandbox.io), crie um projeto "Vanilla" e substitua o `index.html` por este código:

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

      // --- complete o código a partir daqui ---

      // 1. Se nome estiver vazio OU nota for NaN:
      //    resultado.textContent = "Preencha todos os campos."
      //    return

      // 2. Calcule a situação usando calcularSituacao(nota)

      // 3. Exiba: "Maria: Aprovada" (use o nome e a situação)
      //    resultado.textContent = nome + ": " + situacao
    }
  </script>

</body>
</html>
```

---

## O que você precisa implementar

Dentro da função `verificar()`, após o comentário, implemente:

1. Validação: se o nome estiver vazio ou a nota for inválida (`isNaN`), exibe `"Preencha todos os campos."` e para.
2. Cálculo: chama `calcularSituacao(nota)` e guarda o resultado numa variável.
3. Exibição: mostra `nome + ": " + situacao` no parágrafo de resultado.

A função `calcularSituacao` já está pronta - não altere ela.

---

## Desafio (opcional)

Após exibir o resultado, altere a cor do texto de acordo com a situação:

```js
// após definir resultado.textContent:
if (situacao === "Aprovado")     resultado.style.color = "green";
if (situacao === "Recuperação")  resultado.style.color = "orange";
if (situacao === "Reprovado")    resultado.style.color = "red";
```

---

## Checklist antes de entregar

- [ ] Botão chama `verificar()` e a função executa sem erro no Console (F12)
- [ ] Campo vazio exibe a mensagem de erro, não trava
- [ ] Nota 7.5 exibe "Aprovado"
- [ ] Nota 6.0 exibe "Recuperação"
- [ ] Nota 3.0 exibe "Reprovado"
- [ ] O nome aparece junto com a situação no resultado

---

## Notas de produção

> Não entra no vídeo.

| Slide | Imagem |
|---|---|
| 2 | diagrama cliente-servidor da aula 7, navegador destacado |
| 3 | ícones HTML/CSS/JS - padrão das aulas 3-5 |
| 4 | print do DevTools com typeof |
| 5 | fluxograma if/else com três saídas (Excalidraw ou draw.io) |
| 6 | print do Console com iterações 0-4 |
| 7 | diagrama entrada/processamento/saída |
| 8 | print de página com input, botão e resultado visível |
| 9 | print da página rodando com "Maria: Aprovada" em verde |
| 10 | dado appfigures da aula 1 |
| 11 | print de erro vermelho no Console do Chrome |
| 12 | mapa mental aulas 7-8 (Excalidraw) |

| Slide | min |
|---|---|
| 1 Capa | 0:30 |
| 2 Onde paramos | 1:30 |
| 3 Estrutura/Aparência/Comportamento | 1:00 |
| 4 Variáveis | 1:30 |
| 5 if/else | 3:00 |
| 6 for e while | 2:30 |
| 7 Funções | 3:00 |
| 8 getElementById e onclick | 2:30 |
| 9 O exemplo completo | 5:00 |
| 10 IA e programação | 2:00 |
| 11 Erros comuns | 2:00 |
| 12 Resumo e exercício | 1:30 |
| **Total** | **~26:00** |







O que mudou e por quê:

Mesclagem teoria-exercício: o Slide 9 agora é o exemplo completo que vive dentro da aula, não um live coding genérico. A seção de exercícios parte exatamente desse código, acrescentando só o campo de nome - o aluno já viu o esqueleto antes de abrir o CodeSandbox.

Sem arrow function: removida inteiramente. Só function com sintaxe tradicional.

Revisão de Programação de Computadores: o Slide 5 (if/else) compara explicitamente com Java, que é o que os alunos já sabem. O Slide 6 (for/while) também referencia a disciplina. Reduz o estranhamento da sintaxe nova.

Descrições maiores para falar na aula: cada slide ganhou um parágrafo de contexto - por que aquilo importa, o que conecta com o que veio antes. Bullets continuam para os slides, mas o texto ao redor é para você falar.

Exemplo menor e completo: saiu o exemplo separado em blocos HTML + JS. O Slide 9 mostra uma página inteira, do <!DOCTYPE> ao </html>, com leitura linha por linha logo abaixo. O aluno vê e entende no mesmo lugar.

Exercício único e focado: o Ex. 2 (curl/fetch), Ex. 3 (Express) e Ex. 4 (lista de tarefas) foram removidos. O exercício online agora tem um só objetivo - completar a função verificar() - que é o que a aula ensinou. O desafio de cor ficou como opcional para quem terminar antes.