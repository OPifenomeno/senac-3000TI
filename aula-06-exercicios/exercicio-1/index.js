let nome;
let idade;
console.log(typeof nome);
console.log(typeof idade);
/*
A saída foi "undefined", pois nenhum VALOR foi atribuído. 
E como em javascript não é necessário especificar manualmente o TIPO da variável,
só teremos o TIPO depois de atribuir um valor.
*/
nome = prompt('Qual é o seu nome?');
idade = prompt("Qual sua idade?");

console.log(typeof nome);
console.log(typeof idade);

/*Agora que os valores foram atribuídos, o javascript automaticamente
determina seus tipos baseado nos dados inseridos.*/

alert("Olá, ",nome,", você tem ",idade," anos.");
