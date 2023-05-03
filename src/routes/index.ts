import express from 'express';
import { ProductController } from '../controllers/Product.controller';

const routes = express.Router();

routes.get('/product', ProductController.FindAll);
routes.get('/product/:id', ProductController.FindOne);
routes.post('/product', ProductController.Create);
routes.put('/product/:id', ProductController.Update);
routes.delete('/product/:id', ProductController.Delete);

export { routes };
