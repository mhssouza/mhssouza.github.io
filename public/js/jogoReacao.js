const btnIniciar = document.querySelector('#btn_iniciar'),
    telas = document.querySelectorAll('.telaJogo'),
    listaTimer = document.querySelector('#timerLista'),
    listaDificuldade = document.querySelector('#dificuldadeLista'),
    tempoIH = document.querySelector('#spanTempo'),
    acertosIH = document.querySelector('#spanAcertos'),
    borda = document.querySelector('#borda');

let tempo = 0,
    infinito = false,
    dificuldade = 0,
    jogando = false,
    acertos = 0,
    erros = 0,
    precisao = '0%',
    intervalo = 0;

btnIniciar.addEventListener('click', () => {
    telas[0].classList.add('deslizarCima');
});

listaTimer.addEventListener('click', (e) => {
    if (e.target.classList.contains('btnTempo')) {
        tempo = parseInt(e.target.getAttribute('data-tempo'));
        infinito = e.target.getAttribute('data-infinito');
        telas[1].classList.add('deslizarCima');
    }
});

listaDificuldade.addEventListener('click', (e) => {
    if (e.target.classList.contains('btnDificuldade')) {
        dificuldade = parseInt(e.target.getAttribute('data-dificuldade'));
        telas[2].classList.add('deslizarCima');
        iniciarJogo();
    }
});

function iniciarJogo() {
    jogando = true;
    intervalo = setInterval(diminuirTempo, 1000);
    criarBolinhas();
}

function diminuirTempo() {
    if (infinito) {
        setTempo('∞');
        return;
    }

    if (tempo == 0) { }

    let atual = --tempo;
    let milisegundos = tempo * 1000;

    let minutos = Math.floor(milisegundos / (1000 * 60));
    let segundos = Math.floor((milisegundos % (1000 * 60)) / 1000);

    segundos = segundos < 10 ? '0' + segundos : segundos;
    minutos = minutos < 10 ? '0' + minutos : minutos;

    setTempo(`${minutos}:${segundos}`);
}

function setTempo(tempo) {
    tempoIH.innerHTML = tempo;
}

function criarBolinhas() {
    if (!jogando) {
        return;
    }

    const circulo = document.createElement('div');
    const tamanho = numeroAleatorio(30, 100);
    const coresBolinha = ['#03DAC6', '#FF0266', '#b3ff00', '#ccff00', '#9D00FF'];
    const { width, height } = borda.getBoundingClientRect();
    const x = numeroAleatorio(0, width - tamanho);
    const y = numeroAleatorio(0, height - tamanho);
    circulo.classList.add('circulo');
    circulo.style.width = `${tamanho}px`;
    circulo.style.height = `${tamanho}px`;
    circulo.style.top = `${y}px`;
    circulo.style.left = `${x}px`;

    let cores = Math.floor(Math.random() * 5);
    circulo.style.background = `${coresBolinha[cores]}`;
    borda.append(circulo);

    if (dificuldade == 1) {
        circulo.style.animationDuration = '2s';
    }

    else if (dificuldade == 3) {
        circulo.style.animationDuration = '1s';
    }

    else {
        circulo.style.animationDuration = '3s';
    }

    circulo.addEventListener('animationend', () => {
        circulo.remove();
        criarBolinhas();
    });
}

borda.addEventListener('click', (e) => {
    if (e.target.classList.contains('circulo')) {
        acertos++;
        e.target.remove();
        criarBolinhas();
    }

    else {
        erros++;
    }

    acertosIH.innerHTML = acertos;
})

function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}