import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router()

routes.get("/livros", LivroController.listarLivros);

routes.get("/livros/:id", LivroController.listarLivroPorId);

routes.post("/livros", LivroController.cadastraLivro);

routes.put("/livros/:id", LivroController.atulizarLivro);

routes.delete("/livros/:id", LivroController.deletarLivro);

export default routes;