let imgEstrelas = document.getElementById('imgEstrelas');
let imgLua = document.getElementById('imgLua');
let imgMontanhaFront = document.getElementById('imgMontanhaFront');
let textoBoasVindas = document.getElementById('textoBoasVindas');
let botao = document.getElementById('botao');
let imgMontanhaBack = document.getElementById('imgMontanhaBack');
let header = document.querySelector('header');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    imgEstrelas.style.left = value * 0.25 + 'px';
    imgLua.style.top = value * 1.25 + 'px';
    imgMontanhaBack.style.top = value * 0.5 + 'px';
    imgMontanhaFront.style.top = value * 0 + 'px';
    textoBoasVindas.style.marginRight = value * 3 + 'px';
    textoBoasVindas.style.marginTop = value * 1.5 + 'px';
    botao.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
})