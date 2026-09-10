/** @type {HTMLElement} */
const isca = document.querySelector(".isca");

const random = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

const emojis = [
  "💖",
  "😍",
  "🤡",
  "🤢",
  "😡",
  "🥵",
  "😨",
  "🫠",
  "🥶",
  "🫨",
  "🤥",
  "😈",
  "🤓",
  "💩",
  "🙈",
  "🙉",
  "🙊",
  "🐵",
  "🫦",
  "👀",
  "👨‍🦽‍➡️",
  "🏃‍♂️‍➡️",
  "💃",
  "🖖",
  "🤏",
  "🖕",
  "👉👌",
];

const trocaEmoji = (emoji) => {
  isca.innerText = emoji;
};

const salvaTentativas = () => {
  let tentativas = Number(localStorage.getItem("tentativas")) || 0;

  tentativas++;

  localStorage.setItem("tentativas", tentativas);
};

let mouseEmCima = false;


document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    const rect = isca.getBoundingClientRect();
    
    const xTelaMax = window.innerWidth - rect.width;
    const yTelaMax = window.innerHeight - rect.height;
    
    const xIscaMin = rect.left;
    const xIscaMax = rect.right;
    
    const yIscaMin = rect.top;
    const yIscaMax = rect.bottom;
    
    const emCima = x > xIscaMin && x < xIscaMax && y > yIscaMin && y < yIscaMax;

  if (emCima && !mouseEmCima) {
    const xRand = random(xTelaMax, 0);
    const yRand = random(yTelaMax, 0);
    isca.style.left = `${xRand}px`;
    isca.style.top = `${yRand}px`;
    const randEmoji = emojis[random(emojis.length - 1, 0)];
    mouseEmCima = true
    trocaEmoji(randEmoji);
    salvaTentativas();
    console.log(mouseEmCima)
  }

  if(!emCima){
    mouseEmCima = false;
  }
  //   console.log(`x:${x} y:${y}`);
  //   console.log(xIscaMin, xIscaMax, yIscaMin, yIscaMax);
  //   console.log(xTelaMax, yTelaMax);
});
