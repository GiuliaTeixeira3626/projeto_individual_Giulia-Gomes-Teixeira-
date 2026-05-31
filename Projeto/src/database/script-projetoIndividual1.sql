CREATE DATABASE projeto_individual1;

USE projeto_individual1;

CREATE TABLE usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
data_nascimento DATE,
email VARCHAR(60) UNIQUE,
telefone CHAR(11),
endereco VARCHAR(260),
nome_responsavel VARCHAR(100),
telefone_responsavel CHAR(11),
condicoes_saude VARCHAR(400),
senha VARCHAR(40),
data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usuario (nome, email, senha)
VALUES ('administrador', 'admin', 'admin');

SELECT * FROM usuario;

CREATE TABLE pergunta (
id_pergunta INT PRIMARY KEY AUTO_INCREMENT,
enunciado VARCHAR(200) NOT NULL
);

CREATE TABLE alternativa (
id_alternativa INT PRIMARY KEY AUTO_INCREMENT,
opcoes_alternativa VARCHAR(200) NOT NULL,
fk_pergunta INT NOT NULL,

CONSTRAINT fk_pergunta_alternativa
FOREIGN KEY (fk_pergunta)
REFERENCES pergunta(id_pergunta)
);

CREATE TABLE resposta (
id_resposta INT PRIMARY KEY AUTO_INCREMENT,
data_registro DATETIME DEFAULT CURRENT_TIMESTAMP,

fk_usuario INT NOT NULL,
fk_pergunta INT NOT NULL,
fk_alternativa INT NOT NULL,

CONSTRAINT fk_usuario_resposta
FOREIGN KEY (fk_usuario)
REFERENCES usuario(id),

CONSTRAINT fk_pergunta_resposta
FOREIGN KEY (fk_pergunta)
REFERENCES pergunta(id_pergunta),

CONSTRAINT fk_alternativa_resposta
FOREIGN KEY (fk_alternativa)
REFERENCES alternativa(id_alternativa)
);

INSERT INTO pergunta (enunciado) VALUES
('Qual sua classificação atual de saúde para atividades de impacto?'),
('Quantos minutos de atividade física contínua você consegue realizar hoje?'),
('Qual o foco principal durante o treinamento?'),
('Em uma escala de 1 a 5, quão cansativo costuma ser um exercício para você?'),
('Qual grupo muscular você sente que precisa de mais atenção?'),
('Quantos dias por semana você se compromete a treinar no Clube T21?'),
('Qual o método de instrução mais eficaz para sua aprendizagem?'),
('Como você descreve sua caminhada/corrida atual?'),
('Como você avalia sua ingestão de água durante o exercício?'),
('O que define o sucesso do seu treino ao final do mês?');

INSERT INTO alternativa (opcoes_alternativa, fk_pergunta) VALUES
('Restrição total (médico não liberou impacto)', 1),
('Restrição parcial (liberado com supervisão)', 1),
('Sem restrições (liberação médica total)', 1),
('Menos de 10 min', 2),
('De 10 a 20 min', 2),
('De 20 a 40 min', 2),
('Mais de 40 min', 2),
('Autonomia motora e força', 3),
('Condicionamento cardiovascular (Corrida)', 3),
('Composição corporal (Emagrecimento/Hipertrofia)', 3),
('Socialização e bem-estar mental', 3),
('1', 4),
('2', 4),
('3', 4),
('4', 4),
('5', 4),
('Membros Inferiores (Pernas e equilíbrio)', 5),
('Membros Superiores (Braços e tronco)', 5),
('Core (Abdômen e postura)', 5),
('1', 6),
('2', 6),
('3', 6),
('4', 6),
('5+', 6),
('Demonstração Visual', 7),
('Comando Verbal direto', 7),
('Apoio Físico (ajuste de postura)', 7),
('Suporte por vídeo/app', 7),
('Caminhada lenta/estacionária', 8),
('Caminhada vigorosa', 8),
('Trote intercalado com caminhada', 8),
('Corrida contínua', 8),
('Preciso de lembretes constantes', 9),
('Bebo apenas quando sinto sede', 9),
('Me hidrato regularmente por conta própria', 9),
('Completar todos os treinos previstos', 10),
('Aumento de carga na musculação', 10),
('Melhora no tempo de corrida', 10),
('Sentir-se mais disposto no dia a dia', 10);

CREATE TABLE fale_conosco (
id_fale_conosco INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR (100),
email VARCHAR (60) UNIQUE,
mensagem VARCHAR (400)
);

SELECT*FROM fale_conosco;
SELECT*FROM alternativa;
SELECT*FROM resposta;
SELECT*FROM usuario;

