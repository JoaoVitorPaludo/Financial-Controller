import { Request, Response } from "express";
import bcrypt from "bcrypt";

import { prismaClient } from "../../database/prismaClient";
import { required } from "../../utils/validations/required";

const createUserController = async (req: Request, res: Response) => {
  // Recebendo os dados do usuário
  const user = req.body;

  required(user.name, "name");
  required(user.email, "email");
  required(user.password, "password");

  // Criptografando a senha do usuário
  const cryptPassword = await bcrypt.hash(user.password, 10);

  // Salvando o usuário no banco de dados
  const createdUser = await prismaClient.user.create({
    data: {
      name: user.name,
      email: user.email,
      password: cryptPassword,
    },
  });

  // Retornando o usuário criado
  res.json(createdUser);
};

export { createUserController };
