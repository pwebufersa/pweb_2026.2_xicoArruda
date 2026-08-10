*Quando Stateless + Cache faz sentido*:

**1. Cenário simples (não precisa stateless distribuído)**

* Página institucional, blog, sistema interno pequeno.
* Poucos acessos simultâneos (<100 req/s).
* Um servidor ou instância lida bem.
* Sessões podem ficar na memória.
  **→ Use MVC tradicional ou REST simples, sem Redis nem cluster.**

**2. Crescimento moderado**

* API de app mobile, e-commerce pequeno, dashboard.
* Crescem os acessos e há picos.
* Começa a ter múltiplas instâncias de servidor.
* Sessões na memória quebram com load balance.
  **→ Introduz stateless e cache compartilhado (Redis, Memcached).**

**3. Escala alta / distribuída**

* Centenas de instâncias, milhares de usuários simultâneos.
* Load balancer distribui requisições aleatoriamente.
* Requer persistência consistente, performance e resiliência.
  **→ Stateless + cache + DB distribuído (replicação/sharding).**

**4. O que explicar em aula de REST**

* REST usa HTTP e é *stateless*.
* Cada requisição traz tudo que precisa (token, dados).
* Backend não guarda sessão na memória.
* Cache e DB externos permitem escalabilidade.
* Stateless não elimina estado, só **o tira da memória do servidor**.

A partir daí, o aluno entende **por que** a web moderna funciona com containers e APIs independentes — sem precisar entrar em 2PC, quorum ou consistência eventual.
