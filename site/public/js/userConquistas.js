const listaItens = document.querySelector('#itemLista')
telaItem = document.querySelector('.itens'),
    imagem = document.querySelector('#imagemConquista'),
    nome = document.querySelector('#nomeConquista'),
    descricao = document.querySelector('#descricaoConquista');

let item = 0;

listaItens.addEventListener('click', (e) => {
    if (e.target.classList.contains('itensInventario'))
        item = parseInt(e.target.getAttribute('data-item'));
    mostrarInventario()
});

function mostrarInventario() {
    if (item == 1) {
        imagem.classList.remove('goldMedal', 'cristalCoracao', 'spiderMask', 'brokenHeart', 'shatteredHeart');
        imagem.classList.add('silverMedal');
        nome.innerHTML = 'Iniciante de Reacao';
        descricao.innerHTML = 'Consiga 400 pontos no Reaction Lab'
    }

    else if (item == 2) {
        imagem.classList.remove('silverMedal', 'cristalCoracao', 'spiderMask', 'brokenHeart', 'shatteredHeart');
        imagem.classList.add('goldMedal');
        nome.innerHTML = 'Veterano de Reação'
        descricao.innerHTML = 'Consiga 600 pontos no Reaction Lab'
    }

    else if (item == 3) {
        imagem.classList.remove('silverMedal', 'goldMedal', 'spiderMask', 'brokenHeart', 'shatteredHeart');
        imagem.classList.add('cristalCoracao');
        nome.innerHTML = 'Reaction Master'
        descricao.innerHTML = 'Complete uma Rodada de Reaction Lab no Modo Difícil sem perder NENHUMA VIDA'
    }

    else if (item == 4) {
        imagem.classList.remove('silverMedal', 'cristalCoracao', 'goldMedal', 'brokenHeart', 'shatteredHeart');
        imagem.classList.add('spiderMask');
        nome.innerHTML = 'Reaction God'
        descricao.innerHTML = 'Consiga 800 pontos no Reaction Lab no modo DIFÍCIL'
    }

    else if (item == 5) {
        imagem.classList.remove('silverMedal', 'cristalCoracao', 'goldMedal', 'goldMedal', 'shatteredHeart');
        imagem.classList.add('brokenHeart');
        nome.innerHTML = 'Por um Fio!'
        descricao.innerHTML = 'Compelete uma rodada de Reaction Lab com 1 coração'
    }

    else {
        imagem.classList.remove('silverMedal', 'cristalCoracao', 'goldMedal', 'brokenHeart', 'goldMedal');
        imagem.classList.add('shatteredHeart');
        nome.innerHTML = 'Ma Sorte'
        descricao.innerHTML = 'Termine uma Rodada de Reaction Lab perdendo todas as vidas'
    }
}