var jogoModel = require("../models/jogoModel");

function cadastrarPontos(req, res) {
    // var recorde = req.body.recordeServer;
    var pontos = req.body.pontosServer;
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;
    var precisao = req.body.precisaoServer;

    // if (recorde == undefined) {
    //     res.status(400).send("Seu recorde está undefined!");
    // }
    if (pontos == undefined) {
        res.status(400).send("Seus pontos estão undefined!")
    }
    else if (acertos == undefined) {
        res.status(400).send("Seus acertos estão indefinidos!");
    }
    else if (erros == undefined) {
        res.status(400).send("Seus erros estão indefinidos!");
    }
    else if (precisao == undefined) {
        res.status(400).send("Sua precisão está indefinida!");
    } else {

        jogoModel.cadastrarPontos(recorde, acertos, erros, precisao)

            .then(function (resultadoMinigame) {
                console.log(`\nResultados encontrados: ${resultadoMinigame.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoMinigame)}`); // transforma JSON em String

                if (resultadoMinigame.length == 1) {

                    res.json({
                        // recorde: resultadoMinigame[0].recorde,
                        pontos: resultadoMinigame[0].pontos,
                        acertos: resultadoMinigame[0].acertos,
                        erros: resultadoMinigame[0].erros,
                        precisao: resultadoMinigame[0].precisao,
                        fkUser: resultadoMinigame[0].fkMinigameUsuario,
                    });


                }
            })
    }
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    // var recorde = req.body.recordeServer;
    var pontos = req.body.pontosServer;
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;
    var precisao = req.body.precisaoServer;
    var idUsuario = req.body.idUser;

    // if (recorde == undefined) {
    //     res.status(400).send("Seu recorde está undefined!");
    if (pontos == undefined) {
        res.status(400).send("Seus pontos estão indefinidos!");
    } else if (acertos == undefined) {
        res.status(400).send("Seus acertos estão indefinidos!");
    }
    else if (erros == undefined) {
        res.status(400).send("Seus erros estão indefinidos!");
    }
    else if (precisao == undefined) {
        res.status(400).send("Sua precisão está indefinida!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo jogoModel.js
        jogoModel.cadastrar(pontos, acertos, erros, precisao, idUsuario)

            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )

            .catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro dos pontos! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrarPontos,
    cadastrar
}