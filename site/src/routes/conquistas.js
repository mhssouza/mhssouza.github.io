var express = require("express");
var router = express.Router();
var conquistasController = require("../controllers/conquistasController");

//Recebendo os dados do html e direcionando para a função cadastrar de conquistasController.js
router.post("/cadastrar", function (req, res) {
    conquistasController.cadastrar(req, res);
})

// router.post("/autenticar", function (req, res) {
//     conquistasController.autenticar(req, res);
// });

router.post("/cadastrarInventario", function (req, res) {
    conquistasController.cadastrar(req, res);
});

module.exports = router;