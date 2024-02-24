
const product = require('../modal/productSchema');

exports.createProduct = async (req, res, next) => {
  try {
    const newProduct = await product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    next(error);
  }
};

exports.getAllProduts = async (req, res, next) => {
  try {
    const products = await product.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const product = await product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const deletedProduct = await product.findByIdAndDelete(req.params.id);
    res.json(deletedProduct);
  } catch (error) {
    next(error);
  }
};
