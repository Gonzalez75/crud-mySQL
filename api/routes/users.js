import express from "express";
import { getUsers } from "./controllers/user.js";

const router = express.Router(); //Const para indicar que será uma rota

router.get("/", getUsers); //Atribuir o metodo get do usuario, chamando a função getUsers que fica na controller

export default router; //Exportar o router como default
