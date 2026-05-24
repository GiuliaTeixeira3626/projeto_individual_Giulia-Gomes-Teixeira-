var database = require("../database/config");

function salvarRespostas(id, resposta) {
    var instrucaoSql = `
        INSERT INTO resposta (fk_usuario, fk_pergunta, fk_alternativa) VALUES ${resposta};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    
    return database.executar(instrucaoSql);
}

function buscarRespostasUsuario(idUsuario) {
    var instrucaoSql = `
    SELECT 
        r.fk_pergunta, 
        a.opcoes_alternativa 
    FROM resposta r
    JOIN alternativa a ON r.fk_alternativa = a.id_alternativa
    WHERE r.fk_usuario = ${idUsuario};
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    salvarRespostas,
    buscarRespostasUsuario
};
