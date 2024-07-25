import { isNumber } from "../isNumber";

describe("Teste da função isNumber", () => {
  it("Deve retornar undefined quandom o valor informado for um número", () => {
    const valor = 1;

    expect(isNumber(valor)).toBeUndefined();
  });

  it("deve retornar erro caso o valor não seja um numero", () => {
    const valor = "a";

    expect(() => isNumber(valor)).toThrowError(
      "Campo informado não é um número"
    );
  });

  it("deve retornar erro com o nome do campo personalizado", () => {
    const valor = "a";
    const nomeCampo = "campo";

    expect(() => isNumber(valor, nomeCampo)).toThrowError(
      `Campo ${nomeCampo} não é um número`
    );
  });
});
