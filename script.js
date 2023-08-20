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

var fundoPretot = document.querySelector("#fundo-pretot")
var menuIcon = document.querySelector("#menu-icon")
var btnMenu = document.querySelector("#btn-menu")
var btnHome = document.querySelector("#btn-home-cell")
var menuDiv = document.querySelector("#menu-div")
function menu() {
    if (window.innerWidth < 1050) {
        if (menuIcon.innerHTML == "menu") {
            menuIcon.innerHTML = "close"
            menuDiv.style.display = "block"
            fundoPretot.style.display = "block"
            btnMenu.style.boxShadow = "none"
            btnMenu.style.borderRadius = "50% 50% 0px 0px"
            btnHome.style.boxShadow = "none"
            btnHome.style.borderRadius = "50% 50% 0px 0px"

        } else if (menuIcon.innerHTML == "close") {
            menuIcon.innerHTML = "menu"
            menuDiv.style.display = "none"
            fundoPretot.style.display = "none"
            btnMenu.style.boxShadow = "5px 5px 10px 0px rgba(0, 0, 0, .5)"
            btnMenu.style.borderRadius = "50%"
            btnHome.style.boxShadow = "5px 5px 10px 0px rgba(0, 0, 0, .5)"
            btnHome.style.borderRadius = "50%"
            for (let i = 0; i < uls.length; i++) {
                uls[i].style.display = "none"
            }
        }
    }
}


var navAnos = document.querySelector("#nav-anos")
var btnMenuHeader = document.querySelector("#btn-menu-header")
function menuHeader() {
    if (window.innerWidth < 975) {
        if (menuIcon.innerHTML == "menu") {
            fundoPretot.style.display = "block"
            menuIcon.innerHTML = "close"
            navAnos.style.display = "block"
            btnMenuHeader.style.boxShadow = "none"
            btnMenuHeader.style.borderRadius = "50% 50% 0px 0px"

        } else if (menuIcon.innerHTML == "close") {
            fundoPretot.style.display = "none"
            menuIcon.innerHTML = "menu"
            navAnos.style.display = "none"
            btnMenuHeader.style.boxShadow = "5px 5px 10px 0px rgba(0, 0, 0, .5)"
            btnMenuHeader.style.borderRadius = "50%"
            for (let i = 0; i < uls.length; i++) {
                uls[i].style.display = "none"
                zoom[i].style.fontSize = "16px"
                seta[i].style.transform = "none"
            }
        }
    }
}

function menuScroll() {
    if (window.innerWidth < 975) {
        fundoPretot.style.display = "none"
        navAnos.style.display = "none"
        menuIcon.innerHTML = "menu"
        btnMenuHeader.style.boxShadow = "5px 5px 10px 0px rgba(0, 0, 0, .5)"
        btnMenuHeader.style.borderRadius = "50%"
    }
}


function scrollToElement(elementId, offset) {
    const element = document.getElementById(elementId);
    const topPos = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: topPos - offset,
        behavior: 'smooth'
    });
}

const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToElement(targetId, 80);
    });
});

var uls = document.querySelectorAll(".uls")
var zoom = document.querySelectorAll(".zoom")
var seta = document.querySelectorAll(".seta")
function ulClick(n) {
    if (window.innerWidth < 975) {
        if (uls[n].style.display == "block") {
            uls[n].style.display = "none"
            zoom[n].style.fontSize = "16px"
            seta[n].style.transform = "none"
            
        } else {
            uls.forEach((ul, index) => {
                ul.style.display = index === n ? "block" : "none";
            });
            zoom.forEach((lizoom, indexzoom) => {
                lizoom.style.fontSize = indexzoom === n ? "20px" : "16px"
            })
            seta.forEach((setai, indexseta) => {
                setai.style.transform = indexseta === n ? "rotate(-180deg)" : "none"
            })
            
        }
    }
}

