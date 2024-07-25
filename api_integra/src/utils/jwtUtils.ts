import jwt from "jsonwebtoken";

interface IToken {
  id: number;
  nome: string;
  iat: number;
  exp: number;
}

export const decodedToken = (token?: string) => {
  if (!token) {
    throw new Error("Token não informado");
  }

  // Faz o decode do token
  const decoded = jwt.decode(token);

  if (!decoded) {
    throw new Error("Token inválido");
  }

  return decoded as IToken;
};
