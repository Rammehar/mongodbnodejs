const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/:userId", userController.getUserById);

router.get("/", userController.getAllUser);

router.post("/", userController.createUser);

module.exports = router;
