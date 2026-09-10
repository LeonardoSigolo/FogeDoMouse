const template = document.querySelector(".template");

document.addEventListener("keydown", (e) => {
  const overlayExistente = document.querySelector(".overlay");
  if (overlayExistente) {
    overlayExistente.remove();
    return;
  }
  const el = e.key;
  const clone = document.importNode(template.content, true);
  const tentativas = localStorage.getItem("tentativas");

  if (el === "q" || el === "Q") {
    const overlay = clone.querySelector(".overlay");
    const tentativasTexto = clone.querySelector("#tentativasDisplay");

    tentativasTexto.innerText = `Tentativas: ${tentativas}`;

    document.body.appendChild(clone);

    document.addEventListener("click", (e) => {
      const el = e.target;

      if (el !== overlay) {
        overlay.remove();
      }
    });
  }
});
