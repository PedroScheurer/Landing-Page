const dataAtual = new Date()
document.querySelector("#anoAtual").innerHTML = dataAtual.getFullYear()

const borrarNav = () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 0 || !document.querySelector("#mobile-menu").classList.contains("hidden")) {
        nav.classList.add("backdrop-blur-lg")
        nav.classList.add("shadow-md")
        nav.classList.remove("bg-transparent")
    } else {
        nav.classList.remove("backdrop-blur-lg")
        nav.classList.remove("shadow-md")
    }
}

const habilitarBotaoMenu = () => {
    const windowLargura = window.innerWidth;
    const links = document.querySelectorAll("#nav-links a")
    const button = document.querySelector("#nav-links button");

    if (windowLargura < 756) {
        for (let i = 0; i < links.length; i++) {
            links[i].classList.add("hidden")
            button.classList.remove("hidden")
        }
    } else {
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove("hidden")
            button.classList.add("hidden")
        }
    }
};

const ativarMobileMenu = (e) => {
    const mobileMenu = document.querySelector("#mobile-menu");
    const nav = document.querySelector("nav");

    e.stopPropagation()

    if (mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden");
        nav.classList.add("bg-white");
        nav.classList.add("shadow-md");
    } else {
        mobileMenu.classList.add("hidden");
        nav.classList.add("backdrop-blur-lg")
        nav.classList.remove("bg-white");
    }
}

document.querySelector("body").addEventListener("click", (e) => {
    const mobileMenu = document.querySelector("#mobile-menu")
    if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden")
    }
})

window.addEventListener("scroll", borrarNav);
document.querySelector("#nav-links button").addEventListener("click", ativarMobileMenu)
window.addEventListener("resize", habilitarBotaoMenu)
window.addEventListener("load", habilitarBotaoMenu)