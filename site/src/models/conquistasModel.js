var database = require('../database/config')

function cadastrarInventario(fkConquista, dataConquista, fkUsuarioConquista) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarInventario(): ", fkConquista, dataConquista, fkUsuarioConquista)
    
    var instrucao = `SELECT usuario.usuario AS 'Usuario', inventario.dataConquista, conquistas.nome AS 'Nome da Conquista' FROM inventario JOIN usuario ON inventario.fkUsuarioConquista = usuario.idUsuario JOIN conquistas ON inventario.fkConquista = conquistas.idConquista WHERE idUsuario = ${idUsuario};`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(conquista, dtConquista, fkUser) {
    console.log("ACESSEI O JOGO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", conquista, dtConquista, fkUser);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO inventario (fkConquista, dataConquista, fkUsuarioConquista) VALUES (${conquista}, ${dtConquista}, ${fkUser});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarInventario,
    cadastrar
};