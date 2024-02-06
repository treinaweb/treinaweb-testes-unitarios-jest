import { retornaCpf } from "../src/cpf-validator"

describe('Teste validação de CPF suite', () => {

  it('Retorna CPF válido', () => {
    const result = retornaCpf();
    expect(result).toBe('123456789-02');
  })
})