export interface DaoInterface <T>{
    nomeTabela: string
    
    inserir( objetct : T ): boolean
    atualizar( objetct : T ): boolean
    remover( id: number ): T
    selecionar( id: number) : T
    selecionarTodos( ): [ T ]
} 

// T = type