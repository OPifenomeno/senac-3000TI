let numeroUm = Number(prompt("Digite um número"));
let numeroDois=Number(prompt("Digite outro número"));

let numMaior=numeroUm > numeroDois,
numIgual= numeroUm === numeroDois,
primeiroDiv= numeroUm%numeroDois == 0,
segundoDiv=numeroDois%numeroUm == 0;


console.log("O primeiro número é maior que o segundo? ",numMaior );
console.log("O primeiro numero é igual ao segundo? ",numIgual);
console.log("O primeiro numero é divisível pelo segundo? ",primeiroDiv);
console.log("O segundo numero é divisível pelo primeiro? ",segundoDiv);