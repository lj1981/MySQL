const Sequelize = require ("sequelize"); 

const sequelize = new Sequelize ("seleção","root","root22" , {
    host: 'localhost',
    dialect:  'mysql'
  });

sequelize.authenticate()
.then(function(){
    console.log("Conexão com banco de dados feita com sucesso!");
    
}).catch(function(){
     console.log("erro: conexão com banco de dados não realizada com susesso!");
});   

  module.exports = sequelize;
