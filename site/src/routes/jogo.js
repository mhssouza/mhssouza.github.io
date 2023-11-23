var express = require("express");
var router = express.Router();
var jogoController = require("../controllers/jogoController");

//Recebendo os dados do html e direcionando para a função cadastrar de jogoController.js
router.post("/cadastrar", function (req, res) {
    jogoController.cadastrar(req, res);
})

// router.post("/autenticar", function (req, res) {
//     jogoController.autenticar(req, res);
// });

router.post("/cadastrarPontos", function (req, res) {
    jogoController.cadastrar(req, res);
});

module.exports = router;