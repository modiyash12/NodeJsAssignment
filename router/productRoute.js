const express = require('express');

const router = express.Router();
const products = require('../controller/product');
const { validateItem,checkValidationResult } = require('../middleware/validationMiddleware');

router.get('/',products.getAllProduts);
router.post('/',validateItem,checkValidationResult, products.createProduct);
router.get('/:id', products.getProductById);
router.put('/:id',validateItem,checkValidationResult, products.updateProduct);
router.delete('/:id', products.deleteProduct);


module.exports = router;
