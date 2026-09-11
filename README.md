# Foge do Mouse

Projeto front-end criado pra estudar e fixar conteúdo do curso de JavaScript e Node que estou fazendo. Nada de framework, nada de biblioteca — só HTML, CSS e JS puro pra treinar DOM, eventos e lógica mesmo.

## Sobre o projeto

Na tela aparece um emoji de coração que sai correndo toda vez que o mouse chega perto. Apertando "q" você abre um overlay que te dá uma noção do tempo perdido tentando pegar o emoji.

## Funcionalidades

- Elemento que detecta a posição do mouse e foge do cursor pela tela.
- Overlay (aberto com a tecla "q") mostrando quantas tentativas frustradas você já acumulou.
- Uso do localStorage pra guardar estatísticas, posição e emoji mesmo depois de fechar a página.
- Lógica separada em arquivos distintos (`main.js` cuida da fuga, `stats.js` cuida da contagem).
- CSS isolado em arquivo próprio (`assets/css/style.css`).
- Uso da tag `<template>` do HTML pra montar o overlay.

## Habilidades praticadas

- Manipulação do DOM (selecionar, criar e atualizar elementos).
- Eventos de mouse e teclado (posição/movimento do cursor e captura de tecla).
- Persistência de dados no navegador com localStorage.
- Posicionamento dinâmico de elementos com JS e CSS.
- Organização de código em múltiplos arquivos JS.
- HTML semântico, incluindo `<template>`.
- Controle de estado simples (contagem de tentativas).

## Tecnologias

- HTML5
- CSS3
- JavaScript (vanilla)

## Sobre o uso de IA

O README foi escrito com ajuda de IA. O código do projeto foi todo escrito por mim, sem IA — a ideia aqui era treinar os conceitos na unha mesmo.

## Como executar

Abre o `index.html` no navegador. Sem dependência, sem build, sem enrolação.
