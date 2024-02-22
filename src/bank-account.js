"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saldoInvalido = exports.BankAccount = exports.addNewBalance = exports.createNewAccount = void 0;
var uuid_1 = require("uuid");
function createNewAccount(name, password) {
    var account = {
        id: (0, uuid_1.v4)(),
        owner: name,
        balance: 0,
        accountNumber: parseInt((0, uuid_1.v4)()),
        password: password
    };
    return account;
}
exports.createNewAccount = createNewAccount;
function addNewBalance(account, money) {
    return account.balance + money;
}
exports.addNewBalance = addNewBalance;
var BankAccount = /** @class */ (function () {
    function BankAccount() {
    }
    BankAccount.prototype.createAccount = function (name, password) {
        var account = {
            id: (0, uuid_1.v4)(),
            owner: name,
            balance: 0,
            accountNumber: parseInt((0, uuid_1.v4)()),
            password: password
        };
        return account;
    };
    BankAccount.prototype.addBalance = function (account, money) {
        return account.balance + money;
    };
    BankAccount.prototype.deductBalance = function (account, money, callBack) {
        var newBalance = account.balance - money;
        if (newBalance < 0) {
            callBack('Saldo insuficiente');
            return { message: 'Saldo insuficiente ' };
        }
        return { message: "Transa\u00E7\u00E3o efetuada com sucesso, seu saldo atual \u00E9: ".concat(newBalance) };
    };
    return BankAccount;
}());
exports.BankAccount = BankAccount;
function saldoInvalido(message) {
    if (message === 'Saldo insuficiente') {
        console.log(message);
    }
}
exports.saldoInvalido = saldoInvalido;
