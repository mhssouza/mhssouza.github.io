var database = require('../database/config')

function cadastrarPontos(recorde) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", recorde)
    var instrucao = `
        SELECT idMinigames, recorde, fkMinigameUsuario FROM Minigames JOIN Usuario WHERE fkMinigameUsuario = ${idUsuario} ON fkMinigameUsuario = idUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(recorde, fkUser) {
    console.log("ACESSEI O MINIGAMES MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", recorde, fkUser);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Minigames (recorde, fkMinigameUsuario) VALUES (${recorde}, ${fkUser});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



module.exports = {
    cadastrarPontos,
    cadastrar
};