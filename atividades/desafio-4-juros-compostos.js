const valorInicial = 5000;
const taxaJuros = 0.08;
const periodo = 5;

let valorFinal = valorInicial;

//TODO: Iterar, baseado no período em anos, para calculo do valorFinal com os juros.
for (let i = 1; i <= periodo; i++) {
    valorFinal += valorFinal * taxaJuros; // Calcula o valor dos juros compostos
}

console.log('Valor final do investimento: R$', valorFinal.toFixed(2));