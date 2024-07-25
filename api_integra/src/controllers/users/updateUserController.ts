import { Request, Response } from "express";
import bcrypt from "bcrypt";

import { prismaClient } from "../../database/prismaClient";
import { required } from "../../utils/validations/required";

export const updateUserController = async (req: Request, res: Response) => {
  // Recebendo os dados do usuário
  const user = req.body;

  required(user.id, "id");

  // Criptografando a senha do usuário
  const cryptPassword = await bcrypt.hash(user.password || "", 10);

  // Atualizando o usuário no banco de dados
  const editedUser = await prismaClient.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: user.name,
      email: user.email,
      password: user.password ? cryptPassword : undefined,
    },
  });

  // Retornando o usuário editado
  res.json(editedUser);
};
