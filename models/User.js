const Sequelize = require ("sequelize");
const db = require ("./db");

const User = db.define("users", { 
 id: {
     type : Sequelize.INTEGER,
     autoIncrement : true,
     AllowNull : false,
     primaryKey:true
 },
 name:{
    type : Sequelize.STRING,
        AllowNull : false,
    
 },
 email:{
    type : Sequelize.STRING,
    AllowNull : false,
 },
});


//criar a tabela 
//User.sync();
//User.sync({alter:true})


module.exports= User;