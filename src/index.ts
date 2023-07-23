import dotenv from 'dotenv';
import path from 'path';
import express, { NextFunction, Request, Response } from 'express';

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, "../../public/index.html"));
});



app.use(express.static(path.resolve(__dirname, "../../public")));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
