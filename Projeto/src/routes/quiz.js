var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/salvarRespostas", function(req, res) {
    quizController.salvarRespostas(req, res);
});

router.get("/buscar/:idUsuario", function (req, res) {
    quizController.buscarRespostasUsuario(req, res);
});

module.exports = router;
