import express from "express";
import routes from "./routes/index.controller";
import ErrorHandler from "./lib/error/ErrorHandler";
import { ActionNotFoundError } from "./errors/NotFoundError";
import cors from "cors";
const app = express();

app.use(cors());
app.use(routes);

app.use((req, res, next) => {
  next(ActionNotFoundError);
});

app.use(ErrorHandler);
export default app;
