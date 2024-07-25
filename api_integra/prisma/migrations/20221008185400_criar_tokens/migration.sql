-- CreateTable
CREATE TABLE "tb_tokens" (
    "id" SERIAL NOT NULL,
    "idUser" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tb_tokens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_tokens" ADD CONSTRAINT "tb_tokens_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "tb_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
