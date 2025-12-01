const express = require("express");

const controller = require("../controllers/alunosControllerDB");

const router = express.Router();

//endpoints
router.get("/", controller.listar);
router.get("/:id", controller.buscarPorId);
router.post("/", controller.criar);
router.put("/:id", controller.atualizar);
router.delete("/:id", controller.excluir);


module.exports = router;