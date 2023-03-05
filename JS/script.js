function menuBurguer() {
    let menu = document.querySelector("#nav-bar")
    let burguer = document.querySelector("#burguer")
    let close = document.querySelector("#close")

    if (menu.style.display == "inline-block") {
        menu.style.display = "none"
        close.style.display = "none"
        burguer.style.display = "inline-block"
    } else {
        menu.style.display = "inline-block"
        close.style.display = "inline-block"
        burguer.style.display = "none"
    }
}