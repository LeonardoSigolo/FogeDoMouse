class Isca {
  constructor() {
    this.mouseEmCima = false;

    this.renderiza();

    document.addEventListener("mousemove", (e) => {
      this.x = e.clientX;
      this.y = e.clientY;

      this.rect = this.isca.getBoundingClientRect();
      this.xTelaMax = window.innerWidth - this.rect.width;
      this.yTelaMax = window.innerHeight - this.rect.height;

      this.xIscaMin = this.rect.left;
      this.xIscaMax = this.rect.right;

      this.yIscaMin = this.rect.top;
      this.yIscaMax = this.rect.bottom;

      this.emCima =
        this.x > this.xIscaMin &&
        this.x < this.xIscaMax &&
        this.y > this.yIscaMin &&
        this.y < this.yIscaMax;

      if (this.emCima && !this.mouseEmCima) {
        this.xRand = random(this.xTelaMax, 0);
        this.yRand = random(this.yTelaMax, 0);
        this.isca.style.left = `${this.xRand}px`;
        this.isca.style.top = `${this.yRand}px`;
        this.trocaEmoji();
        this.mouseEmCima = true;
        this.salvaTentativas();
        salvaPosicaoEmoji();
      }

      if (!this.emCima) this.mouseEmCima = false;
    });
  }

  renderiza() {
    this.body = document.querySelector("body");
    this.isca = document.createElement("div");
    this.isca.classList.add("isca");
    this.body.appendChild(this.isca);
    this.isca.innerText = "💖";
  }

  trocaEmoji() {
    this.randEmoji = emojis[random(emojis.length - 1, 0)];
    this.isca.innerText = this.randEmoji;
  }

  salvaTentativas() {
    this.tentativas = Number(localStorage.getItem("tentativas")) || 0;

    this.tentativas++;

    localStorage.setItem("tentativas", this.tentativas);
  }

  getPosicaoEmoji() {
    const dadosSalvos = localStorage.getItem("dadosIscas");
    if (!dadosSalvos) return;

    const listaIscas = JSON.parse(dadosSalvos);

    listaIscas.forEach((dados, index) => {
      let i;
      if (index === 0) {
        i = this;
      } else {
        i = new Isca();
      }

      i.isca.style.left = dados.x;
      i.isca.style.top = dados.y;
      i.isca.innerText = dados.emoji;
    });
  }

  delete() {
    const todos = document.querySelectorAll(".isca");

    if (todos.length <= 1) new Isca();

    const emojisAtuais = [];

    for (const atual of todos) {
      emojisAtuais.push(atual);
    }

    const ultimo = emojisAtuais.pop();

    ultimo.style.transition = "150ms";
    ultimo.style.top = "110%";

    setInterval(() => {
      ultimo.remove();
      salvaPosicaoEmoji();
    }, 150);
  }
}

const salvaPosicaoEmoji = () => {
  const todasAsIscas = document.querySelectorAll(".isca");
  const dadosIscas = [];

  for (let isca of todasAsIscas) {
    dadosIscas.push({
      x: isca.style.left,
      y: isca.style.top,
      emoji: isca.innerText,
    });
  }

  localStorage.setItem("dadosIscas", JSON.stringify(dadosIscas));
};

const deleteTudo = () => {
  const todos = document.querySelectorAll(".isca");

  if (todos.length <= 0);

  for (const atual of todos) {
    atual.remove();
  }
  salvaPosicaoEmoji();
};

const isca = new Isca();

isca.getPosicaoEmoji();

document.addEventListener("keydown", (e) => {
  const el = e.key;

  if (el.toLowerCase() === "f") {
    new Isca();
    salvaPosicaoEmoji();
  }

  if (el === "Backspace") {
    isca.delete();
  }

  if (el.toLowerCase() === "c") {
    deleteTudo();
    new Isca();
  }
});
