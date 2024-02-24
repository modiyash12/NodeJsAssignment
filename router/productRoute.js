const router = express.Router();
const products = require('../controller/product');
const { validateItem } = require('../middleware/validationMiddleware');

router.get('/',products.getAllProduts);
router.post('/', validateItem, products.createProduct);
router.get('/:id', products.getProductById);
router.put('/:id', validateItem, products.updateProduct);
router.delete('/:id', products.deleteProduct);
