CREATE DATABASE playscore;

USE playscore;

CREATE TABLE
    Usuario(
        idUsuario INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(45) NOT NULL,
        usuario VARCHAR(45) UNIQUE NOT NULL,
        email VARCHAR(45) UNIQUE NOT NULL,
        senha VARCHAR(45) NOT NULL
    );

CREATE TABLE
    jogoReacao(
        idJogoReacao INT PRIMARY KEY AUTO_INCREMENT,
        -- recorde INT,
        pontos INT,
        acertos INT,
        erros INT,
        precisao INT,
        fkJogoReacaoUsuario INT,
        CONSTRAINT fkUserJogoReacao FOREIGN KEY (fkJogoReacaoUsuario) REFERENCES Usuario(idUsuario)
    ) AUTO_INCREMENT = 5000;

CREATE TABLE
    conquistas(
        idConquista INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(45),
        descricao VARCHAR(150)
    ) AUTO_INCREMENT = 10000;



CREATE TABLE
    inventario(
        idInventario INT PRIMARY KEY AUTO_INCREMENT,
        fkConquista INT,
        fkUsuarioConquista INT,
        dataConquista DATE,
        CONSTRAINT fkUsuarioConquista FOREIGN KEY (fkUsuarioConquista) REFERENCES Usuario(idUsuario),
        CONSTRAINT fkConquista FOREIGN KEY (fkConquista) REFERENCES conquistas(idConquista)
    ) AUTO_INCREMENT = 15000;

SELECT * FROM Usuario;

SELECT * FROM jogoReacao;

SELECT *
FROM Usuario
    JOIN jogoReacao ON fkJogoReacaoUsuario = idUsuario;

SELECT usuario.usuario AS 'Nome do usuario', inventario.*, conquistas.nome AS 'Nome da Conquista'
FROM inventario
JOIN usuario ON inventario.fkUsuarioConquista = usuario.idUsuario
JOIN conquistas ON inventario.fkConquista = conquistas.idConquista;

SELECT usuario.nome AS nome_usuario, inventario.dataConquista, conquistas.nome AS 'Nome da Conquista'
FROM inventario
JOIN usuario ON inventario.fkUsuarioConquista = usuario.idUsuario
JOIN conquistas ON inventario.fkConquista = conquistas.idConquista;