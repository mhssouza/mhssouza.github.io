const emojis = [
    '🤓', '🤓', 
    '😺', '😺', 
    '🎯', '🎯', 
    '❤️', '❤️', 
    '🍅', '🍅', 
    '🗿', '🗿', 
    '', '', 
    '🥶', '🥶'
];
var sortearEmoji = emojis.sort(() => (Math.random() > .5) ? 2 : -1);
for (c = 0; c < emojis.length; c++) {
    let area = document.createElement('div')
    area.className = 'item';
    area.innerHTML = sortearEmoji[c];

    area.onclick = function () {
        this.classList.add('areaRevelar');
        setTimeout(function () {
            if (document.querySelectorAll('.areaRevelar').length > 1) {
                if (document.querySelectorAll('.areaRevelar')[0].innerHTML ==
                    document.querySelectorAll('.areaRevelar')[1].innerHTML) {
                    document.querySelectorAll('.areaRevelar')[0].classList.add('areaCombinada')
                    document.querySelectorAll('.areaRevelar')[1].classList.add('areaCombinada')

                    document.querySelectorAll('.areaRevelar')[1].classList.remove('areaRevelar')

                    document.querySelectorAll('.areaRevelar')[0].classList.remove('areaRevelar')

                    if (document.querySelectorAll('.areaCombinada').length == emojis.length) {
                        document.querySelector('.mensagemVitoria').style.display = 'flex';
                    }
                } else {
                    document.querySelectorAll('.areaRevelar')[1].classList.remove('areaRevelar')
                    document.querySelectorAll('.areaRevelar')[0].classList.remove('areaRevelar')
                }
            }
        }, 500)
    }

    document.querySelector('.mainJogo').appendChild(area);
}