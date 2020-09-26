import express from 'express';
const router = express.Router();
import { CustomerController } from '../controller/customer-controller';

//rotas para produto
//post localhost:3000/api/produtos
export const customerRouter = router
customerRouter.post('/', CustomerController.post);


//get all localhost:3000/api/produtos
customerRouter.get('/', CustomerController.getAll);


//get by id
customerRouter.get('/:customerId', CustomerController.getById);

//put
customerRouter.put('/:customerId',CustomerController.put);

//delete
customerRouter.delete('/:customerId', CustomerController.deleteById);
