var quizModel = require("../models/quizModel"); 

function salvarRespostas(req, res) {
    var id = req.body.id; 
    var resposta = req.body.resposta;

    if (!id || !resposta || resposta.length === 0) {
        return res.status(400).json({
            mensagem: "Dados inválidos."
        });
    }

    quizModel.salvarRespostas(id, resposta)
        .then(function(resultado) {
            res.status(201).json({
                mensagem: "Respostas salvas com sucesso!"
            });
        })
        .catch(function(erro) {
            console.log(erro);
            res.status(500).json({
                erro: erro.sqlMessage || erro.message
            });
        });
}

module.exports = {
    salvarRespostas
};