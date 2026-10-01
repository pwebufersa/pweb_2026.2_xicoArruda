# Programação WEB 2026.2 - Unidade 2 - Exercício 1

**Valor:** 2,0 pontos

**Prazo:** até 09/10/2026 às 23:59:59h

---

## O que fazer

Utilize `curl` para realizar as consultas a seguir. Redirecione a saída de cada requisição para um arquivo de texto e use esses arquivos como base para a resposta. Exemplo:

```bash
curl -v "g1.br" > eita.txt 2>&1
```

---

### Consulta 1A - Primeiro nome (IBGE)

Consulte seu **primeiro nome** na API do IBGE (API versão 2 do censo de nomes):

```
https://servicodados.ibge.gov.br
```

Escolha três décadas disponíveis na resposta, informe as frequências e calcule a variação percentual entre as décadas mais antiga e mais recente escolhidas.

---

### Consulta 1B - Segundo nome (IBGE)

Consulte seu **segundo nome** na mesma API.

Repita o procedimento da Consulta 1A.

---

### Consulta 2 - CEP no BrasilAPI

Consulte o CEP da sua cidade na BrasilAPI (API versão 2 de CEP):

```
https://brasilapi.com.br
```

Extraia da resposta obtida o município, UF, logradouro, bairro e código IBGE.

---

## Entrega

Estruture sua resposta no arquivo `u2_exercicio1_resposta.md`. Para cada consulta, informe a URL completa utilizada, o método HTTP, o status e os cabeçalhos da resposta, o trecho da resposta utilizado, a data e o horário em GMT-4 e os resultados obtidos. Nas Consultas 1A e 1B, inclua também o cálculo da variação percentual.

O professor repetirá as requisições indicadas e comparará as respostas. Plágio será verificado.