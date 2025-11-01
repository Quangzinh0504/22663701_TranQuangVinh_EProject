const express = require("express");
const ProductController = require("../controllers/productController");
const isAuthenticated = require("../utils/isAuthenticated");

const router = express.Router();
const productController = new ProductController();

router.post("/", isAuthenticated, productController.createProduct);
router.post("/buy", isAuthenticated, productController.createOrder);
router.get("/", isAuthenticated, productController.getProducts);


/// chuc nang tim id theo san pham

// router.get("/:id", isAuthenticated, productController.getid);

router.get("/:id", isAuthenticated, productController.getid);



module.exports = router;
