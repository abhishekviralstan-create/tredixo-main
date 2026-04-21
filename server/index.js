import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import connectDB from './config/connectDB.js';
import userRouter from './routes/userRoute.js';
import blogRouter from './routes/blogRoute.js';
// import commentRouter from './routes/commentRoute.js';
import errorMiddleware from './middleware/errorMiddleware.js';

const app = express();

// ENV variables
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.MONGO_URI;

// DB connect
connectDB(DB_URL);

// Allowed origins
const allowedOrigins = [
  'https://tredixo.netlify.app',
  'http://localhost:5173',
  'http://localhost:3000'
];

// Middlewares
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

// Test Routes
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Tredixo backend is running successfully'
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is healthy'
  });
});

// API Routes
app.use('/api/user', userRouter);
app.use('/api/blog', blogRouter);
// app.use('/api/comment', commentRouter);

// Error handler
app.use(errorMiddleware);

// Server start
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});