# Programação WEB - Aula 8
## Estruturas de Controle e Funções em JavaScript

> **Duração:** 30 minutos | **Semana:** 12/10 a 17/10 | `xico@ufersa.edu.br`

---

## MENU DE AULA

- 8.1 Onde paramos
- 8.2 if / else
- 8.3 for e while
- 8.4 Funções
- 8.5 Funções e DOM
- 8.6 Live coding
- 8.7 IA e programação
- 8.8 Resumo

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
curl -v http://localhost:3000
curl -v http://localhost:3001/ola/XicoDeAssis
```

O servidor recebeu a requisição, tomou uma decisão e respondeu. Isso é `if/else` e funções no back-end.

```
navegador                    servidor
    |------- request -------->|
    |                         |  if (rota === "/ola") { ... }
    |<------ response --------|
 if/else no DOM           if/else no Express
```

Lado direito: visto. Esta aula: lado esquerdo.

---

## Slide 3 - Estrutura, Aparência e Comportamento

> *[imagem: ícones HTML/CSS/JS - padrão das aulas 3-5]*

| Camada | Tecnologia | Papel |
|---|---|---|
| Estrutura | HTML | O quê |
| Aparência | CSS | Como parece |
| Comportamento | **JavaScript** | O que faz |

- Aulas 2-5: estrutura e aparência
- Aulas 7-8: comportamento

---

## Slide 4 - Variáveis (revisão)

> *[imagem: console do DevTools com `typeof`]*

```js
let nome  = "Maria"; // string
let nota  = 7.5;     // number
let ativa = true;    // boolean
```

- `let` - pode mudar
- `const` - não muda
- `var` - evite (escopo imprevisível)

---

## Slide 5 - if / else

> *[imagem: fluxograma de decisão]*

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

- `===` compara valor **e** tipo
- `"7" == 7` resulta em `true` (coerção - evite)
- `"7" === 7` resulta em `false` (correto)

---

## Slide 6 - for e while

> *[imagem: print do console com iterações listadas]*

```js
for (let i = 0; i < 5; i++) {
  console.log("Item " + i);
}

let tentativas = 0;
while (tentativas < 3) {
  tentativas++;
}
```

- Loop infinito trava a página. A condição precisa mudar a cada iteração.

---

## Slide 7 - Funções

> *[imagem: caixa entrada/processamento/saída]*

```js
function calcularSituacao(nota) {
  if (nota >= 7) return "Aprovado";
  if (nota >= 5) return "Recuperação";
  return "Reprovado";
}

// arrow function - mesma coisa, sintaxe moderna
const situacao = (nota) => {
  if (nota >= 7) return "Aprovado";
  if (nota >= 5) return "Recuperação";
  return "Reprovado";
};
```

- Uma função, uma responsabilidade.
- Nome descreve **o que faz**, não como.

---

## Slide 8 - Funções e o DOM

> *[imagem: página com input, botão e parágrafo de resultado]*

```html
<input type="number" id="nota">
<button onclick="verificar()">Verificar</button>
<p id="resultado"></p>
```

```js
function verificar() {
  const nota = parseFloat(document.getElementById("nota").value);
  const el   = document.getElementById("resultado");
  el.textContent = calcularSituacao(nota);
}
```

- `getElementById` - localiza pelo id
- `textContent` - altera o texto
- `onclick` - conecta HTML ao JS

---

## Slide 9 - Live coding

> *[imagem: tela do CodeSandbox]*

**codesandbox.io**

1. Input texto (nome)
2. Input number (nota, 0-10)
3. Botão "Verificar"
4. Parágrafo com resultado

Depois, a mesma lógica no servidor:

```bash
# -s = silent (sem barra de progresso)
curl -s http://localhost:3000/nota/7.5
```

---

## Slide 10 - IA e programação

> *[imagem: dado appfigures da aula 1 - muitos apps, poucos downloads]*

A IA gera código. O que ela não faz:

- decide o que o código precisa fazer
- detecta quando o código faz a coisa errada
- percebe se o resultado faz sentido no contexto

Pedir à IA para gerar o exercício 1 é válido. Não saber explicar nenhuma linha do que ela gerou é problema.

**Teste:** peça à IA o exercício 1. Leia o código. Explique cada linha sem consultar nada.

---

## Slide 11 - Erros comuns

> *[imagem: Console do Chrome com erro vermelho]*

| Erro | Causa |
|---|---|
| `ReferenceError: x is not defined` | variável usada antes de declarar |
| `TypeError: null is not an object` | `getElementById` não encontrou o elemento |
| Página trava | loop infinito |
| `=` em vez de `===` | atribuição em vez de comparação |

F12, aba Console. Leia o erro antes de tentar corrigir.

---

## Slide 12 - Resumo

- `if / else if / else` - tomada de decisão
- `for` / `while` - repetição
- Funções - lógica reutilizável, uma responsabilidade
- `getElementById` + `onclick` - conecta JS ao HTML
- A mesma lógica do Express existe no DOM

Próxima aula: eventos e manipulação do DOM.

---

## Slide 13 - Encerramento

**Programação WEB**
`xico@ufersa.edu.br`

---
---

# Exercícios - Aula 8

## Por que isso importa agora

Um CRUD sem lógica não funciona:

```
Create - campos preenchidos? email válido?
Read   - lista vazia? registro existe?
Update - valor mudou? permissão?
Delete - id válido? tem certeza?
```

Toda validação é `if/else`. Toda lista renderizada é `for`. Toda lógica reutilizada é função. React, Vue e Angular usam os mesmos conceitos: `if/else`, `.map()` (for com outra roupa). Quem pula essa base fica refém de tutorial.

Sobre IA: ela gera o código. Copiar sem entender funciona na entrega, quebra na prova.

---

## Ex. 1 - Verificador de nota

No **codesandbox.io**, complete a função `verificar`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Verificador de Nota</title>
</head>
<body>
  <h1>Verificador de Nota</h1>
  <label for="nome">Nome:</label>
  <input type="text" id="nome">
  <label for="nota">Nota:</label>
  <input type="number" id="nota" min="0" max="10" step="0.1">
  <button onclick="verificar()">Verificar</button>
  <p id="resultado"></p>

  <script>
    function verificar() {
      const nome = document.getElementById("nome").value.trim();
      const nota = parseFloat(document.getElementById("nota").value);
      const el   = document.getElementById("resultado");

      // complete aqui
      // "Maria: Aprovada" / "Recuperação" / "Reprovada"
      // campo vazio: "Preencha todos os campos."
    }
  </script>
</body>
</html>
```

