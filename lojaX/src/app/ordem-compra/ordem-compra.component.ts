/* projeto final com reactiveFormsModule - (provem os controle a partir da 
  classe do comp)
   
1- para usar é necessario importar em app module  - formsModule de forms
    importar no meta-dado imports  tb
2-um atrib da class com a instancia de formsGroup (necessario p conextar com form -ver template)
2.1 - formsControls = correspondem a elementos do form (dado o nome do campo atribuir o 
       formControl) formControl tem 3 param - 1) valor inicial do campo 2)-Array de validadores
       3) Array de validadores assincronos
2.3 - fazer a conexao dos formControl da class com o html - usar diretiva formControlName passando
     o formControl em questao
3- validacao form - usar classe validators importar de forms e colocar como 2 param no formControl


*/
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrdemCompraService } from '../services/ordem-compra.service'

import { CarrinhoService } from '../services/carrinho.service'

import { Pedido } from '../shared/pedido.model'
import { ItemCarrinho } from '../shared/item-carrinho.model'

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})

export class OrdemCompraComponent implements OnInit {

  //p/fazer o teste no template do comp
  public idPedidoCompra: number

  //utilizar para recuperar os itens do carrinho
  public itensCarrinho: ItemCarrinho[] = []

  //explicacao 2, 2.1 - atrib para instanciar FormGroup (importar  de forms)
  public formulario: FormGroup = new FormGroup({
    endereco: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]),
    numero: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
    complemento: new FormControl(''),
    pagamento: new FormControl('', [Validators.required])
  })

  /*
    * Formulário com reactive forms
    */

  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.exibirItens() // ja pode fazer um data binding com template
    //console.log(this.itensCarrinho)
  }

  // testar validade do form - no else gerar um pedido - depois encaminhar para o servico o pedido
  public confirmarCompra(): void {
    if (this.formulario.status === "INVALID") {
      this.formulario.get('endereco').markAsTouched()
      this.formulario.get('numero').markAsTouched()
      this.formulario.get('complemento').markAsTouched()
      this.formulario.get('pagamento').markAsTouched()
      //console.log('formulario valido')
    } else {

      if (this.carrinhoService.exibirItens().length === 0) {
        alert('voce não selecionou nenhum item!')
      } else {

        let pedido: Pedido = new Pedido(
          this.formulario.value.endereco,
          this.formulario.value.numero,
          this.formulario.value.complemento,
          this.formulario.value.pagamento,
          this.carrinhoService.exibirItens()
        )

        // recuperar serv e chamar metd efetivaCompra passando o pedido
        //esse servirço retorna um observable ... fazer um subscrive e obter o id
        this.ordemCompraService.efetivarCompra(pedido)
          .subscribe((idPedido: number) => {
            this.idPedidoCompra = idPedido
            this.carrinhoService.limparCarrinho()
          })
      }
    }
  }

  /* explicação logica 1 - recuperar o Id do item p acrescentar qtd no carrinho do mesmo item 
  Uma ponte: do templare p/ classe do comp (event binding) e da classe do comp p o serviço
  vai chamar o carrinhoService  e la do carrinhoService usar o metodo adicioanar quantidade */
  public adicionar(item: ItemCarrinho): void {
    this.carrinhoService.adicionarQuantidade(item)
  }

  /* explicação elogica 2 - recuperar o id do item p/ acrescentar qtd no carrinho do mesmo item
  recuperar do template direto para o servicoCarrinho*/

  public diminuir(item: ItemCarrinho): void {
    this.carrinhoService.diminuirQuantidade(item)
  }
}


