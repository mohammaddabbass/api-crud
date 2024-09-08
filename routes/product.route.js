import express from 'express';
import Product from '../models/product.model.js';
import {addProducts, getProducts, getProduct, editProduct, deleteProduct} from '../controllers/product.controller.js'
const router = express.Router();

router.post("/", addProducts);

router.get('/', getProducts);

router.get('/:id', getProduct);

router.put('/:id', editProduct);

router.delete('/:id', deleteProduct);

export default router;