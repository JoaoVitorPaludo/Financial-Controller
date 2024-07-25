const required = (value: any, name?: string) => {
  if (!value) {
    throw new Error(`Campo ${name ? name : "obrigatório"} não preenchido`);
  }
};

export { required };
