import Veiculo from './Veiculo'  // não { } pq export = default

class Moto extends Veiculo {
    public acelerar( ): void {
        this.velocidade = this.velocidade + 20
    }
}

export default Moto