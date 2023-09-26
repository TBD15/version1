// import dotenv from "dotenv";
// import path from "path";
// import express, { NextFunction, Request, Response } from "express";

// dotenv.config();

// const app = express();
// app.use(express.json());

// app.get("/", (req: Request, res: Response) => {
//   res.sendFile(path.resolve(__dirname, "../../public/index.html"));
// });

// app.use(express.static(path.resolve(__dirname, "../../public")));

// const PORT = 3000;

// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}`);
// });

import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import passport from "passport";
import session from "express-session";
import path from "path";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

app.use(express.static(path.join(__dirname, "../../public")));

app.get("/signin", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

app.get("/signup", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

// This will catch all the routes and return index.html, and React Router will handle serving the correct page
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
