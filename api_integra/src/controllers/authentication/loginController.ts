import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { prismaClient } from "../../database/prismaClient";
import { required } from "../../utils/validations/required";

const loginController = async (req: Request, res: Response) => {
  // Recebendo os dados do usuário
  const loginData = req.body;

  // Validando os dados de login
  required(loginData.email, "email");
  required(loginData.password, "password");

  // Verificando se o usuário existe
  const user = await prismaClient.user.findUnique({
    where: {
      email: loginData.email,
    },
  });

  if (!user) {
    throw new Error("Email ou senha incorretos");
  }

  // Verificando se a senha está correta
  const passwordMatch = await bcrypt.compare(loginData.password, user.password);

  if (!passwordMatch) {
    throw new Error("Email ou senha incorretos");
  }

  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET not defined");
  }

  // Gerando o token de autenticação
  const token = jwt.sign(
    {
      id: user.id,
      nome: user.name,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  // Guardando o token no banco
  await prismaClient.token.create({
    data: {
      token,
      idUser: user.id,
    },
  });

  // Retornando o token
  return res.json({
    token,
  });
};

export { loginController };

