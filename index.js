import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.listen(port, console.log(`Server running on port ${port}`));
