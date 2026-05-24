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


function buscarRespostasUsuario(req, res) {
    
    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("O ID do usuário não está definido");
    } else {
    
        quizModel.buscarRespostasUsuario(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado para este usuário.");
            }
        })
        .catch(function (erro) {
            console.log("\nHouve um erro ao buscar as respostas do usuário: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }
}

module.exports = {
    salvarRespostas,
    buscarRespostasUsuario
};
