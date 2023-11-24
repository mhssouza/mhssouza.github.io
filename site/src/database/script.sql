CREATE DATABASE playscore;

USE playscore;

CREATE TABLE Usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    usuario VARCHAR(45) UNIQUE NOT NULL,
    email VARCHAR(45) UNIQUE NOT NULL,
    senha VARCHAR(45) NOT NULL
);

CREATE TABLE jogoReacao(
	idJogoReacao INT PRIMARY KEY AUTO_INCREMENT,
    recorde INT,
    pontos INT,
    acertos INT,
    erros INT,
    precisao INT,
    fkJogoReacaoUsuario INT,
    CONSTRAINT fkUserJogoReacao FOREIGN KEY (fkJogoReacaoUsuario)
		REFERENCES Usuario(idUsuario)
)AUTO_INCREMENT = 5000;

CREATE TABLE Jogos(
	idJogo INT PRIMARY KEY  AUTO_INCREMENT,
    nome VARCHAR(100),
    plataforma VARCHAR(50),
    avaliacao INT,
    genero VARCHAR(100)
)AUTO_INCREMENT = 10000;

CREATE TABLE Quiz(
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    generoRecomendado VARCHAR(100),
    fkQuizUsuario INT,
    CONSTRAINT fkUserQuiz FOREIGN KEY (fkQuizUsuario)
		REFERENCES Usuario(idUsuario)
)AUTO_INCREMENT = 15000;