# Foge do Mouse

Projeto front-end criado pra estudar e fixar conteúdo do curso de JavaScript e Node que estou fazendo. Nada de framework, nada de biblioteca — só HTML, CSS e JS puro pra treinar DOM, eventos e lógica mesmo.

## Sobre o projeto

Na tela aparece um emoji que sai correndo toda vez que o mouse chega perto, trocando de emoji aleatoriamente a cada fuga (a lista de emojis já existia desde o início do projeto). Apertando "q" você abre um overlay que te dá uma noção do tempo perdido tentando pegar o emoji.

## Funcionalidades

- Elemento (isca) que detecta a posição do mouse e foge do cursor pela tela.
- Troca de emoji aleatória a cada vez que a isca escapa.
- Tecla "f" cria uma nova isca na tela, permitindo ter várias fugindo do mouse ao mesmo tempo.
- Tecla "Backspace" remove a última isca criada (com uma animaçãozinha de saída).
- Tecla "c" remove todas as iscas da tela de uma vez.
- Posição e emoji de cada isca são salvos no localStorage e restaurados automaticamente ao recarregar a página — ou seja, o jogo lembra quantas iscas você tinha e onde elas estavam.
- Overlay (aberto com a tecla "q") mostrando quantas tentativas frustradas você já acumulou. Qualquer tecla fecha o overlay se ele já estiver aberto, e clicar fora dele também fecha.
- Contagem de tentativas também salva no localStorage, independente das iscas.
- Easter egg escondido: digitando "nhandeara" em qualquer momento aparece uma imagem, um texto animado e toca um áudio. Dá pra fechar apertando Enter.
- Lógica separada em arquivos distintos (`Isca.js` cuida da fuga/criação/remoção das iscas, `stats.js` cuida da contagem/overlay, `secret.js` cuida do easter egg, `main.js` guarda utilitários compartilhados).
- CSS isolado em arquivo próprio (`assets/css/style.css`).
- Uso da tag `<template>` do HTML pra montar o overlay e o easter egg.

## Refatoração

O projeto começou de forma bem procedural: toda a lógica de fuga da isca ficava solta dentro do `main.js`, em funções e num único `addEventListener` de mousemove. Depois refatorei isso pra uma classe `Isca`, o que deixou o código mais organizado e permitiu criar múltiplas instâncias (é o que possibilita a tecla "f" spawnar novas iscas, o "Backspace" remover uma por uma, e o "c" limpar tudo).

Junto com essa refatoração, a persistência no localStorage também evoluiu: no começo era só uma ideia (funções prontas mas comentadas, sem uso real). Hoje a classe `Isca` realmente salva e recupera a posição/emoji de cada instância, então o estado do jogo sobrevive a um F5.

Optei por manter o código antigo comentado dentro do `main.js` em vez de apagar. Como esse é um projeto de estudo, achei interessante deixar registrado o "antes e depois" — dá pra comparar como era a versão procedural com a versão em classe.

## Habilidades praticadas

- Manipulação do DOM (selecionar, criar, atualizar e remover elementos).
- Eventos de mouse e teclado (posição/movimento do cursor e captura de várias teclas).
- Persistência de dados no navegador com localStorage (tentativas e estado das iscas).
- Posicionamento dinâmico de elementos com JS e CSS.
- Organização de código em múltiplos arquivos JS, separando responsabilidades.
- Refatoração de código procedural para orientado a objetos (classes).
- HTML semântico, incluindo `<template>`.
- Controle de estado simples (contagem de tentativas e lista de iscas ativas).

## Tecnologias

- HTML5
- CSS3
- JavaScript (vanilla)

## Sobre o uso de IA

O README foi escrito com ajuda de IA. O código do projeto foi todo escrito por mim, sem IA — a ideia aqui era treinar os conceitos na unha mesmo.

## Como executar

Abre o `index.html` no navegador ou acesse `[FogeDoMouse]{https://leonardosigolo.github.io/FogeDoMouse/}`.
