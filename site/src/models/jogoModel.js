var database = require('../database/config')

function cadastrarPontos(pontos, acertos, erros, precisao,) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarPontos(): ", pontos, acertos, erros, precisao,)
    var instrucao = `
        SELECT jogoReacao, pontos, acertos, erros, precisao, fkJogoReacaoUsuario FROM jogoReacao JOIN Usuario WHERE fkJogoReacaoUsuario = ${idUsuario} ON fkJogoReacaoUsuario = idUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(pontos, acertos, erros, precisao, fkUser) {
    console.log("ACESSEI O JOGO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", acertos, erros, precisao, fkUser);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO jogoReacao (pontos, acertos, erros, precisao, fkJogoReacaoUsuario) VALUES (${pontos}, ${acertos}, ${erros}, ${precisao}, ${fkUser});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarPontos,
    cadastrar
};