import { DaoInterface } from './DaoInterface'
import Concessionaria from './Concessionaria';

export class ConcessionariaDao implements DaoInterface {
    nomeTabela: string = 'tb_concessionaria'
    
    inserir( objetct : Concessionaria ): boolean {
        console.log ('logica de insert ')
        return true
    }
    atualizar( objetct : Concessionaria ): boolean {
        console.log ('logica de atualizar ')
        return true
    }
    remover( id: number ): Concessionaria {
        console.log ('logica de remover ')
        return new Concessionaria( ' ' , [ ] )
    }
    selecionar( id: number) : Concessionaria {
        console.log ('logica de select ')
        return new Concessionaria( ' ' , [ ] )
    }
    selecionarTodos( ): [ any ] {
        console.log ('logica getAll ')
        return  [ new Concessionaria ( ' ' , [ ] ) ]
    }

}