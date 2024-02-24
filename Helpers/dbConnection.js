const mySql=require("mysql2");
const dotenv=require("dotenv").config();

const connection = mySql.createPool({
    host:process.env.MYSQLHOST,
            user:process.env.MYSQLUSER,
            password:process.env.MYSQLPASSWORD,
            database:process.env.MYSQLDATABASE,
            port:process.env.MYSQLPORT
  }).promise();


module.exports=connection;