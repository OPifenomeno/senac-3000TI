let pergunta1 = "Você sabe tocar violão? (Sim/Não)";
let pergunta2 = "Você joga video-games? (Sim/Não)";
let pergunta3 = "Você faz exercícios regularmente? (Sim/Não)";

let resposta1 = prompt(pergunta1);
let resposta2 = prompt(pergunta2);
let resposta3 = prompt(pergunta3);

console.log(pergunta1 +" - " +resposta1 +"\n"
            +pergunta2 +" - " +resposta2 +"\n"
            +pergunta3 +" - " +resposta3);




/*

OU
--------------------------------------------
const pergunta= [
    "Você sabe tocar violão?",
    "Você joga video-games?",
    "Você faz exercícios regularmente?"
];
let resposta=[];

resposta[0] = prompt(pergunta[0]);
resposta[1] = prompt(pergunta[1]);
resposta[2] = prompt(pergunta[2]);

console.log(
    pergunta[0]+" - "+resposta[0]+"\n"
    +pergunta[1]+" - "+resposta[1]+'\n'
    +pergunta[2]+" - "+resposta[2]
);

----------------------------------------------
*/