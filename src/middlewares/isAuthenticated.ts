import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(
      token,
      process.env.JWT_SECRET ? process.env.JWT_SECRET : ""
    ) as Payload;

    //recuperar o id do token e colocar dentro de uma variavel user_id dentro do req
    req.user_id = sub; 

    return next(); // serve pra indicar ao expresse que ele pode seguir para a próxima função.
  } catch (error) {
    return res.status(401).end();
  }
}
