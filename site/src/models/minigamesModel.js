var database = require("../database/config");

function buscarMinigames(minigamesID) {

  instrucaoSql = `select * from minigames a where fkMinigameUsuario = ${minigamesID}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(nome, recorde, minigamesID) {
  
  instrucaoSql = `insert into (nome, recorde, fkMinigameUsuario) minigames values (${nome}, ${recorde}, ${minigamesID})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarMinigames,
  cadastrar
}