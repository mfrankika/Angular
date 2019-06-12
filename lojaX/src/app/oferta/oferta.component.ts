/* obj e ver os detalhes da oferta qdo clicar  no btn - ver pg home e restaurante /diversao
p fazer isso :
1-criar a rota para o comp oferta
1.1 essa rota precisa  do param ou id da oferta clicada
    {path: 'oferta', component: HomeComponent}, // se nenhum id for passado traz comp home
    {path: 'oferta/:id', component: OfertaComponent} //oferta com id 
  2- config nos templates de cada comp os links dos comp para chegar ate ofertaComp 
       
          <a [routerLink]="['/oferta', oferta.id]" class="btn btn-outline-primary">Ver oferta</a>
       
       obs: acima n é so acessar a rota é tb passar um param (id) entao usar  property binding
       p passar o array q contem a rota e na sequencia os params
       neste caso nao é requisicao p o servidor e sim para propria pag
  3-recuperar os param dentro dos comps
*/


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../services/ofertas.service';
import { CarrinhoService } from '../services/carrinho.service'
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;

  
  constructor(
    private route: ActivatedRoute,
    private ofertasServices: OfertasService,
    private carrinhoService: CarrinhoService
  ) {}

/* snapshot  - uma foto da rota no momento
    subscribe - permite ficar escutando as alterações  e podemos agir qdo a mudança acontece */


  ngOnInit() {
    //snapshot não funciona quando se já está na rota.
    // this.ofertasServices.getOfertaPorId(this.route.snapshot.params.id)
    // .then( (oferta: Oferta) => this.oferta = oferta );

    /*recuperando rota  usando subscribe()*/
    // recebe func callback  algo q sera feito qdo as rotas forem modificadas
    this.route.params.subscribe((params: Params) => {
      this.ofertasServices.getOfertaPorId(params.id)
      .then( (oferta: Oferta) =>{
         this.oferta = oferta 
    })
   })
  }
  public adicionarItemCarrinho(oferta: Oferta): void {
    //console.log(this.oferta)
    this.carrinhoService.incluirItem(this.oferta)
    //console.log(this.carrinhoService.exibirItens())
  }

}

/* recuperando  o param (id) dentro comp com snapshot
1- importar  ActivateRouter de router 
2 -criar uma var p refereciar essa  ActivateRouter  no construtor 
3- com a  var de referencia acessar - this.route.snapshot.params[' id '] 

4- Uma vez que o comp consegue ja recuperar o param(id da oferta) encaminhado pela rota
    entao trazer dinamicamente o conteudo deste id  com base na consulta api rest
    4.1 - trazer o serv oferta p dentro de comp oferta e criar um 
           metodo q permita recuperar os dados
*/








