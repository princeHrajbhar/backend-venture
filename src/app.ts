import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { globalErrorHandler } from './middleware/errorMiddleware.js';

const app: Application = express();

app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ status: 'success', message: 'Server is up' });
});
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'success', message: 'Server is healthy' });
});

// Global Error Middleware
app.use(globalErrorHandler);

export default app;