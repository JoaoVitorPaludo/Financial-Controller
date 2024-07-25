import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

const listTransactionsController = async (req: Request, res: Response) => {
  const transactions = await prismaClient.transaction.findMany();

  return res.json(transactions);
};

export { listTransactionsController };
