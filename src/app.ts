import express from 'express';
import { routes } from './routes';
import './config/db';

const app = express();

app.use(express.json());
app.use(routes);

export default app;
