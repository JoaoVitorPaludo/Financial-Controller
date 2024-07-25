import request from "supertest";
import { app } from "../server";

describe("Teste no endpoint de buscar todos usuários", () => {
  it("Deve retornar um array com todos os usuários", async () => {
    const response = await request(app).get("/users");

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe("Teste no endpoint de buscar todas as transações", () => {
  it("Deve retornar um array com todas as transações", async () => {
    const response = await request(app)
      .get("/transactions")
      .set("Authorization", "Bearer " + process.env.TOKEN_TEST);

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
  it("Deve retornar erro caso o token não seja informado", async () => {});
});
