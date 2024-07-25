-- CreateTable
CREATE TABLE "tb_transactions" (
    "id" SERIAL NOT NULL,
    "idUser" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "type" INTEGER NOT NULL DEFAULT 0,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tb_transactions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_transactions" ADD CONSTRAINT "tb_transactions_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "tb_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
