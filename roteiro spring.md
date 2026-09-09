### 2. Construir uma casa

Imagine uma pessoa que recebeu um terreno e quer construir uma casa.

Ela tem duas opções: construir do jeito tradicional ou construir com um sistema pré-montado.

**Opção 1 - jeito tradicional**
A pessoa nivela o terreno, faz a fundação, assenta os tijolos, monta o telhado. Ela decide a ordem das tarefas, escolhe os materiais e executa tudo. Durante a obra, pode usar ferramentas prontas: furadeira, betoneira, serrote. Cada ferramenta faz uma tarefa específica quando o construtor decide usar.

**Opção 2 - sistema pré-montado**
O proprietário compra um kit de casa pré-fabricada. O kit vem com painéis de parede, lajes prontas, estrutura metálica, telhado de fibrocimento, pontos fixos para tomadas e torneiras, altura de pia pré-definida. O kit acompanha um manual de montagem com a sequência obrigatória: primeiro os pilares, depois os painéis, depois o telhado, depois as instalações. Quem monta não decide a ordem principal - segue o manual. Ainda há espaço para personalizar: cor das paredes, tipo de piso, acabamento.

A diferença está em quem controla o fluxo. Na construção tradicional, o construtor controla o fluxo e usa ferramentas quando quiser. No sistema pré-montado, o construtor preenche lacunas nos momentos definidos pelo manual. O controle passou das mãos do construtor para o sistema construtivo - isso é inversão de controle.

Se além de pré-montado, o canteiro já viesse preparado - fundação pronta, material encaixotado perto da obra - isso agiliza o início e reduz decisões. É o scaffolding.

Depois que a casa fica pronta, é preciso ligar a energia, a água, testar a carga elétrica. Isso é o bootstrapping.

Quando o proprietário precisa de peças, faz um pedido à construtora seguindo um formato definido: `telha, fibrocimento, verde, 10, 5, 2`. A construtora entrega o resultado sem que ele precise saber como a telha é fabricada. Isso é uma API.

O sistema pré-moldado garante homogeneidade e padronização. Um encanador que trabalha em qualquer casa desse kit sabe exatamente onde ficam os pontos, independente da unidade.

### 3. Mapeamento dos conceitos

| Elemento da metáfora | Conceito de computação |
|----------------------|------------------------|
| Ferramentas (furadeira, betoneira, serrote) | Biblioteca |
| Inversão do fluxo da obra | Inversão de Controle |
| Sistema pré-montado (kit + manual) | Framework |
| Kit específico para casas em Angicos | Spring Framework |
| Canteiro de obras já preparado | Scaffolding |
| Ligação de energia, água e equipamentos | Bootstrapping |
| Pedido feito para a indústria | API |
| Colocar a casa para funcionar | Spring Boot |

### 4. Biblioteca e framework

Uma **biblioteca** fornece código reutilizável para tarefas específicas. A aplicação controla o fluxo e invoca a biblioteca quando precisa. É como a furadeira: o construtor decide quando usar. Exemplos: geração de números aleatórios, consulta a banco PostgreSQL.

Um **framework** define a estrutura da aplicação e controla o fluxo de execução. O código do programador é invocado pelo framework nos pontos definidos por ele - não o contrário.

### 5. Scaffolding e bootstrapping

**Scaffolding** é a estrutura inicial gerada para um projeto: diretórios, arquivos de configuração, dependências e código base. Reduz decisões repetitivas e padroniza o ponto de partida.

**Bootstrapping** é a inicialização da aplicação: carregamento de configurações, criação de componentes, resolução de dependências e inicialização de serviços.

### 6. API

Uma **API** define a interface por meio da qual um componente ou serviço é utilizado por outro. Especifica como solicitar uma funcionalidade, quais parâmetros fornecer e o que será retornado. A implementação interna permanece encapsulada.

Na metáfora: o proprietário faz um pedido seguindo um contrato conhecido (`telha, fibrocimento, verde, 10, 5, 2`) e recebe o resultado sem conhecer o processo de fabricação.

### 6.1. Spring Framework

O Spring Framework é um framework para desenvolvimento de aplicações Java. Fornece mecanismos para criação e gerenciamento de objetos, injeção de dependências, configuração de componentes e integração entre partes da aplicação.

O **Spring Initializr** (start.spring.io) fornece o scaffolding: gera a estrutura inicial do projeto com linguagem, versão do Java, dependências e metadados configuráveis.

