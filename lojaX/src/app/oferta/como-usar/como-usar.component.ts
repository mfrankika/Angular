/* este comp precisa recber o id que vem da rota forRoot 
para ter seus conteudos internos preenchidos atraves de uma
req http - entao apartir de rotas filhas acessar conteudo de rota pai:
1- importar ActivateRoute de router
2- var no construtor da classe (route)
     obs: this.route.snapshot.params[' ']  - recupera o param  dos sistema de roteamento em questao
     neste caso do router-outlet filho do comp oferta
     aqui é necessario acessar param da rota parent da aplicação.
         usar: this.route.parent.snapshot.params[' id ']
3- consulta http na rota parent. 
        3.1 em ofertaService criar metodos para comoUsar e ondeUsar consulta http 
*/


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../services/ofertas.service'

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertasService ]
})
export class ComoUsarComponent implements OnInit {

  // obj receber a string da descrição qdo a promessa estiver resolvida e tb qdo usar  subscribe
  public comoUsar: string = '';

  constructor(
    private router: ActivatedRoute,
    private ofertasService: OfertasService
  ) {}

  ngOnInit() {
    this.router.parent.params.subscribe((params: Params) => {
      this.ofertasService.getComoUsarOfertaPorId(params.id)
        .then( (descricao: string) => this.comoUsar = descricao)
    })

    // recuperando param rota pai para rotas filhas - usando snapshot 
     /* this.ofertasService.getComoUsarOfertaPorId(this.router.parent.snapshot.params.id)
       .then( (descricao: string) => this.comoUsar = descricao ) */
              //fazer um data binding do comoUsar para o template
  }
}
