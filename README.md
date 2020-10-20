<h1 align="center">
  <img src=".github/logo.png" alt="Logo proffy" width="300px">
</h1>

<div align="center">
  <strong>
    Aplicação para conectar professores autônomos à alunos curiosos.
    <br />
    Desenvolvido no evento NLW #02 provido pela <a href="https://rocketseat.com.br/">Rocketseat</a>
  </strong>
</div>

---

## Sobre o projeto

O evento NLW é ministrado durante o decorrer de uma semana, nele, uma aplicação completa backend, web e mobile é construída do zero usando Typescript com as tecnologias Node, ReactJs e React Native.

O aplicativo desenvolvido neste evento é o Proffy. No momento da proposta deste projeto, muitos alunos estão afastados das escolas em decorrência da pandemia do coronavírus, pensando nisso e no contexto atual da sociedade, o sistema Proffy surge como um meio para conectar alunos aos professores neste período de distanciamento social.

<div align="center">
  <img src=".github/capa.png" alt="Preview da tela do sistema" width="1000px" style="max-width: 100%;">
</div>

<br/>

Neste aplicativo, professores podem registrar as aulas que os mesmo lecionam, assim como o horário que atendem e seu valor hora. Alunos que buscam por professores, podem consultar essa lista em busca da queles que lecionem as matérias de interesse, e podem entrar em contato com os professores por whatsapp.

## Get Started

Para executar esse projeto será necessário ter o node e o yarn instalado em seu ambiente, assim como o aplicativo Expo em seu smartphone.

Clone o repositório para seu workspace \
Abra o terminal no diretório do projeto e execute `yarn` para baixar as dependências

### Executando o backend
* Acesse o diretório *server* pelo terminal
* Execute o comando `yarn knex:migrate`, isso vai criar a base de dados
* Para iniciar a plicação execute `yarn start`

### Executando a interface Web
* Acesse o diretório *web* pelo terminal
* Para iniciar a plicação execute `yarn start`

### Executando o aplicativo mobile
* Acesse o diretório *mobile* pelo terminal
* Execute o comando `yarn start`, uma tela em seu navegador será exibida
* Na tela apresentada, copie o endereço ip (sem a porta) apresentado no canto inferior esquerdo da tela
* Abra o arquivo [api.ts](mobile/src/services/api.ts) em **mobile/src/services/**
* Edite o endereço ip do parâmetro baseURL pelo valor copiado
* Abra o aplicativo Expo em seu smartphone e leia o QrCode apresentado na tela do seu navegador anteriormente

## Testando as rotas
Dentro da pasta *server* ha outro diretório chamado [client](server/client), esse diretório contém arquivos com estruturas de requisição http, se você estiver usando o editor vsCode, pode baixar a extensão **REST Client** e enviar as requisições diretamente do seu editor.

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

by Mauricio Redmerski André
