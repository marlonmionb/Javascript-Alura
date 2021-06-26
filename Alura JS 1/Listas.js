console.log('Lista de Destinos:')

//Criar um ARRAY(lista)
const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);

//Adicionar itens em uma lista
listaDeDestinos.push('Curitiba');
console.log(listaDeDestinos);

//Remove itens em uma lista
listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);

//Para exibir somente um item de uma lista
console.log(listaDeDestinos[1]);
