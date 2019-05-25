//import { ConcessionariaDao } from './ConcessionariaDao';
//import { PessoaDao } from './PessoaDao';

import { Dao } from './Dao'
import { Pessoa } from './Pessoa';
import Concessionaria from './Concessionaria';

//let dao: ConcessionariaDao = new  ConcessionariaDao( )
//let  dao2: PessoaDao = new PessoaDao( )

let concessionaria = new Concessionaria( ' ' , [ ])  // precisa passar um endereço e um [ ] listaDeCarro

//dao.inserir( concessionaria); - utilizar classe Dao  generico
//dao2.atualizar( pessoa) usar Dao classe generico

let pessoa: Pessoa = new Pessoa(' ' , ' ')

let dao3: Dao <Concessionaria> = new Dao<Concessionaria>( )
let dao4: Dao<Pessoa> = new Dao<Pessoa>( )

dao3.inserir(concessionaria)
dao4.remover( 5 )
