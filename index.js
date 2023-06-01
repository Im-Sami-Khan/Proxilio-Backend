import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import connectDB from './config/db.js';

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(cors());

app.listen(port, console.log(`Server running on port ${port}`));
