const express = require("express");
const router = express.Router();
const homeController = require("./src/controllers/home-controller");

router.get("/", homeController.paginaInicial);
router.post("/", homeController.respostaFormulario);

module.exports = router;
