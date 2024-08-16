import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";
import cors from "cors";
import path from "path";

const app = express();
app.use(express.json());
app.use(cors()); // habilitando a requisição pra qualquer ip 

app.use(router);

app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "tmp"))
)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof Error) {
    // se for uma instancia de um erro então lança a excecao
    return res.status(400).json({
      error: err.message
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error"
  })
});

app.listen(3333, () => console.log("Server rodando em http://localhost:3333"));
