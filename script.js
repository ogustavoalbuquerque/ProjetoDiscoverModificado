window.alert(
  "Fala Dev, blz? Esse foi meu primeiro projeto estudando na rocketseat. espero que goste! Basicamente é um armazenador de link"
)
window.confirm("")

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("Light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("Light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
