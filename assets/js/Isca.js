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
        // this.salvaPosicaoEmoji(this.xRand, this.yRand);
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

  salvaPosicaoEmoji(xRand, yRand) {
    this.emojiAtual = this.isca.innerText;

    localStorage.setItem("xRand", xRand);
    localStorage.setItem("yRand", yRand);
    localStorage.setItem("emoji", this.emojiAtual);
  }

  getPosicaoEmoji() {
    this.xRand = localStorage.getItem("xRand");
    this.yRand = localStorage.getItem("yRand");
    this.emoji = localStorage.getItem("emoji");

    this.isca.style.left = `${this.xRand}px`;
    this.isca.style.top = `${this.yRand}px`;
    this.isca.innerText = this.emoji || emojis[0];
  }
}

const isca = new Isca();

document.addEventListener("keydown", (e) => {
  const el = e.key;

  console.log(el)

  if ((el === "f")) {
    const iscas = new Isca();
  }
});
