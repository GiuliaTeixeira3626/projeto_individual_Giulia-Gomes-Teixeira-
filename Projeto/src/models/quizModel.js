var database = require("../database/config");

function responder(fk_usuario, resposta) {
    let promises = [];

    for (let i = 0; i < resposta.length; i++) {

        let instrucaoSql = ` 
        INSERT INTO resposta
        (fk_usuario, fk_pergunta, fk_alternativa)
        VALUES 
        (${fk_usuario},
         ${resposta[i].fk_pergunta},
         ${resposta[i].fk_alternativa});
         `;

        console.log("Executando a instrução SQL: \n" + instrucaoSql);

        promises.push(database.executar(instrucaoSql));
    }

    return Promise.all(promises);

}

module.exports = {
    responder
}
