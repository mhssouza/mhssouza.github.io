CREATE DATABASE PlayScore;

USE PlayScore;

CREATE TABLE Usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    user VARCHAR(45) UNIQUE NOT NULL,
    email VARCHAR(45) UNIQUE NOT NULL,
    senha VARCHAR(45) NOT NULL
);

CREATE TABLE aviso (
	idAviso INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE Minigames(
	idMinigames INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    -- pontuacao INT,
    recorde INT,
    -- dtConquista DATE,
    fkMinigameUsuario INT,
    CONSTRAINT fkUserMinigame FOREIGN KEY (fkMinigameUsuario)
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