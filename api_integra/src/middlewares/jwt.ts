import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { prismaClient } from "../database/prismaClient";
import { decodedToken } from "../utils/jwtUtils";

const JwtMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Busca o token no header da requisição
  const token = req.headers.authorization;

  if (!token) {
    throw new Error("Token não informado");
  }

  const tokenWithoutBearer = token.split(" ")[1];

  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET não informado");
  }

  // Verifica se o token é válido
  jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET);

  // Faz o decode do token
  decodedToken(tokenWithoutBearer);

  // Buscar usuário no banco de dados
  const _token = await prismaClient.token.findFirst({
    where: {
      token: tokenWithoutBearer,
    },
  });

  // Verifica se o token existe
  if (!_token) {
    throw new Error("Token inválido");
  }

  next();
};

export { JwtMiddleware };
