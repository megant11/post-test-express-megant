const express = require("express");
const routes = express();
let controller = require("./../controller/db");

routes.use(express.json());

routes.get("/api/v1/books", controller.getAllBook);
routes.get("/api/v1/books/:id", controller.getBookById);

routes.post("/api/v1/books", controller.postNewBook);

routes.put("/api/v1/books/:id", controller.putBook);

routes.delete("/api/v1/books/:id", controller.deleteBook);

module.exports = routes;