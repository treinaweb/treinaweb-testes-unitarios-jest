export enum CpfMessageErrors {
  NUMERO_CARACTERES = 'CPF deve ter 11 caracteres',
  SOMENTE_NUMEROS = 'CPF deve ter somente número',
  DIGITO_VERIFICACAO = 'CPF inválido'
}

export interface CpfResult {
  valid: boolean,
  errors: CpfMessageErrors[],
}

export class CpfValidator {
  public validateCpf(cpf: string): CpfResult {
    const cpfErrors: CpfMessageErrors[] = [];

    if (!(/^\d+$/.test(cpf))) {
      cpfErrors.push(CpfMessageErrors.SOMENTE_NUMEROS);
    }

    if (cpf.length > 11) {
      cpfErrors.push(CpfMessageErrors.NUMERO_CARACTERES);
    }

    if (cpf.length < 11) {
      cpfErrors.push(CpfMessageErrors.NUMERO_CARACTERES);
    }

    if(!this.cpfDigitoValido(cpf)) {
      cpfErrors.push(CpfMessageErrors.DIGITO_VERIFICACAO);
    }
    return { valid: cpfErrors.length > 0 ? false : true, errors: cpfErrors };
  }

  private cpfDigitoValido(cpf: string) {
    let soma;
    let resto;
    soma = 0;

    for (let i = 1; i <= 9; i++) {
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) {
      resto = 0;
    }

    if (resto != parseInt(cpf.substring(9, 10))) {
      return false;
    }

    soma = 0;

    for (let i = 1; i <= 10; i++) {
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) {
      resto = 0;
    }

    if (resto != parseInt(cpf.substring(10, 11))) {
      return false;
    }

    return true;
  }
}
