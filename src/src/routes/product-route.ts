import express from 'express';
const router = express.Router();
import { ProductController } from '../controller/product-controller';

//rotas para produto
//post localhost:3000/api/produtos
export const productRouter = router
productRouter.post('/', ProductController.post);


//get all localhost:3000/api/produtos
productRouter.get('/', ProductController.getAll);


//get by id
productRouter.get('/:productId', ProductController.getById);

//put
productRouter.put('/:productId',ProductController.put);

//delete
productRouter.delete('/:productId', ProductController.deleteById);
