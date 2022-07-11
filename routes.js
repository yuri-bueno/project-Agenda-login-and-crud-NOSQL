const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeControle");
const loginControle = require("./src/controllers/loginControle");
const contatoControle = require("./src/controllers/contatoControle");

const { loginRequired } = require("./src/middlewares/middleware");



//rotas  da home
route.get("/", loginRequired, homeController.index);

//rotas de login
route.get("/login/index", loginControle.index);
route.post("/login/register", loginControle.register)
route.post("/login/login", loginControle.login)
route.get("/login/logout", loginControle.logout)

//rotas de contato
route.get("/contato/index", loginRequired, contatoControle.index)
route.post("/contato/register", loginRequired, contatoControle.register)
route.get("/contato/index/:id", loginRequired, contatoControle.editIndex)
route.post("/contato/edit/:id", loginRequired, contatoControle.edit)
route.get("/contato/delete/:id", loginRequired, contatoControle.delete)

module.exports = route;