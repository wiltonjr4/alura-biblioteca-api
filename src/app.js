import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js"; 

const conexaoBanco = await conectaNaDataBase();

conexaoBanco.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

conexaoBanco.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!");
});

const app = express();
routes(app);

export default app;

