var carregando = document.getElementById("carregando")
function inicia() {
    setTimeout(() => {
        carregando.style.display = "none"
        conteudo.style.display = "block"
    }, 500);
}

var sobreDiv = document.querySelector("#sobre-div")
var fundoPreto = document.querySelector("#fundo-preto")
var corpo = document.querySelector("body")
function abrirSobre() {
    sobreDiv.style.display = "flex"
    fundoPreto.style.display = "flex"
    corpo.style.overflowY = "hidden"
}
function fecharSobre() {
    sobreDiv.style.display = "none"
    fundoPreto.style.display = "none"
    corpo.style.overflowY = "visible"
}

var menuIcon = document.querySelector("#menu-icon")
var btnMenu = document.querySelector("#btn-menu")
var btnHome = document.querySelector("#btn-home")
var menuDiv = document.querySelector("#menu-div")
function menu() {
    if (menuIcon.innerHTML == "menu") {
        menuIcon.innerHTML = "close"
        menuDiv.style.display = "flex"
        btnMenu.style.boxShadow = "none"
        btnHome.style.boxShadow = "none"
        btnMenu.style.pointerEvents = "none"
        setTimeout(() => {
            menuDiv.style.opacity = 1
        }, 1);
        setTimeout(() => {
            btnMenu.style.pointerEvents = "all"
        }, 500);
    } else if (menuIcon.innerHTML == "close"){
        menuIcon.innerHTML = "menu"
        menuDiv.style.opacity = 0
        btnMenu.style.boxShadow = "5px 5px 10px 0px rgba(0, 0, 0, .5)"
        btnHome.style.boxShadow = "5px 5px 10px 0px rgba(0, 0, 0, .5)"
        btnMenu.style.pointerEvents = "none"
        setTimeout(() => {
            menuDiv.style.display = "none"
            btnMenu.style.pointerEvents = "all"
        }, 500);
    }
}

