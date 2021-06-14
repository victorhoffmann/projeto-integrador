-- CRIAÇÃO DB:
CREATE DATABASE perifericos_net;
USE perifericos_net;

-- TABELAS:

CREATE TABLE funcoes (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    funcao VARCHAR(100) NOT NULL
);

INSERT INTO funcoes (funcao) VALUES ('Administrador'), ('Usuário Final');

CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
nome VARCHAR(200) NOT NULL,
email VARCHAR(200) NOT NULL,
senha VARCHAR(100) NOT NULL,
cpf_cnpj VARCHAR(20) NOT NULL,
id_funcao INT UNSIGNED,
	  CONSTRAINT fk_funcao_id FOREIGN KEY (id_funcao) REFERENCES funcoes(id) ON DELETE CASCADE
);


CREATE TABLE pedidos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
usuario_id INT UNSIGNED NOT NULL,
data_pedido TIMESTAMP NOT NULL,
status_pedido BOOLEAN
);

CREATE TABLE pedidos_produtos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
pedido_id INT UNSIGNED NOT NULL,
produto_id INT UNSIGNED NOT NULL,
qnt_produtos INT UNSIGNED NOT NULL
);

CREATE TABLE categorias (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
nome VARCHAR(200) NOT NULL
);

CREATE TABLE produtos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
nome VARCHAR(200) NOT NULL,
categoria_id INT UNSIGNED NOT NULL,
preco DECIMAL(5,2),
descricao VARCHAR(200) NOT NULL,
qnt_disponivel INT UNSIGNED NOT NULL
);

-- FOREIGN KEYS:
ALTER TABLE pedidos ADD CONSTRAINT fk_usuario_id FOREIGN KEY(usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE;

DELETE FROM produtos where id = 1;

ALTER TABLE pedidos_produtos ADD CONSTRAINT fk_produto_id FOREIGN KEY(produto_id) REFERENCES produtos(id) ON DELETE CASCADE;
ALTER TABLE pedidos_produtos ADD CONSTRAINT fk_pedido_id FOREIGN KEY(pedido_id) REFERENCES pedidos(id) ON DELETE CASCADE;

ALTER TABLE produtos ADD CONSTRAINT fk_categoria_id FOREIGN KEY(categoria_id) REFERENCES categorias(id) ON DELETE CASCADE;

-- POPULANDO TABELAS:
INSERT INTO categorias (nome)
VALUES ('Headsets'),
('Monitores'),
('Mousepads'),
('Mouse'),
('Teclado');

/* Select * FROM categorias; */

INSERT INTO produtos (nome,categoria_id,preco,descricao,qnt_disponivel)
VALUES ('Headset 01', 1, 299.99, 'Descrição do Headset 01', 35),
('Headset 02', 1, 320.50, 'Descrição do Headset 02', 5),
('Headset 03', 1, 330.00, 'Descrição do Headset 03', 14),
('Headset 04', 1, 345.99, 'Descrição do Headset 04', 60),
('Headset 05', 1, 350.00, 'Descrição do Headset 05', 11),
('Monitor 01', 2, 300.00, 'Descrição do Monitor 01', 35),
('Monitor 02', 2, 320.50, 'Descrição do Monitor 02', 5),
('Monitor 03', 2, 330.00, 'Descrição do Monitor 03', 14),
('Monitor 04', 2, 345.99, 'Descrição do Monitor 04', 60),
('Monitor 05', 2, 350.00, 'Descrição do Monitor 05', 11),
('Mousepad 01', 3, 300.00, 'Descrição do Mousepad 01', 35),
('Mousepad 02', 3, 320.50, 'Descrição do Mousepad 02', 5),
('Mousepad 03', 3, 330.00, 'Descrição do Mousepad 03', 14),
('Mousepad 04', 3, 345.99, 'Descrição do Mousepad 04', 60),
('Mousepad 05', 3, 350.00, 'Descrição do Mousepad 05', 11),
('Mouse 01', 4, 300.00, 'Descrição do Mouse 01', 35),
('Mouse 02', 4, 320.50, 'Descrição do Mouse 02', 5),
('Mouse 03', 4, 330.00, 'Descrição do Mouse 03', 14),
('Mouse 04', 4, 345.99, 'Descrição do Mouse 04', 60),
('Mouse 05', 4, 350.00, 'Descrição do Mouse 05', 11),
('Teclado 01', 5, 300.00, 'Descrição do Teclado 01', 35),
('Teclado 02', 5, 320.50, 'Descrição do Teclado 02', 5),
('Teclado 03', 5, 330.00, 'Descrição do Teclado 03', 14),
('Teclado 04', 5, 345.99, 'Descrição do Teclado 04', 60),
('Teclado 05', 5, 350.00, 'Descrição do Teclado 05', 11);

/* Select * FROM produtos; */

INSERT INTO usuarios (nome, email, senha, cpf_cnpj, id_funcao)
VALUES ('Admin', 'admin@admin.com', 'admin', 99999999999, 1),
('Marcelo Diament', 'mdiament@digitalhouse.com','senha1234',27485798423,2),
('Beltrano Sousa', 'beltrano_souza@hotmail.com','novasenha2',12345798423,2),
('Ciclano da Silva', 'ciclano@ig.com.br','senhaforte',78905798423,2),
('Dumbledore do Harry Potter', 'dumble@dore.com','harry1234',39655798423,2),
('Abirosvaldo da Silva', 'abirosvaldo@gmail.com','pitoco99',10295798423,2),
('Julius Pai do Chris', 'julius@free-email.com','senhagratis',88765798423,2);

/* Select * FROM usuarios; */

INSERT INTO pedidos (usuario_id, data_pedido, status_pedido)
VALUES (1,"2021-08-25 13:10:01",true),
(2,"2021-09-05 10:00:00",true),
(2,"2021-11-15 00:00:01",false),
(3,"2021-08-25 03:25:55",false),
(4,"2021-04-01 22:30:00",true),
(5,"2021-12-25 20:30:11",true),
(6,"2021-01-01 00:30:01",true); 

SELECT * FROM pedidos;

INSERT INTO pedidos_produtos (pedido_id, produto_id)
VALUES (1,1),
(1,13),
(1,16),
(2,6),
(2,4),
(3,2),
(3,25),
(4,5),
(4,16),
(5,20),
(5,14),
(6,8),
(6,4);

/* SELECT * FROM pedidos_produtos;

SELECT * FROM produtos;

SELECT usuarios.nome AS 'Usuarios',
		pedidos.id AS 'Número do pedido',
        pedidos.status_pedido AS 'Status do pedido'
        FROM usuarios
INNER JOIN pedidos ON usuarios.id = pedidos.usuario_id order by usuarios.id ASC;

SELECT 	pedidos.id AS 'Número do pedido',
		produtos.nome AS 'Produto'
		FROM pedidos_produtos
INNER JOIN pedidos ON pedidos_produtos.pedido_id = pedidos.id
INNER JOIN produtos ON pedidos_produtos.produto_id = produtos.id;


-- Select da barra de pesquisa
Select * FROM produtos 

-- Select do admin

*/


SELECT `id`, `nome`, `categoria_id`, `preco`, `descricao`, `qnt_disponivel` FROM `produtos` AS `Produto` ORDER BY RAND() LIMIT 3;

SELECT * FROM produtos WHERE id IN (4,7,14);

SELECT `id`, `nome`, `categoria_id`, `preco`, `descricao`, `qnt_disponivel` FROM `produtos` AS `Produto` WHERE `Produto`.`nome` LIKE '%mouse%';
