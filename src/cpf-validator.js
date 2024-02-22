"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CpfValidator = exports.CpfMessageErrors = void 0;
var CpfMessageErrors;
(function (CpfMessageErrors) {
    CpfMessageErrors["NUMERO_CARACTERES"] = "CPF deve ter 11 caracteres";
    CpfMessageErrors["SOMENTE_NUMEROS"] = "CPF deve ter somente n\u00FAmero";
    CpfMessageErrors["DIGITO_VERIFICACAO"] = "CPF inv\u00E1lido";
})(CpfMessageErrors || (exports.CpfMessageErrors = CpfMessageErrors = {}));
var CpfValidator = /** @class */ (function () {
    function CpfValidator() {
    }
    CpfValidator.prototype.validateCpf = function (cpf) {
        var cpfErrors = [];
        if (!(/^\d+$/.test(cpf))) {
            cpfErrors.push(CpfMessageErrors.SOMENTE_NUMEROS);
        }
        if (cpf.length > 11) {
            cpfErrors.push(CpfMessageErrors.NUMERO_CARACTERES);
        }
        if (cpf.length < 11) {
            cpfErrors.push(CpfMessageErrors.NUMERO_CARACTERES);
        }
        if (!this.cpfDigitoValido(cpf)) {
            cpfErrors.push(CpfMessageErrors.DIGITO_VERIFICACAO);
        }
        return { valid: cpfErrors.length > 0 ? false : true, errors: cpfErrors };
    };
    CpfValidator.prototype.cpfDigitoValido = function (cpf) {
        var soma;
        var resto;
        soma = 0;
        for (var i = 1; i <= 9; i++) {
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
        for (var i = 1; i <= 10; i++) {
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
    };
    return CpfValidator;
}());
exports.CpfValidator = CpfValidator;
