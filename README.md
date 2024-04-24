# API CRUD de Filmes usando NestJS e TypeORM

Este projeto é uma API CRUD (Create, Read, Update, Delete) de filmes com autenticação JWT (JSON Web Tokens), construída utilizando NestJS, TypeORM, PostgreSQL e Docker. A API permite gerenciar uma coleção de filmes, onde os usuários autenticados podem adicionar, visualizar, atualizar e remover filmes.

## Requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

- Node.js (versão 12.x ou superior)
- npm (geralmente instalado com o Node.js)
- Docker

## Deploy

Feito o deploy da API no AWS EC2

- [`ir para documentação de produção`](http://54.233.216.255:3000/api)

Banco de dados de produção no AWS RDS (Postgres)

## Configuração do Ambiente

1. **Clonando o Repositório:**

   Clone este repositório em sua máquina local:

   ```bash
   git clone https://github.com/lucasfernandes20/mks-backend-challenge.git
   ```

2. **Instalando Dependências:**

   Navegue até o diretório do projeto e instale as dependências usando npm:

   ```bash
   cd nome-do-repositorio
   npm install
   ```

3. **Configurando as Variáveis de Ambiente:**

   Renomeie o arquivo `.env.example` para `.env` e ajuste as variáveis de ambiente conforme necessário, especialmente para configurações do banco de dados e segredo JWT.

## Executando a Aplicação com Docker Compose

Este projeto utiliza Docker Compose para facilitar a execução do NestJS junto com um banco de dados PostgreSQL. Certifique-se de que o Docker esteja em execução em sua máquina.

1. **Iniciando os Contêineres:**

   No diretório raiz do projeto, execute o seguinte comando para iniciar os contêineres Docker (NestJS + PostgreSQL):

   ```bash
   docker-compose up
   ```

   Este comando iniciará o servidor NestJS e o banco de dados PostgreSQL.

2. **Acessando a API:**

   A API estará disponível [`aqui`](http://54.233.216.255:3000/). Você pode usar ferramentas como Postman ou cURL para interagir com os endpoints.

## Estrutura do Projeto

A estrutura do projeto segue as convenções do NestJS:

```
src/
|-- auth/                      # Módulo de autenticação (JWT)
|-- movies/                    # Módulo de gerenciamento de filmes
|-- database/                  # Módulo de gerenciamento do banco de dados
|-- main.ts                    # Ponto de entrada da aplicação
|-- app.module.ts              # Módulo raiz da aplicação
```

- **`auth/`**: Contém os controladores, serviços, entidades e guardas relacionados à autenticação usando JWT.
- **`movies/`**: Possui os controladores, serviços e entidades para o CRUD de filmes.
- **`database/`**: Inclui módulo de configuração do banco de dados.

## Endpoints da API

O projeto possui documentação com [`swagger`](http://54.233.216.255:3000/api). Na documentação será possível visualizar todos os endpoints, seus requerimentos para requisição e seus retornos.

### Autenticação

- `POST /auth/register`: Registro de novo usuário.
- `POST /auth/login`: Login de usuário (retorna token JWT).

### Filmes

- `GET /movies`: Retorna a lista de todos os filmes.
- `GET /movies/:id`: Retorna detalhes de um filme específico.
- `POST /movies`: Adiciona um novo filme.
- `PUT /movies/:id`: Atualiza os detalhes de um filme existente.
- `DELETE /movies/:id`: Remove um filme existente.

## Variáveis de Ambiente

Certifique-se de configurar corretamente as variáveis de ambiente no arquivo `.env`. Aqui estão algumas variáveis importantes:

- `DB_HOST`, `DB_PORT`, `DB_USERNAME`, `DB_PASSWORD`, `DB_NAME`: Configurações de conexão com o banco de dados PostgreSQL.
- `JWT_SECRET`: Segredo utilizado para assinar tokens JWT.

## Considerações

Este projeto foi desenvolvido para o processo seletivo da empresa MKS com as tecnologias exigidas pelo processo. Ainda não sou proeficiênte em todas as tecnologias que foram utilizadas mas estou estudando e melhorando elas todos os dias. Sinta-se a vontade para me apontar uma falha e me dar feedbacks. Busco implementar um banco de dados para o cache em memória, no processo seletivo foi mencionado para usar o `redis` mas recentemente a empresa [`anunciou que estava deixando de oferecer seu software de banco de dados NoSQL em memória sob a licença de código aberto`](https://medium.com/@marcio.kgr/a-queda-do-redis-2c7a1e4119bb). Por conta deste imprevisto, estou buscando estudar outras soluções para o mesmo propósito.

## Nível de Experiência com Tecnologias

Aqui está uma breve descrição do meu nível de experiência com as tecnologias utilizadas no projeto:

### Avançado

- TypeScript
- PostgreSQL
- TypeORM
- Nest.js

### Intermediário

- Docker
- Swagger

### Básico

- Redis

## Autor

Este projeto foi desenvolvido por Lucas Fernandes.

- LinkedIn: [lucasfernandesreis](https://www.linkedin.com/in/lucasfernandesreis/)
- GitHub: [lucasfernandes20](https://github.com/lucasfernandes20)
