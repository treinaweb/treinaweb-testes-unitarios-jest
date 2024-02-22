import { v4 } from 'uuid';

export type Account = {
  id: string;
  owner: string;
  balance: number;
  accountNumber: number;
  password: string;
}

export function createNewAccount(name: string, password: string) {
  let account: Account = {
    id: v4(),
    owner: name,
    balance: 0,
    accountNumber: parseInt(v4()),
    password: password
  }
  return account;
}

export function addNewBalance(account: Account, money: number) {
  return account.balance + money;
}

export class BankAccount {
  createAccount(name: string, password: string) {
    let account: Account = {
      id: v4(),
      owner: name,
      balance: 0,
      accountNumber: parseInt(v4()),
      password: password
    }
    return account;
  }

  addBalance(account: Account, money: number) {
    return account.balance + money;
  }

  deductBalance(account: Account, money: number, callBack: Function) {
    const newBalance = account.balance - money;

    if (newBalance < 0) {
      callBack('Saldo insuficiente');
      return { message: 'Saldo insuficiente ' }
    }
    return { message: `Transação efetuada com sucesso, seu saldo atual é: ${newBalance}` }
  }
}

export function saldoInvalido(message: string) {
  if( message === 'Saldo insuficiente') {
    console.log(message);
  }
}