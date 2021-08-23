## _Projeto Escola_

> Status: Finalizado

## Sobre o projeto

Este projeto foi desenvolvido há um tempo no curso de Javascript e Typescript do [Luiz Otávio Miranda](https://twitter.com/otaviomirandabr), que consiste em cadastrar alunos por meio de um usuário autenticado. Por meio deste curso foi esclarecido o uso de migrations, seeds e o relacionamento entre as tabelas Alunos e Fotos.

### Features

- [x] Cadastro de Usuário.
- [x] Cadastro de Aluno.
- [x] Editar Aluno.
- [x] Atualizar Aluno.
- [x] Deletar Aluno.
- [x] Visualizar Alunos.
- [x] Subir imagens do Aluno.
- [x] Visualizar alunos com o array de caminho das fotos.

## Pré-requisitos

- Qualquer ferramenta de teste de API

  - [Insomnia REST](https://insomnia.rest/download)
  - [Postman](https://www.postman.com/)

- Docker

## \*\*Instalação

1. Clonar o repositório - `git clone`.
2. Abrir o "README.md".
3. Abrir o arquivo "scriptDocker.txt" baixar a imagem do banco MariaDB no Docker.
4. Criar as variaveis de ambiente em um arquivo ".env" como:

- APP_PORT=3000
- DATABASE=NomeDoBanco
- DATABASE_HOST=localhost
- DATABASE_PORT=PortaDoBanco
- DATABASE_USERNAME=UsuarioBanco
- DATABASE_PASSWORD=SenhaBanco
- TOKEN_SECRET=SegredoTokenDeSuaPreferência
- TOKEN_EXPIRATION=7d

5. Criar Migrations pelo comando "npx sequelize db:migrate".
6. Inicializar o Express pelo comando "npm run dev" ou "yarn dev".

## Tecnologias utilizada

### Back-end

- [BcryptJS](https://www.npmjs.com/package/bcryptjs)
- [JSONWebToken](https://www.npmjs.com/package/jsonwebtoken)
- [Sequelize-Cli](https://www.npmjs.com/package/sequelize-cli)
- [Multer](https://www.npmjs.com/search?q=multer)
- [ExpressJS](https://expressjs.com/pt-br/)
- [MariaDB](https://www.npmjs.com/package/mariadb)
- [Helmet](https://www.npmjs.com/package/helmet)
- [CORS](https://www.npmjs.com/package/cors)

### Front-end

---

### Desenvolvido por

Carlos Prosdoskimi
