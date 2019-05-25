import  Carro  from './Carro'
import { ConcessionariaInterface } from './ConcessionariaInterface\'';

export default  class Concessionaria implements ConcessionariaInterface {
    private endereco: string
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDeCarro: Array<Carro>){
        this.endereco = endereco
        this.listaDeCarros = listaDeCarro
    }

    public fornecerEndereco( ): string {
        return this.endereco
    }

    public mostrarListaDeCarros( ): Array<Carro> {
        return this.listaDeCarros
    }

    public fornecerHorarioDeFuncionamento( ): string {
        return 'De 2ª a sab das 8:00 as 18:00 horas'
    }
}

/* let concessionaria = new Concessionaria('Av Brasil');
console.log(concessionaria) */