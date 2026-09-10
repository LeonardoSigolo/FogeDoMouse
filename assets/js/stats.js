const template = document.querySelector(".template");

setInterval(() => {
  const tentativas = localStorage.getItem("tentativas") || 0;
  const tentativasTexto = document.querySelector("#tentativasDisplay");

  if (tentativasTexto) {
    tentativasTexto.innerText = `Tentativas: ${tentativas}`;
  }
}, 100);

document.addEventListener("keydown", (e) => {
  const overlayExistente = document.querySelector(".overlay");

  if (overlayExistente) {
    overlayExistente.remove();
    return;
  }
  const el = e.key.toLowerCase();

  if (el === "q") {
    const clone = document.importNode(template.content, true);

    document.body.appendChild(clone);
  }
});

document.addEventListener("click", (e) => {
  const overlayExistente = document.querySelector(".overlay");
  const el = e.target;

  if (overlayExistente && el !== overlayExistente) {
    overlayExistente.remove();
  }
});
