import { Router } from "express";
import { createTransactionsController } from "../controllers/transactions/createTransactionsController";
import { deleteTransactionController } from "../controllers/transactions/deleteTransactionController";
import { listTransactionsController } from "../controllers/transactions/listTransactionsController";

const transactionsRoutes = Router();

transactionsRoutes.get("/", listTransactionsController);

transactionsRoutes.post("/create", createTransactionsController);

transactionsRoutes.delete("/delete", deleteTransactionController);

export default transactionsRoutes;
