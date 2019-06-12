import { Http, Response } from '@angular/http'
import { Injectable } from '@angular/core'

// lib para converter observable para promise
import 'rxjs/add/operator/toPromise'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/retry'

import { URL_OFERTAS, URL_COMO_USAR, URL_ONDE_FICA } from '../app.api'

import { Oferta } from '../shared/oferta.model'

/* usando o http - importar  as func  Http e Injetable e  do angular  
                          - decorar a classe com @Injectable() - faz com q a classe possa receber serv externo
                          - iniciar var no constructo tipificando o serviço Http
                          -  no appModulo  importar HttpModule e tb por no array de imports
*/

@Injectable()
export class OfertasService {

  constructor(private http: Http){ }

  public getOfertas(): Promise<Oferta[]> {
    return this.http.get(`${URL_OFERTAS}?destaque=true`)
      .toPromise()
      .then( (resposta: Response) => resposta.json() )
  }

  //exibir ofertas por categoria = restaurante ou diversao 
  //return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
  public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]> {
       return this.http.get(`${URL_OFERTAS}?categoria=${categoria}`)
      .toPromise()
      .then( (resposta: Response) => resposta.json() )
  }

  public getOfertaPorId(id: number): Promise<Oferta> {
    return this.http.get(`${URL_OFERTAS}?id=${id}`)
      .toPromise()
      .then( (resposta: Response) => { return resposta.json()[0] } )
  }

 /* obj trazer somente o obj e nao + o array inteiro

  public getComoUsarOfertaPorId(id: number): Promise<string> {
    return this.http.get(`${URL_COMO_USAR}?id=${id}`)
      .toPromise()
      .then( (resposta: Response) =>{
        
        //traz o array e dentro do array o objeto que corresponde a oferta do id
        console.log(resposta.json( ))
        
        //shift altera array original e extrai a primeira posicao de um array
        console.log(resposta.json( ).shift( )) // = return resposta.json()[0]
      
        return  resposta.json( ) )
  } */



  public getComoUsarOfertaPorId(id: number): Promise<string> {
    return this.http.get(`${URL_COMO_USAR}?id=${id}`)
      .toPromise()
      //retornar apenas uma string e nao array todo
      .then( (resposta: Response) => resposta.json()[0].descricao )
  }

  public getOndeFicaOfertaPorId(id: number): Promise<string> {
    return this.http.get(`${URL_ONDE_FICA}?id=${id}`)
      .toPromise()
      .then( (resposta: Response) => resposta.json()[0].descricao )
  }

  // para lidar pesquisa por aprox (like) - termo ref criado no template
  public pesquisaOfertas(termo: string): Observable<Oferta[]> {
    return this.http.get(`${URL_OFERTAS}?descricao_oferta_like=${termo}`)
      .retry(10) //efetuar tentativas de novas conexões
      .map( (resposta: Response) => resposta.json() )
  }
}
