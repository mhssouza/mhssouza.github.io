var conquistasModel = require("../models/conquistasModel");

function cadastrarInventario(req, res) {
    // var recorde = req.body.recordeServer;
    var conquista = req.body.conquistaServer;

    // if (recorde == undefined) {
    //     res.status(400).send("Seu recorde está undefined!");
    // }
    if (conquista == undefined) {
        res.status(400).send("Sua conquista está undefined!")
    }else {

        conquistasModel.cadastrarInventario(conquista, dtConquista)

            .then(function (resultadoConquista) {
                console.log(`\nResultados encontrados: ${resultadoConquista.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoConquista)}`); // transforma JSON em String

                if (resultadoConquista.length == 1) {

                    res.json({
                        // recorde: resultadoConquista[0].recorde,
                        conquista: resultadoConquista[0].fkConquista,
                        fkUser: resultadoConquista[0].fkUsuarioConquista,
                    });


                }
            })
    }
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    // var recorde = req.body.recordeServer;
    var conquista = req.body.conquistaServer;
    var idUsuario = req.body.idUser;

    // if (recorde == undefined) {
    //     res.status(400).send("Seu recorde está undefined!");
    if (conquista == undefined) {
        res.status(400).send("Sua conquista está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo conquistasModel.js
        conquistasModel.cadastrar(conquista, idUsuario)

            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )

            .catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro dos conquista! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrarInventario,
    cadastrar
}