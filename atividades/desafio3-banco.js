//Entrada de dados
let saldoTotal = 2000;
let valorSaque = 1000;

if (valorSaque <= saldoTotal) {
    const saldoNovo = saldoTotal - valorSaque;
    console.log('Saque realizado com sucesso! Novo saldo: ' + saldoNovo);
} else {
    console.log('Saldo insuficiente. Saque não realizado!')
}