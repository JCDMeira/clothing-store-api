import express from 'express';

const routes = express.Router();

routes.get('/product', (req, res) => res.json({ message: 'get all' }));
routes.get('/product/:id', (req, res) => res.json({ message: 'get one' }));
routes.post('/product', (req, res) => res.json({ message: 'create' }));
routes.put('/product/:id', (req, res) => res.json({ message: 'update' }));
routes.delete('/product/:id', (req, res) => res.json({ message: 'delete' }));

export { routes };
