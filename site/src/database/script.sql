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
        CONSTRAINT fkUsuarioConquista FOREIGN KEY (fkUsuarioConquista) REFERENCES Usuario(idUsuario),
        CONSTRAINT fkConquista FOREIGN KEY (fkConquista) REFERENCES conquistas(idConquista)
    ) AUTO_INCREMENT = 15000;
    
INSERT INTO conquistas VALUES
(null, 'Iniciante de Reação', 'Consiga 400 pontos no Reaction Lab'),
(null, 'Veterano de Reação', 'Consiga 600 pontos no Reaction Lab'),
(null, 'Reaction Master', 'Complete uma Rodada de Reaction Lab no Modo Difícil sem perder NENHUMA VIDA'),
(null, 'Reaction God', 'Consiga 800 pontos no Reaction Lab no modo DIFÍCIL'),
(null, 'Por um Fio!', 'Compelete uma rodada de Reaction Lab com 1 coração'),
(null, 'Má Sorte', 'Termine uma Rodada de Reaction Lab perdendo todas as vidas');

SELECT * FROM Usuario;
SELECT * FROM jogoReacao;
SELECT * FROM conquistas;

SELECT * FROM Usuario JOIN jogoReacao ON fkJogoReacaoUsuario = idUsuario;

SELECT pontos, acertos, erros, precisao, fkJogoReacaoUsuario FROM jogoReacao 
JOIN Usuario ON fkJogoReacaoUsuario = idUsuario WHERE fkJogoReacaoUsuario = 1;

SELECT * FROM inventario JOIN conquistas 
ON fkConquista = idConquista
JOIN usuario 
ON fkUsuarioConquista = idUsuario WHERE idUsuario = 1;