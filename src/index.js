const express = require("express"); //importa o módulo Express

//Define uma classe para organizar a lógica de aplicação
class AppController {
  constructor() {
    //Cria uma nova instância do express dentro da classe
    this.express = express();
    //Chama o método middlewares para configurar os middlewares
    this.middlewares();
    //Chama o método routes para definir as rotas da Api
    this.routes();
  }
  middlewares() {
    //Permitir que a aplicação receba dados em formato JSON nas requisições
    this.express.use(express.json());
  }
  //Define as rotas da nossa API
  
  routes() {
    const apiRoutes = require("./routes/apiRoutes")
    this.express.use("/project-senai/api/v1/", apiRoutes) //criação da URL base

    this.express.get("/health/", (req, res) => {
      res.send({ status: "OK" });
    }); 
  }
}

//Exportando a instancia  de Express configurada, para que seja acessado em outros arquivos
module.exports = new AppController().express;
