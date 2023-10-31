var nome = window.prompt("Oi, Tudo bem!? Qual é o seu nome?")
window.alert(
  "Olá " + nome + ", Seja Bem vindo ao meu primeiro projeto em programação."
)

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("Light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("Light")) {
    img.setAttribute("src", "./assets/avatar2-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar2.png")
  }
}
