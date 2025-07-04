

/* Carrossel */

const carrossel = document.querySelector('.carrossel');
const btnAnterior = document.querySelector('.btn-carrossel.anterior');
const btnProximo = document.querySelector('.btn-carrossel.proximo');

const scrollAmount = 1200;

btnAnterior.addEventListener('click', () => {
    carrossel.scrollBy({left: -scrollAmount, behavior: 'smooth'});
});

btnProximo.addEventListener('click', () => {
    carrossel.scrollBy({left: scrollAmount, behavior:'smooth'});
});

