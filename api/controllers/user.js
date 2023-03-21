import { db } from "../db.js"; //Importando o banco

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data) => { //Fazer a querry e verficar se houve algum erro
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
