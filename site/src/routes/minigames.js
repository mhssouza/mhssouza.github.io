var express = require("express");
var router = express.Router();

var minigamesController = require("../controllers/minigamesController");

router.get("/:empresaId", function (req, res) {
  minigamesController.buscarMinigamesPorUsuario(req, res);
});

router.post("/cadastrar", function (req, res) {
  minigamesController.cadastrar(req, res);
})

module.exports = router;