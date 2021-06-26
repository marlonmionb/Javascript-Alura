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
const destino = 'Rio de Janeiro';

console.log('\n Destinos Possíveis: ');
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    } else {
        destinoExiste = false;
        //console.log('Destino NÃO existe');
    }
    contador += 1
}

console.log('Destino existe:', destinoExiste);

if (podeComprar && destinoExiste) {
    console.log('Boa viagem!')
}

//for recebe 3 argumentos
for (let i = 0; i < 3; i++) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    } else {
        destinoExiste = false;
        //console.log('Destino NÃO existe');
    }
}
