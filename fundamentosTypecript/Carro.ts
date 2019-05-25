import Veiculo from './Veiculo'  // não { } pq export = default

export default class Carro  extends Veiculo {  
    private numeroPortas: number   

    //Constructor de class filhas precisam ter chamada p func super
    // func super ajusta o contexto das variaveis
    constructor(modelo: string, numeroPortas: number) {
        super( )       
        this.modelo = modelo  //var protected  podem ser alterada a partir class filhas
        this.numeroPortas = numeroPortas
    }
    
    