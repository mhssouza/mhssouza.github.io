const btnIniciar = document.querySelector('#btn_iniciar'),
    telas = document.querySelectorAll('.telaJogo'),
    listaTimer = document.querySelector('#timerLista'),
    listaDificuldade = document.querySelector('#dificuldadeLista'),
    tempoIH = document.querySelector('#spanTempo'),
    precisaoIH = document.querySelector('#spanPrecisao'),
    acertosIH = document.querySelector('#spanAcertos'),
    borda = document.querySelector('#borda'),
    acertosFim = document.querySelector('#acertos_final'),
    errosFim = document.querySelector('#erros_final'),
    vidas = document.querySelectorAll('.coracao'),
    precisaoFim = document.querySelector('#precisao-final'),
    btnRestart = document.querySelectorAll('.reiniciar'),
    qtdBolinhas = document.querySelector('#total-bolinhas'),
    pontuacaoIH = document.querySelector('#spanPontos'),
    pontosFim = document.querySelector('#pontos-final'),
    recordeIH = document.querySelector('#recorde-user');

let tempo = 0,
    infinito = false,
    dificuldade = 0,
    jogando = false,
    pontos = 0,
    qtdAlvos = 0,
    recorde = sessionStorage.getItem('recorde') || getRecorde(),
    acertos = sessionStorage.getItem('acertos') || 0,
    erros = sessionStorage.getItem('erros') || 0,
    precisao = sessionStorage.getItem('precisao') || 0,
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
    pontos = 0;
    intervalo = setInterval(diminuirTempo, 1000);
    criarBolinhas();
}

function diminuirTempo() {
    if (infinito) {
        setTempo('∞');
        return;
    }

    if (tempo == 0) {
        encerrarJogo();
    }

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
    const tamanho = numeroAleatorio(60, 100);
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
        calcularVida();
        calcularPrecisao();
    });
}

borda.addEventListener('click', (e) => {
    if (e.target.classList.contains('circulo')) {
        acertos++;
        e.target.remove();
        criarBolinhas();
        calcularPrecisao();
        pontos += 8;
    }

    else {
        erros++;
    }

    acertosIH.innerHTML = acertos;
    pontuacaoIH.innerHTML = pontos;

    calcularPrecisao();
});

function calcularVida() {
    if (
        vidas[0].classList.contains('morte') &&
        vidas[1].classList.contains('morte')
    ) {
        encerrarJogo();
    } else {
        erros++;

        for (let contador = 0; contador < vidas.length; contador++) {
            if (!vidas[contador].classList.contains('morte')) {
                vidas[contador].classList.add('morte');
                break;
            }
        }
    }
}

function getRecorde() {
    const recordeArmazenado = localStorage.getItem('recorde');
    return recordeArmazenado ? parseInt(recordeArmazenado) : 0;
}

function setNovoRecorde(novoRecorde) {
    localStorage.setItem('recorde', novoRecorde.toString());
    recordeIH.innerHTML = novoRecorde;
}

function calcularPrecisao() {
    precisao = (acertos / (acertos + erros)) * 100;
    precisao = precisao.toFixed(2);
    precisaoIH.innerHTML = `${precisao}%`;
}

function cadastrarBanco() {
    var recordeVar = getRecorde(),
        pontosVar = pontos,
        acertosVar = acertos,
        errosVar = erros,
        precisaoVar = precisao;

    console.log("FORM MINIJOGO: ", recordeVar);

    fetch("/jogoReacao/cadastrarPontos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            recordeServer: recordeVar,
            pontosServer: pontosVar,
            acertosServer: acertosVar,
            errosServer: errosVar,
            precisaoServer: precisaoVar,
            idUser: sessionStorage.ID_USUARIO
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO cadastrarBanco()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                // sessionStorage.ID_USUARIO = json.id;
                sessionStorage.RECORDE_USUARIO = json.recorde;
                sessionStorage.ACERTOS_USUARIO = json.acertos;
                sessionStorage.ERROS_USUARIO = json.erros;
                sessionStorage.PRECISAO_USUARIO = json.precisao;
            });

        } else {

            console.log("Houve um erro ao cadastrar pontuação");
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function encerrarJogo() {
    cadastrarBanco();
    jogando = false;
    clearInterval(intervalo);
    borda.innerHTML = '';
    telas[3].classList.add('deslizarCima');
    acertosIH.innerHTML = 0;
    pontuacaoIH.innerHTML = 0;
    tempoIH.innerHTML = '00:00';
    precisaoIH.innerHTML = '0%';
    precisaoFim.innerHTML = `${precisao}%`;
    pontosFim.innerHTML = pontos;

    if (pontos > getRecorde()) {
        recorde = pontos;
        // sessionStorage.setItem('recorde', recorde);
        setNovoRecorde(pontos);
    }

    sessionStorage.setItem('acertos', acertos);
    sessionStorage.setItem('pontos', pontos);
    sessionStorage.setItem('erros', erros);
    sessionStorage.setItem('precisao', precisao);

    const labels = [
        'Acertos',
        'Erros',
    ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Quantidade de Acertos e Erros:',
            backgroundColor: ['rgb(150, 0, 255)',
                'rgb(255, 0, 0)'],
            borderColor: 'rgb(100, 0, 0)',
            data: [acertos, erros],
        }]
    };

    const config = {
        type: 'doughnut',
        data: data,
        options: {}
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

    recordeIH.innerHTML = getRecorde();
}

function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

btnRestart.forEach((botao) => {
    botao.addEventListener('click', reiniciarJogo)
});

function reiniciarJogo() {
    telas[1].classList.remove('deslizarCima');
    telas[2].classList.remove('deslizarCima');
    telas[3].classList.remove('deslizarCima');

    tempo = 0;
    dificuldade = 0;
    acertos = 0;
    erros = 0;
    precisao = 0;

    // recorde = sessionStorage.getItem('recorde') || getRecorde();
    // acertos = parseInt(sessionStorage.getItem('acertos')) || 0;
    // erros = parseInt(sessionStorage.getItem('erros')) || 0;
    // precisao = parseFloat(sessionStorage.getItem('precisao')) || 0;


    jogando = false;
    infinito = false;
    vidas.forEach((coracao) => {
        coracao.classList.remove('morte');
    });
}