O **Spring Boot** fornece o bootstrapping: simplifica a configuração, inicialização e execução de aplicações Spring, incluindo servidor embutido e gerenciamento automático de dependências.

### 7. Por que o Spring é de graça?

O Spring é um projeto de **código aberto**. O código-fonte pode ser usado, estudado, modificado e distribuído. A empresa responsável pelo ecossistema obtém receita com suporte pago, treinamento, certificação, ferramentas complementares e serviços gerenciados.

Empresas como Google, Amazon e Netflix usam Spring em produção. Quando encontram problemas, contribuem com correções de volta ao projeto. O uso em larga escala acelera a identificação de bugs, aumenta a resiliência e melhora o projeto para toda a comunidade.

### 8. Resumo

- Biblioteca
- Framework
- Inversão de Controle
- Scaffolding
- Bootstrapping
- API
- Spring Framework
- Spring Boot

---

## Slide 4. Construir com um sistema pré-montado

Kit de casa pré-fabricada fornece:

* painéis de parede
* lajes prontas
* estrutura metálica
* telhado de fibrocimento
* pontos definidos para tomadas e torneiras

Manual define a sequência de montagem obrigatória.

Personalização ocorre dentro dos limites do sistema.

---

## Slide 5. Mapeamento dos conceitos

| Elemento da metáfora | Conceito de computação |
|---|---|
| Ferramentas: furadeira, betoneira, serrote | Biblioteca |
| Inversão do fluxo da obra | Inversão de Controle |
| Sistema pré-montado: kit e manual | Framework |
| Kit específico para casas em Angicos | Spring Framework |
| Canteiro de obras já preparado | Scaffolding |
| Ligação de energia, água e equipamentos | Bootstrapping |
| Pedido feito para a indústria | API |
| Colocar a casa para funcionar | Spring Boot |

---

## Slide 6. Biblioteca

Código reutilizável para tarefas específicas.

A aplicação controla quando a funcionalidade é invocada.

Exemplos:

* geração de números aleatórios
* consulta a banco PostgreSQL
* geração de PDF

---

## Slide 7. Framework

Estrutura que define o fluxo de execução da aplicação.

O framework invoca o código do programador nos pontos definidos por ele.

---

## Slide 8. Inversão de Controle

**Biblioteca**

```
Aplicação  →  biblioteca  →  funcionalidade
```

**Framework**

```
Framework  →  aplicação  →  código executado nos pontos definidos
```

O controle do fluxo passa para o framework.

---

## Slide 9. Scaffolding

Estrutura inicial gerada para um projeto.

Inclui:

* diretórios e arquivos
* configurações
* dependências
* código base

Reduz decisões repetitivas e padroniza o ponto de partida.

---

## Slide 10. Bootstrapping

Inicialização da aplicação e preparação dos componentes para execução.

Envolve:

* carregamento de configurações
* criação de componentes
* resolução de dependências
* inicialização de serviços

---

## Slide 11. API

Interface que define como um componente ou serviço é utilizado.

Define:

* como solicitar
* quais parâmetros fornecer
* quais regras seguir
* o que será retornado

A implementação interna permanece encapsulada.

---

## Slide 12. Spring Framework

Framework para desenvolvimento de aplicações Java.

Fornece:

* criação e gerenciamento de objetos
* injeção de dependências
* configuração de componentes
* integração entre partes da aplicação

---

## Slide 13. Spring Initializr

Scaffolding para projetos Spring.

[start.spring.io](https://start.spring.io)

Gera estrutura inicial com:

* linguagem e versão do Java
* versão do Spring Boot
* dependências
* metadados do projeto

---

## Slide 14. Spring Boot

Bootstrapping para aplicações Spring.

Simplifica:

* configuração automática
* gerenciamento de dependências
* servidor embutido
* inicialização da aplicação

---

## Slide 15. Por que o Spring é de graça?

Projeto de código aberto: o código pode ser usado, estudado, modificado e distribuído.

Receita do ecossistema:

* suporte pago
* treinamento e certificação
* ferramentas complementares
* serviços gerenciados

---

## Slide 16. Ecossistema

Google, Amazon e Netflix usam Spring em produção.

Uso em larga escala:

* expõe problemas reais
* gera contribuições de volta ao projeto
* aumenta resiliência e qualidade

---

## Slide 17. Conceitos fundamentais

* Biblioteca
* Framework
* Inversão de Controle
* Scaffolding
* Bootstrapping
* API
* Spring Framework
* Spring Boot
