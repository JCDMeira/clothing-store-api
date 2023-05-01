import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'Hello world' }));

app.listen('3333', () => 'hello world');

export { app };
