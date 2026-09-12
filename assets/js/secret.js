const surpresa = document.querySelector(".surpresa");
const audio = new Audio("assets/aud/aiaiai.mp3");

let digitos = "";

document.addEventListener("keydown", (e) => {
  const el = e.key;

  const clone = document.importNode(surpresa.content, true);

  const img = new Image();
  const h1 = document.createElement("h1");
  img.classList.add("leo", "giro");
  h1.classList.add("txt", "giro");
  img.src = "assets/img/IMG_8103.PNG";
  h1.innerText = "Te amo princesa 💞";
  clone.appendChild(img);
  clone.appendChild(h1);

  digitos += el.toLocaleLowerCase().replace("space", " ");

  if (digitos.length > 20) digitos = digitos.slice(-20);

  console.log(digitos);

  if (digitos.includes("nhandeara")) {
    document.body.appendChild(clone);
    // const leo = document.querySelector(".leo");
    // const txt = document.querySelector(".txt");
    audio.play();
    setTimeout(() => {
      img.style.height = "100vh";
      h1.style.fontSize = "3rem";
      img.classList.remove("giro");
      h1.classList.remove("giro");
    }, 10);
    digitos = "";
  }

  const existe = document.querySelector(".leo");
  const existe2 = document.querySelector(".txt");

  if (existe && el === "Enter") {
    existe.remove();
    existe2.remove();
  }
});
