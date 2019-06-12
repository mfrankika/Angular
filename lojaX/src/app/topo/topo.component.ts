import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

import '../util/rxjs-extensions'

import { OfertasService } from '../services/ofertas.service'
import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  //obj receber o retorno do observable da busca/pesq
  public ofertas: Observable<Oferta[ ]>;

/*  substituir pelo pipe async
 // ngFor n sabe trabalhar com observable entao criar outra var p trabalhar com array
  public ofertas2: Oferta[ ]
 */
  //trabalhar com subjetct  - importar  rxjs
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) { }

/* executando pesq do elem input com subject */
ngOnInit( ) {
    this.ofertas = this.subjectPesquisa //retorno Oferta[ ]
    .debounceTime(1000) // executa a ação switchMap apos 1 seg
    .distinctUntilChanged( ) //ver se a pes atual é identica a anterior ele desconsidera

    // switchMap é disparado sempre que o next dos subjetc  for executado 
      .switchMap( ( termoBusca: string  ) => { 
          //console.log(' req http p api ')

          //evitar pesq vazia - trim( ) elimina os espaços em brancos esq e dir 
          if (termoBusca.trim( ) === ' ') {
              // vai retornar um observable de array de ofertas vazio - nem realiza a pesq
              // o of  diz qual é o tipo do observable por mais q seja vazio
            return Observable.of<Oferta[ ]>([ ])
          }
          // retorna um observable q pode ser vazio caso nao  haja nenhuma ocorrencia do termo pesq
          return this.ofertasService.pesquisaOfertas( termoBusca )
      })
     . catch((erro: any) => {
        console.log(erro)
        return Observable.of<Oferta[ ]>([ ])
      })

      /* usar o pipe async - este indica que pode fazer um subscribe neste observable
      this.ofertas.subscribe(  (ofertas: Oferta[ ] ) => {
        //console.log( ofertas)) 
        this.ofertas2 = ofertas //é array pode ser passado p ngFor no template
      })  */ 
      
    }

    /* executando pesq do elem input com subject */
    public pesquisa( termoBusca: string): void {
      //console.log(' keyup caracter: ', termoBusca)
      this.subjectPesquisa.next( termoBusca ) //subject atuando do lado do observador
            //subjectPesquisa recebe param pesquisa e dispara observables
    }

    public limpaPesquisa(): void {
      this.subjectPesquisa.next(' ')
    }

}


  /****** pesquisa no elemento input usando observable  no ngOnInit( )  ****/  
 /* ngOnInit() {
 
 //1- implementar o event binding com : 
        //public pesquisa(event: Event):void{

          // recurperar a instrução contida no value do input pesq poderia ser feito:
          //(<HTMLInputElement>event.target).value
          
          //usar tecnica de var de ref p o elemento do template
          /* 1.1 - no template  uma var com #  e essa passa referenciar o elem 
                 podendo recuperar a var e explorar seus atributos
                 #termoPesquisa  (keyup)="pesquisa(termoPesquisa.value)" */
          
 // 2-  implementar  um observable - fazer a req p API das ofertas baseada no termoPesquisa
          //criar dentro de OfertasService   e aqui injetar o OfertasService  e executar a pesq aqui
/* como é feito: */
/*public pesquisa( termoDaBusca: string ): void{
    this.ofertas = this.ofertasService.pesquisaOfertas( termoDaBusca )
    //console.log( this.ofertas) 
    this.ofertas.subscribe(
      ( ofertas: Oferta[ ] ) => console.log( ofertas ),
       erro => console.error('Erro status: ' + erro),
      ( ) => console.log('Fluxo de eventos completo!')
      )      
  } 
 }  */
/****   fim  exe com observable     *****/
