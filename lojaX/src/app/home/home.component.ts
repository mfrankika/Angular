import { Component, OnInit } from '@angular/core';

import { OfertasService } from '../services/ofertas.service'
import { Oferta } from '../shared/oferta.model'

/**
*  2-Injeção de serviço: Colocar a classe no provider e instanciá-lo no constructor
*/
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService] // array da classe  ofertas serviços
})
export class HomeComponent implements OnInit {

  // 7-var recebe os dados/ metodo da classe ofertasService
  public ofertas: Oferta[]

  //cria a variavel ja como um atrib do obj
  constructor(private ofertasService: OfertasService) { }
     //ofertasService= variavel   OfertasService= classe q esta sendo importada como serv.

  ngOnInit() {
   /*  //com this.ofertasService ja é possivel acessar os dados/metodos etc
     console.log (this.ofertasService.getOfertas())  */

     /* //testando o recebimento  da var ofertas   8-criar um data binding com template
     console.log(this.ofertas)

     8-criar um data binding com template html 
     div class="col-sm-4" *ngFor="let oferta of ofertas"> linha 11
 */

 /* // 9  promisse 1 devolvida de ofertasService
     // metd then - executa ação qdo a promessa estiver resolvida
   this.ofertasService.getOfertasTeste( ){
     .then ((ofertas: Oferta[ ] => {
       // o atributo da classe recupera o que foi passado pela promisse  
       // o this.ofertas  faz o data binding com o template  ver n 8
       this.ofertas = ofertas
       
       //explicacao com resolve e reject suposicao
       this.ofertasService.getOfertasTeste( ){
        .then ( 
          //resolve - obs do  js : func com 1  linha nao precisa da { }
           (ofertas: Oferta[ ] ) =>  this.ofertas = ofertas ,

           //rejetc   param = mensagen erro enviada 
           ( param: any)=> console.log( param )
           )          
        )
     } ))
    }
 */

 /* // uso do catch  
 this.ofertasService.getOfertasTeste( ){
    .then ( (ofertas: Oferta[ ] ) => { this.ofertas = ofertas },
    )  
    .catch( ( param: any)=>{ console.log( param ) }
    )          
 }
 */

 this.ofertasService.getOfertas().then(
      (ofertas: Oferta[]) => {
      this.ofertas = ofertas;
    }).catch((param) => {
      console.log(param)
    })
  }

}
