var minigamesModel = require("../models/minigamesModel");

function buscarMinigamesPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    minigamesModel.buscarMinigamesPorUsuario(idUsuario).then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os Minigames: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function cadastrar(req, res) {
    var nome = req.body.nome;
    var recorde = req.body.recorde;
    var idUsuario = req.body.idUsuario;

    if (nome == undefined) {
        res.status(400).send("nome está undefined!");
    } else if (recorde == undefined) {
        res.status(400).send("recorde está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("idUsuario está undefined!");
    } else {


        minigamesModel.cadastrar(nome, recorde, idUsuario)
            .then((resultado) => {
                res.status(201).json(resultado);
            }
            ).catch((erro) => {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    buscarMinigamesPorUsuario,
    cadastrar
}