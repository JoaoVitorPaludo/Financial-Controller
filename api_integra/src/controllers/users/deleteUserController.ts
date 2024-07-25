import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { required } from "../../utils/validations/required";

const deleteUserController = async (req: Request, res: Response) => {
  // Recebendo os dados do usuário
  const user = req.body;

  required(user.id, "id");

  // Deletando o usuário no banco de dados
  await prismaClient.user.delete({
    where: {
      id: user.id,
    },
  });

  res.send("Usuário deletado com sucesso!");
};

export { deleteUserController };
