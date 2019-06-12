import { Component, OnInit } from '@angular/core';

import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../services/ofertas.service';

/*
1-injetar o ofertasServiços p/ receber do db.json  o http  getOfertas PorCategoria
2-importar o serviço, a tipagem dos dados(model = modelo de dados)
3-dizer qual sao os serviços q/ serao providos para  este comp  - colocar no providers o serviço
4.no construtor declarar o var que vai referenciar o OfertasService
5- executar o http : os metodos do serviço  utilizar o .then p qdo a promise estiver resolvida
6-a promise retorna um obj literal (ofertas)
7-criar uma var para receber esse obj e depois aplicar nos template data binding
*/

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasService] 
})
export class RestaurantesComponent implements OnInit {

  //funcao de receber obj da promise e  fazer o data binding no template
  public ofertas: Oferta[];

  /* exe no template 
     div *ngFor="let oferta of ofertas"> ...
      img class="img-fluid" [src]="oferta.imagens[0].url" />
      <h4>{{ oferta.titulo }}</h4>*/

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('restaurante')
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas;
      });
  }

}
