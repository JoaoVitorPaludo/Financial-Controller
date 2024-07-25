import { Request, Response } from "express";

import { prismaClient } from "../../database/prismaClient";
import { isNumber } from "../../utils/validations/isNumber";
import { required } from "../../utils/validations/required";

const findUserByIdController = async (req: Request, res: Response) => {
  // Recebendo o id do usuário
  const params = req.params;

  required(params.id, "id");
  isNumber(params.id, "id");

  // Buscando o usuário no banco de dados
  const user = await prismaClient.user.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  // Retornando o usuário
  res.json(user);
};

export { findUserByIdController };
