import { required } from "../required";

describe("Teste da função required", () => {
  it("Deve retornar undefined caso o valor exista", () => {
    const valor = "teste";

    expect(required(valor)).toBeUndefined();
  });

  it("Deve retornar erro caso o valor não exista", () => {
    const valor = null;

    expect(() => required(valor)).toThrowError(
      "Campo obrigatório não preenchido"
    );
  });

  it("Deve retornar erro com o nome do campo personalizado", () => {
    const valor = null;
    const nomeCampo = "Nome";

    expect(() => required(valor, nomeCampo)).toThrowError(
      `Campo ${nomeCampo} não preenchido`
    );
  });
});
