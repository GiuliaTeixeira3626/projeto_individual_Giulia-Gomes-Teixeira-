create database projeto_individual1;
use projeto_individual1;

create table usuario (
id_usuario int primary key auto_increment,
nome_completo varchar (100) not null,
data_nascimento date not null,
email varchar (60) not null,
telefone char (11),
endereco varchar (260),
nome_responsavel varchar (100) not null,
telefone_responsavel char (11),
condicoes_saude varchar (400),
senha varchar (40) not null,
data_cadastro datetime default current_timestamp
); 

create table pergunta (
id_pergunta int primary key,
enunciado varchar (200)
); 

create table alternativa (
id_alternativa int primary key,
opcoes_alternativa char (1)
);

create table resposta (
id_resposta int,
data_registro datetime default current_timestamp,
fk_usuario int,
fk_pergunta int,
fk_alternativa int,
constraint pk_composta primary key (id_resposta, fk_usuario, fk_pergunta, fk_alternativa),
constraint fk_usuario_resposta foreign key (fk_usuario) 
references usuario (id_usuario),
constraint fk_pergunta_resposta foreign key (fk_pergunta) 
references pergunta (id_pergunta),
constraint fk_alternativa_resposta foreign key (fk_alternativa) 
references alternativa (id_alternativa)
);