**Desafio:** altere `el.style.color` para verde, amarelo ou vermelho conforme a situação.

---

## Ex. 2 - curl vs. navegador vs. fetch

**Terminal (Git Bash):**
```bash
# -v = verbose: método, status e cabeçalhos
curl -v https://jsonplaceholder.typicode.com/users/1
```

Identifique: método (`GET`), status (`200`), corpo (JSON).

**Navegador:** abra a mesma URL no Chrome. F12, aba Network, recarregue. Encontre os mesmos campos.

**Console do DevTools:**
```js
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(r => r.json())
  .then(user => console.log(user.name, user.email));
```

**Pergunta:** o que `-v` mostra que o `fetch` omite? Onde achar isso no DevTools?

---

## Ex. 3 - Rota Express com if/else

A mesma lógica do Ex. 1, no back-end. Crie `server.js`:

```js
const express = require("express");
const app = express();

// função pura - sem dependência do Express
function calcularSituacao(nota) {
  if (nota >= 7) return "Aprovado";
  if (nota >= 5) return "Recuperação";
  return "Reprovado";
}

// GET /nota/7.5  ->  { "nota": 7.5, "situacao": "Aprovado" }
app.get("/nota/:valor", (req, res) => {
  const nota = parseFloat(req.params.valor);
  if (isNaN(nota) || nota < 0 || nota > 10) {
    return res.status(400).json({ erro: "Nota inválida." });
  }
  res.json({ nota, situacao: calcularSituacao(nota) });
});

app.listen(3000, () => console.log("http://localhost:3000"));
```

```bash
node server.js

# em outro terminal
curl -s http://localhost:3000/nota/7.5
curl -s http://localhost:3000/nota/4.0
curl -s http://localhost:3000/nota/abc
```

`calcularSituacao` não sabe nada sobre HTTP. Recebe número, devolve string. Separação de responsabilidades.

**Desafio:** rota `GET /notas?valores=9,6.5,3` que devolve array com a situação de cada nota.

---

## Ex. 4 - Lista de tarefas com for

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Tarefas</title>
</head>
<body>
  <h1>Tarefas</h1>
  <input type="text" id="nova" placeholder="Nova tarefa">
  <button onclick="adicionar()">Adicionar</button>
  <ul id="lista"></ul>

  <script>
    const tarefas = [];

    function adicionar() {
      const input = document.getElementById("nova");
      const texto = input.value.trim();
      if (texto === "") return;
      tarefas.push(texto);
      input.value = "";
      renderizar();
    }

    function renderizar() {
      const lista = document.getElementById("lista");
      lista.innerHTML = "";
      for (let i = 0; i < tarefas.length; i++) {
        const item = document.createElement("li");
        item.textContent = tarefas[i];
        lista.appendChild(item);
      }
    }
  </script>
</body>
</html>
```

`tarefas` é a memória da página. O `for` reconstrói a lista a cada mudança. `innerHTML = ""` limpa antes de redesenhar.

**Desafio:** botão "Remover" em cada item que chama `tarefas.splice(i, 1)` e re-renderiza.

---

## Checklist antes de avançar

- [ ] Escrever `if/else if/else` com `===` sem consultar nada
- [ ] Explicar `==` vs `===` com um exemplo
- [ ] Escrever um `for` que percorre um array
- [ ] Criar função com parâmetros e retorno
- [ ] Usar `getElementById` para ler input e escrever num parágrafo
- [ ] Rodar `curl -v` e identificar método, status e corpo
- [ ] Ler um erro no Console do DevTools (F12)

---

## Notas de produção

> Não entra no vídeo.

| Slide | Imagem |
|---|---|
| 2 | diagrama cliente-servidor da aula 7, navegador destacado |
| 3 | ícones HTML/CSS/JS - padrão das aulas 3-5 |
| 4 | print do DevTools com `typeof` |
| 5 | fluxograma if/else (Excalidraw ou draw.io) |
| 6 | print do Console com iterações 0-4 |
| 7 | diagrama entrada/processamento/saída |
| 8 | print de página com input, botão e resultado visível |
| 9 | print do CodeSandbox com o exercício |
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
| 6 for/while | 2:30 |
| 7 Funções | 3:00 |
| 8 Funções e DOM | 3:00 |
| 9 Live coding | 7:00 |
| 10 IA e programação | 2:00 |
| 11 Erros comuns | 2:00 |
| 12 Resumo | 1:30 |
| 13 Encerramento | 0:30 |
| **Total** | **~29:30** |
