import express from "express";
import cors from "cors";

const app = express();

app.use(express.json()); //Usar o json para put
app.use(cors()); //Evitar conflitos usando local

app.listen(8800); //Pro app escutar a porta 8800
