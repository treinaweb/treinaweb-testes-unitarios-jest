jest.mock('../src/bank-account', () => ({
  ...jest.requireActual('../src/bank-account'),
  addNewBalance: () => { return 100 }
}))

jest.mock('uuid', () => ({
  v4: () => '123123'
}))

import * as Bank from '../src/bank-account';

describe.only('Testando mocks em módulos', () => {
  it('Testando função addBalance - retorno 100', () => {
    let account = {
      balance: 100
    };

    const result = Bank.addNewBalance(account as Bank.Account, 50);
    expect(result).toBe(100);
  })

  it('Criando nova conta válida', () => {
    let account: Account = {
      id: '123123',
      owner: 'Wesley',
      balance: 0,
      accountNumber: 123123,
      password: '123abc'
    }

    const result = Bank.createNewAccount('Wesley', '123abc');
    expect(result).toEqual(account);
  })
})




import { Account, BankAccount, saldoInvalido } from '../src/bank-account';

/* describe.skip('BankAccount actions suite', () => {
  let bankAccount: BankAccount;

  beforeEach(() => {
    bankAccount = new BankAccount();
  })

  it('Deve adicionar dinheiro na conta - válido', () => {
    let account = {
      balance: 0
    }

    const moneyAdd = 100;

    const novoSaldo = bankAccount.addBalance(account as Account, moneyAdd);
    expect(novoSaldo).toBe(100);
  })

  it('Deve retirar dinheiro da conta saldo insuficiente', () => {
    let account = {
      balance: 0
    }

    const moneySub = 100;

    const novoSaldo = bankAccount.deductBalance(account as Account, moneySub, saldoInvalido);
    expect(novoSaldo).toEqual({ message: 'Saldo insuficiente '});
  })

  it('Deve retirar dinheiro da conta - com sucesso', () => {
    let account = {
      balance: 200
    }

    const moneySub = 100;

    const novoSaldo = bankAccount.deductBalance(account as Account, moneySub, () => {});
    expect(novoSaldo).toEqual({ message: `Transação efetuada com sucesso, seu saldo atual é: 100`});
  })
})

describe.only('Traqueando callback - mocks manuais', () => {
  let cbArgs: string[] = [];
  let timesCalled = 0; 
  let bankAccount: BankAccount;

  const callBackMock = jest.fn();

  beforeEach(() => {
    bankAccount = new BankAccount();
  }) */
/* 
function callBackMock(arg: string) {
    cbArgs.push(arg);
    timesCalled++;
  }  */

  /* afterEach(() => {
    cbArgs = [];
    timesCalled = 0;
    jest.clearAllMocks();
  })

  it('Deve retirar dinheiro da conta - callback track - saldo insuficente', () => {
    let account = {
      balance: 0
    }

    const moneySub = 100;

    const novoSaldo = bankAccount.deductBalance(account as Account, moneySub, callBackMock);
    expect(novoSaldo).toEqual({ message: 'Saldo insuficiente '});
    expect(callBackMock).toHaveBeenCalledWith('Saldo insuficiente');
    expect(callBackMock).toHaveBeenCalledTimes(1);
  })

  it('Deve retirar dinheiro da conta - callback track - com sucesso', () => {
    let account = {
      balance: 200
    }

    const moneySub = 100;

    const novoSaldo = bankAccount.deductBalance(account as Account, moneySub, callBackMock);
    expect(callBackMock).toBeNull;
    expect(callBackMock).toHaveBeenCalledTimes(0);
    expect(novoSaldo).toEqual({ message: `Transação efetuada com sucesso, seu saldo atual é: 100`});
  })

  it.only('Deve retirar dinheiro da conta - track método deductBalance', () => {
    let account = {
      balance: 200
    }

    const moneySub = 100;

    function callback() {}

    const deductBalance = jest.spyOn(bankAccount, 'deductBalance');
    bankAccount.deductBalance(account as Account, moneySub, callback);
    expect(deductBalance).toHaveBeenCalledTimes(1);
    expect(deductBalance).toHaveBeenCalledWith(account as Account, 100, callback);
  })
}) */