import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { required } from "../../utils/validations/required";

const deleteTransactionController = async (req: Request, res: Response) => {
  const transaction = req.body;

  required(transaction.id, "id");

  const transactionExists = await prismaClient.transaction.findFirst({
    where: {
      id: transaction.id,
    },
  });

  if (!transactionExists) {
    throw new Error("Transação nao existe");
  }

  await prismaClient.transaction.delete({
    where: {
      id: transaction.id,
    },
  });

  res.json({ message: "Transação deletada" });
};

export { deleteTransactionController };
