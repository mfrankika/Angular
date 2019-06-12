/* arq para estudo do uso de template forms  */
/*
1- configurar FormsModule no app module 
        1.1 - importar de @angular/forms 
        1.2 - declarar nos imports  de @NgModule
2- fazer a conexao FormsModule com o template
        2.1 - criar um var de template a diretiva ngForm dentro da tg form
                (ngForms é o obj javascript q representa o estado do form no dom)
                ver template 
        2.3- p/testar e ver este obj - fazer interpolacao com o ngform - ver template
        2.4 - ngForm submeter p/ classe do comp p implementar as regras de negocio
                usar diretiva ngSubmit  atraves do event binding  no from  e btn = submit
        2.5 - receber o ngForm na classe e implementar o metod passado no  submit do template
        2.5.1 - usar ViewChild( ) ( permite decorar um atrib da classe com os valores contido 
                 numa variavel de template)  passar como argumento a var de ref do template

        3 - Validação dos campo do form dentro do controls (o estado dos campos)
        3.1 - campo pristine: qdo nenhum valor foi add a ele no momento
                           dirty: qdo um valor for add ainda q removido
                           touched e untouched: permite ver se o usuario aplicou foco sobre o campo
                                            untouched o usuario ate o momento nao interagiou com o campo
                           valid e invalid - se estao ou nao validos
                           
        3.2- as validações dos campos podem ser feita atraves do atrib do html
               required, paternar (inclusao de regex), minlength e maxnlength (qdt de caracteres)
               p cada um desse estados o angular da uma classe CSS cuja o estilo pode ser definido
               nos arq de estilo.(verificar arq htm e css nas propriedade ditas aqui)
        3.3- configurar as msg dos campos  do form usar diretiva ngIf  com variavel de referencia
               recebendo o ngModel exe #inputEndereco="ngModel" olhar arq html
        
        3,4 - usar o servico para o envio do formulario 
        3.5- decidir no templare do usuario se vai ser exibido  o conteudo do form ou  renderizar 
               a view endereco ordem comprar sucesso
        3.5.1



 */ 

/* 
 
import  { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrdemCompraService } from '../../services/ordem-compra.service';
import { Pedido } from '../shared/pedido.model'

@Component({
    selector: 'app-ordem-compra',
    templateUrl: './ordem-compra.component.html',
   //sttyeUrls: ['./ordem-compra.component.css'],
     providers:[ OrdemCompraService]
})
export class OrdemCompraComponent  implements OnInit {

    //2.5 - var de template ViewChild
    @ViewChild( ' formulario ') public f : NgForm

    //obj fazer teste no template comprars qual template mostrar
    //ordem-compra-sucesso ou compra
    @Input() public idPedidoCompra:number

    constructor(private ordemCompraService: OrdemCompraService) { }

    ngOnInit() { 

    }

   //2.5.1 - metodo do event binding da diretiva submit do form - importar ngForm de forms
   public confirmarCompra(formulario: NgForm): void {
        //console.log (this.f)
        
        //encaminhar um obj do tipo pedido
        let pedido: Pedido = new Pedido(
                this.f.value.endereco,
                this.f.value.numero,
                this.f.value.complemento,
                this.f.value.formaPgt
        )

        // enviar o pedido - esse metd serv retorna um observable
        //é necessario um subscrive e passar um func de como sera tratado esse retorno
        this.ordemCompraService.efetivarCompra(pedido)
         .subscribe(( idPedido: number) => {
                console.log('Pedido cadastrado com sucesso! ID do pedido : ' + idPedido)
         })
   }

}

*/