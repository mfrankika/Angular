import { Pipe, PipeTransform } from '@angular/core'

//usar a funcao decoradora @Pipe p diferenciar de um componente
@Pipe({
  name: 'descricaoReduzida'
})

//transform( ) = responsavel por receber o dado que vai ser tratada
//substr( ) = metod p cortar string - 1º param posicao inicial da string , 2º param posicao final 
export class DescricaoReduzida implements PipeTransform {
  transform(texto: string, limite: number): string {
    if (texto.length > limite) {
      texto = texto.substr(0,limite) + '…'
    }
    return texto
  }
}

/* para usar o pipe personalizado fazer a importacao no app module 
    declarar em @NgModule */
/* no template topo o uso deste pipe */