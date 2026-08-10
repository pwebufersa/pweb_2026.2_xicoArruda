### U1 - Aula 2 - 10/10/2025 (2,0)

Veja o que são os seguintes conteúdos: Framework, API, SDK, Design System, Scaffolding, Boilerplate, GUI, CLI, Arquitetura web em 3 camadas, Spring, Spring Boot, Template Engine, CRUD, MVC.

Na aula, vimos: CadPessoas - Projeto Spring, HTML, CSS, MVC, Index, Maven.

### Parte 1 - CRUD Spring Boot

1. Crie o projeto (_scaffolding_) no [Spring Initializr](https://start.spring.io/) seguindo as [instruções](https://drive.google.com/open?id=17htKMi-29yO4uio_4ObtZQA5SBqs5jgm). São 7 dependências, maven, java 21. Substitua o nome do professor pelo seu nome.
2. Baixe e descompacte o projeto criado no Spring Initializr na pasta _u1_exercicio2_, dentro da pasta onde fica o seu repositório da disciplina.
3. Abra o projeto no VSCode.
4. Crie ou edite os arquivos .java, .html e .css conforme visto na aula e nos vídeos. Os arquivos do u1_exercicio1 servirão de base para esse passo.
5. Tome como base os [arquivos de configuração](https://drive.google.com/open?id=1KHCRiDnNdD0np01QIibX6PQisLJKGed-) para configurar seu projeto.
6. Se quiser alterar o banner.txt, pode ir [nesse site](https://patorjk.com/software/taag/#p=display&f=Big&t=PWEB+2025.2&x=none&v=4&h=4&w=80&we=false).
7. Após criar e configurar o projeto Spring no VSCode, modificar os arquivos HTML, não esqueça de fazer _commit_ e _push_ para o GitHub. Faça os passos e vá fazendo _commits_.
8. Teste a execução com ./mvnw spring-boot:run -DskiptTests
9. Abra o navegador em localhost:8080
10. Não use Lombok. Vai dar problema e hoje em dia é desnecessário.
11. Faça o R do CRUD. Não esqueça de fazer _commit_ e _push_ no GitHub.
12. Seguindo os vídeos, ao fazer a casse Pessoa.java, você encontrará [esse erro](https://drive.google.com/open?id=1coLOLVNkBxD2dMllrnK-K4Vg-VeJEA-_). Para solucionar, substitua os imports da classe javax.? por jakarta.? para ficar igual a essa [imagem](https://drive.google.com/open?id=1ocvzaB6NPCJOnxmhq71ZiOMji6rCrH8o). Isso é necessário por mudanças na versão 3 do Spring, apresentados [aqui](https://mkyong.com/spring-boot/spring-boot-package-javax-persistence-does-not-exist/)
13. Faça o C do CRUD. Não esqueça de fazer _commit_ e _push_ no GitHub.
14. Faça o U e o D do CRUD. Não esqueça de fazer _commit_ e _push_ no GitHub.
15. Ao final do projeto, a estrutura de arquivos e diretórios deve ser [essa](https://drive.google.com/open?id=17dJrwgpZTMi8ZsBrLPAGze9HF-SsyqlO).
16. A pasta com todos os rquivos de apoio do projeto CadPessoas com Spring estão [aqui](https://drive.google.com/open?id=17-KGWKYdf9qTHCMfD6ZVPP4DsKt-rjpZ).
 
### Vídeos para fazer o CRUD:

#### [Vídeo - Parte 1 de 5 - Projeto Spring CadPessoas](https://drive.google.com/open?id=1GlAtyVXCuSgecBHpqQ3AHgXAFJgkMuUh)

#### [Vídeo - Parte 2 de 5 - Ajustes HTML e CSS](https://drive.google.com/open?id=1KAldumLoLzS7jMwj8y4fNvh1-FxFat2u)

#### [Vídeo - Parte 3 de 5 - MVC e Index](https://drive.google.com/open?id=1KHcTyx_Y7z6aqB3445f5E9VVjpl9a_an)

#### [Vídeo - Parte 4 de 5 - R e C do CRUD](https://drive.google.com/open?id=1KRmQyi2G9mO3uT0ZH-FAy9HJplP9tv1L)

#### [Vídeo - Parte 5 de 5 - U e D do CRUD](https://drive.google.com/open?id=1KY32PbN7857Ao-XALZUBcUiD8Xvouexc)

### Vídeos antigos:

#### [Vídeo Antigo - Exercício 3 (r do crud)](https://drive.google.com/file/d/1s0j2dqfTjcpiWqMlyD0KhSJJy4AV0g9p)

#### [Vídeo Antigo - Exercício 3 (c,u,d do crud)](https://drive.google.com/file/d/1MRpWvcjpqkehnb9pfSC1Jj38eeOylg_0)


