import { DaoInterface } from "./DaoInterface";

//T funciona como um coringa
export class Dao<T> implements DaoInterface <T> {

    nomeTabela: string = ' '
    
    inserir( objetct : T  ): boolean {
        console.log ('logica de insert ')
        return true
    }
    atualizar( objetct :T ): boolean {
        console.log ('logica de atualizar ')
        return true
    }
    remover( id: number ): T  {
        console.log ('logica de remover ')
        return Object( )
    }
    selecionar( id: number) : T {
        console.log ('logica de select ')
        return Object( )
    }
    selecionarTodos( ): [T] {
        console.log ('logica getAll ')
        return [ Object( )]
    }

}

}