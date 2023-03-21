import mysql from "mysql";

export const db = mysql.createConnection({
  //Const para conexão ao banco
  host: "localhost", //Definindo o host
  user: "root", //Definindo o usuario
  password: "123", //Senha do usuario
  database: "crud", //Definindo o banco
});
