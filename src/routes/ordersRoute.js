const express = require("express");
const ordersController = require("../controllers/ordersController");
const { checkToken } = require("../middlewares/auth");

const router = express.Router();

router.post("", checkToken, ordersController.addUserAddress);
router.get("/user-data", checkToken, ordersController.getUserData);
router.post("/place-order", ordersController.placeOrder);

module.exports = {
  router,
};