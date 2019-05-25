/*importacao default 
import Carro, { qualquer_outro_item, xyz } from './Carro'*/


import { Pessoa } from './Pessoa'
import { Concessionaria } from './Concessionaria'
import { Carro } from './Carro'

/*--- criar carros---*/
let carroA = new Carro('Fusca',3)
let carroB = new Carro('Veloster', 2)
let carroC = new Carro('cerato', 4)

/* --- montar lista carro para concessionaria atraves array 
e associar ao atrib lista de carro da class concessionaria ---*/

//let listaDeCarro: Array<Carro> = [carroA, carroB, carroC]
let listaDeCarros: Carro[ ] = [ carroA, carroB, carroC ]

//atribuir lista de carro a concessionaria
let concessionaria = new Concessionaria('Av Brasil', listaDeCarros)

// exibir a lista de Carros
console.log(concessionaria.mostrarListaDeCarros( ))

/*compra o carro -  criar obj tipo pessoa e apartir da lista de carros  do obj concessionaria
efetuar a compra do carro preferido do obj pessoa*/

// criar um cliente p comprar o carro
let cliente = new Pessoa('kika', 'Veloster')

console.log(cliente.dizerCarroPreferido( ))

//comprar se o carro preferido do cliente existe na lista de carro da concessionaria

//um map for para percorrer a lista de carro
/*map um lup dentro de cada uma das posições do array 
  q permite recuperar o valor  e fazer uma determinada ação*/

                /* obs aqui ñ é a var q possui o array de carros 
                + sim o objto entao o tipo  é com base  na classe do obj*/
concessionaria.mostrarListaDeCarros( ).map( ( carro:  Carro) => {
  
    //comparar o obj carro no indice modelo  c/ metodo q retorna o carro preferido
    if (carro[' modelo '] == cliente.dizerCarroPreferido( )) {

        //compra o carro
        cliente.comprarCarro( carro)
    }
})

console.log(cliente.dizerCarroQueTem( ))

