import { ItemCarrinho } from '../shared/item-carrinho.model'
import { Oferta } from '../shared/oferta.model'

export class CarrinhoService {

  //vai ser usada para trabalhar com o modelo de dados
  public itens: ItemCarrinho[] = []

  public exibirItens(): ItemCarrinho[] {
    return this.itens
  }

  public incluirItem(oferta: Oferta): void {
    //console.log('Oferta recebida no serviço', oferta)
    let itemCarrinho: ItemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1
    )

    // verificar se o item ja existe ou nao dentro de this.itens
    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade += 1
    } else {
      this.itens.push(itemCarrinho)
    }
  }

  public totalCarrinhoCompras(): number {
    let total: number = 0

    this.itens.map((item: ItemCarrinho) => {
      total = total + (item.valor * item.quantidade)
      //total += item.quantidade * item.valor
    })

    return total
  }

  // vai ser usado em ordem serviço para  acrescentar a qtd  do mesmo item no carrinho
  public adicionarQuantidade(itemCarrinho: ItemCarrinho): void {
    //incrementar quantidade
    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade += 1
    }
  }


  public diminuirQuantidade(itemCarrinho: ItemCarrinho): void {
    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)
    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade -= 1

      if (itemCarrinhoEncontrado.quantidade === 0) {

        /*  no instante que chegar a  zero remover o item do carrinho:
        recuperar o array itens/usar o splice (com base em um indice, recorta esse indice 
        e a quantidade de indice(itens) para identificar o indice dentro do array itens a ser removido
        usar indexof( ) q retorna a  posicao, a chave de um determinado item - neste caso o item é o 
        itemCarrinhoEncontrado */
        this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado), 1)
      }
    }
  }

  public limparCarrinho(): void {
    this.itens = []
  }
}
