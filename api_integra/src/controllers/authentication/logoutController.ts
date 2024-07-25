import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { decodedToken } from "../../utils/jwtUtils";

const logoutController = async (req: Request, res: Response) => {
  const token = req.headers.authorization;
  const tokenWithoutBearer = token?.split(" ")[1];
  if (!token) {
    throw new Error("Token não enviado");
  }

  const decoded = decodedToken(tokenWithoutBearer);

  await prismaClient.token.deleteMany({
    where: {
      idUser: decoded.id,
    },
  });

  res.json({ message: "Logout realizado com sucesso" });
};

export { logoutController };
