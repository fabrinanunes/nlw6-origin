/* abre e fecha o menu hamburguer */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
};

/* clicar no item do menu */
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show');
    })
}

/* mudar o header com scroll */

const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

window.addEventListener('scroll', function () {
    if (this.window.scrollY >= navHeight) {
        //scroll maior que altura do header
        header.classList.add('scroll')
    } else {
        //menor que a altura do header
        header.classList.remove('scroll')
    }
})

/* caixa de depoimentos com swiper */

const swiper = new Swiper('.swiper-container', {
    sliderPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
})

/* imagem durante rolagem */

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .text, #home .image,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links`,
    { interval: 100 })