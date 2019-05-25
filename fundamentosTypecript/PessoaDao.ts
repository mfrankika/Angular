import { DaoInterface } from './DaoInterface'
import {Pessoa} from './Pessoa';

export class PessoaDao implements DaoInterface {

    nomeTabela: string = 'tb_pessoa'
    
    inserir( objetct : Pessoa  ): boolean {
        console.log ('logica de insert ')
        return true
    }
    atualizar( objetct :Pessoa ): boolean {
        console.log ('logica de atualizar ')
        return true
    }
    remover( id: number ): Pessoa  {
        console.log ('logica de remover ')
        return new Pessoa ( ' ' , ' ' ) // passar nome e o carro preferido
    }
    selecionar( id: number) : Pessoa {
        console.log ('logica de select ')
        return new Pessoa ( ' ' , ' ' )
    }
    selecionarTodos( ): [ any ] {
        console.log ('logica getAll ')
        return  [ new Pessoa  ( ' ' ,' ' ) ]
    }

}