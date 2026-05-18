var quizModel = require("../models/quizModel")

function responder(req, res) {

    var fk_pergunta = req.body.fk_pergunta;
    var resposta = req.body.resposta;
    var fk_usuario = req.body.fk_usuario;

    quizModel.responder(fk_usuario, resposta)
        .then(function (resultado) {

            res.status(200).json(resultado);

        }).catch(function (erro) {

            console.log(erro);
            console.log("\nHouve um erro ao armazenar as respostas do quiz! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);

        });

}

module.exports = {
    responder
}