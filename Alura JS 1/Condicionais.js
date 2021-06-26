console.log('Trabalhando com condicionais:')

//Criar um ARRAY(lista)
const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;

console.log('\n Destinos Possíveis: ');
console.log(listaDeDestinos);

//Comando para formatar ALT + SHIFT + F
if (idadeComprador >= 18 || estaAcompanhada == true) {
    listaDeDestinos.splice(0, 1);
    console.log('Boa viagem!!!')
    temPassagemComprada = true;
} else {
    console.log('Não é maior de Idade e não posso vender')
}

console.log('\n\nEmbarque:')
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
} else {
    console.log('Você não pode embarcar')
}
