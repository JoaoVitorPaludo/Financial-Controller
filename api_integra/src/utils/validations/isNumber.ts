const isNumber = (value: any, name?: string) => {
  const valor = Number(value);

  if (isNaN(valor)) {
    throw new Error(`Campo ${name ? name : "informado"} não é um número`);
  }
};

export { isNumber };
