var jogoModel = require("../models/jogoModel");

function cadastrarPontos(req, res) {
    var recorde = req.body.recordeServer;

    jogoModel.cadastrarPontos(recorde)

        .then(function (resultadoMinigame) {
            console.log(`\nResultados encontrados: ${resultadoMinigame.length}`);
            console.log(`Resultados: ${JSON.stringify(resultadoMinigame)}`); // transforma JSON em String

            if (resultadoMinigame.length == 1) {

                res.json({
                    recorde: resultadoMinigame[0].recorde,
                    fkUser: resultadoMinigame[0].fkMinigameUsuario,
                });


            }
        })
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var recorde = req.body.recordeServer;
    var idUsuario = req.body.idUser;

    // Passe os valores como parâmetro e vá para o arquivo jogoModel.js
    jogoModel.cadastrar(recorde, idUsuario)

        .then(
            function (resultado) {
                res.json(resultado);
            }
        )

        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    cadastrarPontos,
    cadastrar
}