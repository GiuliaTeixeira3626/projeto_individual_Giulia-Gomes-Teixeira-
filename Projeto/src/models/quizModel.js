var database = require("../database/config");

function salvarRespostas(id, resposta) {

    var instrucaoSql = `
        INSERT INTO resposta (fk_usuario, fk_pergunta, fk_alternativa) VALUES (${resposta});
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    
    return database.executar(instrucaoSql);
}

module.exports = {
    salvarRespostas
};