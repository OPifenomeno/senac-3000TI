relet nome;
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
determina seus tipos baseado nos dados inseridos. Entretanto, mesmo que tenhamos digitado apenas números na pergunta "idade",
o prompt sempre retorna uma string do que foi retornado. Portanto, 2 strings.
E é por isso que também é possivel usar o "+" para concatenar, já que tipos iguais estão sendo somados.*/

alert("Olá, "+nome,", você tem "+idade," anos.");
