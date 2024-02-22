import { CpfMessageErrors, CpfValidator } from "../src/cpf-validator"

describe.skip('Teste validação de CPF suite', () => {
  let cpfValidate: CpfValidator;

  beforeEach(() => {
    cpfValidate = new CpfValidator();
  })

  it('Retorna CPF com letras - inválido', () => {
    const cpf = '000000000aa'

    const result = cpfValidate.validateCpf(cpf);

    expect(result.valid).toBe(false);
    expect(result.errors).toContain(CpfMessageErrors.SOMENTE_NUMEROS);
  })

  it('Retorna CPF somente número válidos', () => {
    const cpf = '00000000000'

    const result = cpfValidate.validateCpf(cpf);

    expect(result.valid).toBe(true);
  })

  it('Retorna CPF com mais de 11 caracteres - inválido', () => {
    const cpf = '000000000000'

    const result = cpfValidate.validateCpf(cpf);

    expect(result.valid).toBe(false);
    expect(result.errors).toContain(CpfMessageErrors.NUMERO_CARACTERES);

  })

  it('Retorna CPF com menos de 11 caracteres - inválido', () => {
    const cpf = '00000000'

    const result = cpfValidate.validateCpf(cpf);

    expect(result.valid).toBe(false);
    expect(result.errors).toContain(CpfMessageErrors.NUMERO_CARACTERES);

  })

  it('Retorna CPF 11 caracteres válidos', () => {
    const cpf = '00000000000'

    const result = cpfValidate.validateCpf(cpf);

    expect(result.valid).toBe(true);
  })

  it('Retorna CPF com digitos válidos', () => {
    const cpf = '73012784039'

    const result = cpfValidate.validateCpf(cpf);

    expect(result.valid).toBe(true);
  })

  it('Retorna CPF com digitos inválidos', () => {
    const cpf = '73012784049'

    const result = cpfValidate.validateCpf(cpf);

    expect(result.valid).toBe(false);
    expect(result.errors).toContain(CpfMessageErrors.DIGITO_VERIFICACAO);
  })

  it('Retorna CPF com digitos válidos - cobrindo restos 0', () => {
    const cpf = '72772701000'

    const result = cpfValidate.validateCpf(cpf);

    expect(result.valid).toBe(true);
  })

  it('Retorna CPF com digitos inválidos - cobrindo restos 0', () => {
    const cpf = '72772701005'

    const result = cpfValidate.validateCpf(cpf);

    expect(result.valid).toBe(false);
    expect(result.errors).toContain(CpfMessageErrors.DIGITO_VERIFICACAO);

  })
})