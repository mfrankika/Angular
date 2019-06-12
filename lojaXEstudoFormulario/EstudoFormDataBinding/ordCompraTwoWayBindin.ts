/* objetivo desta arq é o estudo de validacao com two-way-binding 
p trab com form */

/*
import { Pedido } from '../shared/pedido.model'
import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../services/ordem-compra.service';

@Component({
    selector: 'app-ordem-compra',
    templateUrl: './ordem-compra.component.html',
    sttyeUrls: ['./ordem-compra.component.css'],
    providers:[ OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

    // 1- criar os atrib/var p o controle dos campos desejado
    public endereco: string = ' '
    public numero: string = ' '
    public complemento: string = ' ' 
    public formaPgt : string = ' '

    // 4- fazer a validação  dos dados usando two-way-binding
       //4.1- parte visual dos campos como invalido e valido - var p/ controles dos campos
       public enderecoValido: boolean
       public numeroValido: boolean 
       public complementoValido: boolean
       public formaPgtValido: boolean

       //4.2 fazer a validação dentro do metd atualiza

       // 5- atrib/var p controle estado primitivo dos campos
       public enderecoEstadoPrmitivo: boolean  = true // no momento q comp é carregado estd prim é true
       public numeroEstadoPrmitivo: boolean  = true
       public complementoEstadoPrmitivo: boolean = true
       public formaPgtEstadoPrmitivo: boolean = true

    //6- trabalhar com a logica das variaves de controle de campo no template 
    
    //-7 controlar o botao de confirmar comprar  no form
    public formEstado: string = 'disabled'

    // faz referencia ao model e instancia um novo pedido vazio
    public pedido: Pedido = new Pedido(' ', ' ', ' ',' ' ,[ ])

    //p fazer o teste no template do comp
    public idPedidoCompra: number

    /* 8 - criar uma camada de serviço capaz de receber os dados do Form 
         e encaminhar p o servidor utilizando uma interface REST
         criar o ordemOrdemCompraService  na pasta services e injetar aqui o serviço */

         // 2 - fazer um property binding dos valores desse atrib/var p os value dos campos no templat
         
         //3 - implementar os metodos criados a partir do property binding
   /*      
    constructor( private ordemCompraService = OrdemCompraService) { }
         
    ngOnInit() { 
             // testando o metod efetivar comprar de ordemCompraService
             //this.ordemCompraService.efetivarCompra( )
    }

    /* implementacao 1 estudo com two-way-databinding obj-
    recuperar o serv /chamar efetivar compra /passando o pedido */
   /*  public confirmarCompra( ): void {
    
        //trazendo os dados digitados de ordem comprar p montar obj  pedido
        this.pedido.endereco = this.endereco
        this.pedido.numero = this.numero
        this.pedido.complemento = this.complemento
        this.pedido.formaPagamento = this.formaPgt

      // uma vez ja com o obj pedido  encaminhar para o serv.
        this.ordemCompraService.efetivarCompra(this.pedido)
     
      // efetuar um sbscribe depois da implementacao em ordem-compra.service do obsevable
        .subscribe( ( idPedido: number) =>{
          this.idPedidoCompra = idPedido
       })
  } 
   
    public atualizaEndereco(endereco: string): void{
        this.endereco = endereco
       // console.log( 'para ver se esta sendo atualizado  ', this.endereco  )
       
       //qualquer alteraçao no campo tira do estd primitivo
       this.enderecoEstadoPrmitivo = false
       
        // se a string for maior que 3
        if (this.endereco.length >3) { 
            this.enderecoValido = true
        } else {
            this.enderecoValido = false
        }

        this.habilitarForm( ) 
    }

    public atualizaNumero(numero: string): void {
        this.numero = numero
    
        this.numeroEstadoPrmitivo = false

    // se a string for maior que 3
    if (this.numero.length >0) {
        this.numeroValido = true
    } else {
        this.numeroValido = false
    }

    this.habilitarForm( ) 
 }

public atualizaComplemento(complemento: string): void{
        this.complemento = complemento   
        
        this.complementoEstadoPrmitivo = false

        if (this.complemento.length >0) {
            this.complementoValido = true
        }

        this.habilitarForm( ) 
}

public atualizaFormaPgt(formaPgt: string): void{
        this.formaPgt = formaPgt

        this.formaPgtEstadoPrmitivo = false

        if (this.formaPgt.length >0) {
            this.formaPgtValido = true
        } else {
            this.formaPgtValido = false
        }
        this.habilitarForm( ) 
}

//metdo sera chamado sempre que houver uma interação com form ... no final de cada atualiaza( ) 
public habilitarForm( ): void {
        if (this.enderecoValido === true &&  this.numeroValido === true &&  this.formaPgtValido === true ) {
            this.formEstado = ""
        }else{ 
            this.formEstado = 'disabled'
        }   
}
          

}
*/