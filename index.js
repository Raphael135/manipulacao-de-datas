// Comando base para pegar a data
let data = new Date();
// console.log(data);

// Pegar o ano atual com 4 digitos
let ano = data.getFullYear();
// console.log(ano);

// Pegar o mês atual - de 0 até 11 sendo 0 janeiro e 11 dezembro
let mes = data.getMonth();
//console.log(mes);

// Mostrar o mês no formato escrito
const mesesDoAno = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
let mesEscrito = mesesDoAno[data.getMonth()];
//console.log(mesEscrito);

// Pegar dia do mês - 1 até 31
let diaMes = data.getDate();
//console.log(diaMes);

// Pegar o dia da semana - 0 até 6
let diaSemana = data.getDay();
const diasDaSemana = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
let diaEscrito = diasDaSemana[data.getDay()];
//console.log(diaEscrito);

// Pegar hora 0 até 23
let hora = data.getHours();
//console.log(hora);

// Pegar o minuto - 0 até 59
let minuto = data.getMinutes();
//console.log(minuto);

// Pegar segundos - 0 até 59
let segundos = data.getSeconds();
//console.log(segundos);

// Pegar milisegundos - 0 até 999
let milisegundos = data.getMilliseconds();
console.log(milisegundos);

// Pegar a data no formato brasileiro - dia / mes / ano
let dataBR = data.toLocaleString("pt-BR", { dateStyle: "short" });
console.log(dataBR);

// Pegar os valores separados
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x) {
  return x < 10 ? "0" + x : "" + x;
}

let dataPadraoBR = `${addZero(diaMes)}/${addZero(mes)}/${ano}`;
console.log(dataPadraoBR);

// Comparar datas - maoir ou menor. EX: Vencimentos
let hoje = new Date();
let vencimento = new Date(2025, 7, 19);

if (hoje > vencimento) {
  console.log("Sua conta está vencida!");
} else {
  console.log("Ainda não venceu, tudo certo!");
}

// Diferença entre duas datas em dias
let dataInicial = new Date();
let dataFinal = new Date(2025, 11, 31);

let diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
let diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));

console.log(`${diferencaDias} dias!`);
