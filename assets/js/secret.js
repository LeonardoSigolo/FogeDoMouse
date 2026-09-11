const surpresa = document.querySelector(".surpresa");
const audio = new Audio("assets/aud/aiaiai.mp3");

let digitos = "";

document.addEventListener("keydown", (e) => {
  const el = e.key;

  const clone = document.importNode(surpresa.content, true);

  digitos += el.toLocaleLowerCase().replace("space", " ");

  if (digitos.length > 20) digitos.slice(-20);

  console.log(digitos);

  if (digitos.includes("nhandeara")) {
    document.body.appendChild(clone);
    const leo = document.querySelector(".leo");
    const txt = document.querySelector(".txt");
    audio.play();
    setTimeout(() => {
      leo.style.height = "100vh";
      txt.style.fontSize = "3rem";
      leo.classList.remove("giro");
      txt.classList.remove("giro");
    }, 10);
    digitos = "";
  }
});
