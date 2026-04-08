import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { globalErrorHandler } from './middlewares/errorMiddleware.js';
import userRoutes from "./modules/profile/user.route.js";
import authRoutes from "./modules/auth/auth.route.js";
import cookieParser from 'cookie-parser';


const app: Application = express();

// ✅ ONLY ONE CORS (correct one)
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use(cookieParser()); // ✅ MUST ADD
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ status: 'success', message: 'Server is up' });
});

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'success', message: 'Server is healthy' });
});

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.use(globalErrorHandler);

export default app;