# Foge do Mouse

Projeto front-end criado pra estudar e fixar conteúdo do curso de JavaScript e Node que estou fazendo. Nada de framework, nada de biblioteca — só HTML, CSS e JS puro pra treinar DOM, eventos e lógica mesmo.

## Sobre o projeto

Na tela aparece um emoji que sai correndo toda vez que o mouse chega perto, trocando de emoji aleatoriamente a cada fuga (a lista de emojis já existia desde o início do projeto). Apertando "q" você abre um overlay que te dá uma noção do tempo perdido tentando pegar o emoji.

## Funcionalidades

- Elemento (isca) que detecta a posição do mouse e foge do cursor pela tela.
- Troca de emoji aleatória a cada vez que a isca escapa.
- Tecla "f" cria uma nova isca na tela, permitindo ter várias fugindo do mouse ao mesmo tempo.
- Overlay (aberto com a tecla "q") mostrando quantas tentativas frustradas você já acumulou. Qualquer tecla fecha o overlay se ele já estiver aberto, e clicar fora dele também fecha.
- Uso do localStorage pra guardar o número de tentativas mesmo depois de fechar a página.
- Easter egg escondido: digitando "nhandeara" em qualquer momento aparece uma imagem, um texto animado e toca um áudio. Dá pra fechar apertando Enter.
- Lógica separada em arquivos distintos (`Isca.js` cuida da fuga, `stats.js` cuida da contagem/overlay, `secret.js` cuida do easter egg, `main.js` guarda utilitários compartilhados).
- CSS isolado em arquivo próprio (`assets/css/style.css`).
- Uso da tag `<template>` do HTML pra montar o overlay e o easter egg.

## Refatoração

O projeto começou de forma bem procedural: toda a lógica de fuga da isca ficava solta dentro do `main.js`, em funções e num único `addEventListener` de mousemove. Depois refatorei isso pra uma classe `Isca`, o que deixou o código mais organizado e permitiu criar múltiplas instâncias (é o que possibilita a tecla "f" spawnar novas iscas).

Optei por manter o código antigo comentado dentro do `main.js` em vez de apagar. Como esse é um projeto de estudo, achei interessante deixar registrado o "antes e depois" — dá pra comparar como era a versão procedural com a versão em classe.

## Habilidades praticadas

- Manipulação do DOM (selecionar, criar e atualizar elementos).
- Eventos de mouse e teclado (posição/movimento do cursor e captura de tecla).
- Persistência de dados no navegador com localStorage.
- Posicionamento dinâmico de elementos com JS e CSS.
- Organização de código em múltiplos arquivos JS, separando responsabilidades.
- Refatoração de código procedural para orientado a objetos (classes).
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