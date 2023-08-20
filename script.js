function toggleMode() {
  const html = document.documentElement

  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  //}
  html.classList.toggle("light")
  // pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar img light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto Gui Felizinho")
  } else {
    //se tiver sem light mode, manter img original
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto Gui Brabão")
  }
}
