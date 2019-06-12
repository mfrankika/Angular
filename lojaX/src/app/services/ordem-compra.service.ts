import { Injectable } from '@angular/core'
import { Http, RequestOptions, Headers, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';

import { URL_PEDIDOS } from '../app.api'

import { Pedido } from '../shared/pedido.model'

@Injectable() 
export class OrdemCompraService {

  constructor(private http: Http){ }

  // efetivar o serviço REST da compra em ordem-compra comp
  public efetivarCompra(pedido: Pedido): Observable<number> {
    let headers: Headers = new Headers()
    headers.append('Content-type', 'application/json')
    return this.http.post( URL_PEDIDOS, JSON.stringify(pedido), 
     new RequestOptions({headers: headers}) )
      .map((resposta: Response) => resposta.json().id)
  }
}





/* 1- para fazer a req / usar o canal de comunicação com a API  Rest  (json-server)
    injetar o serv http do angular no  ordem-compra.service (um client http)*/

/* 2- explicação efetivarCompras 1º  implementacao- trabalhar com observable do estudo de databinding
    usar metd post - este espera 3 param  1º- url - p onde sera feita a req http (importar a url da aplicacao)
    passar o resouce (/pedidos)
                                                               2º- bady - conteudo do request vai a enexo a req e 
    pode ser extraido do lado do servidor (o conteudo é pedido)
    neste momento o pedido é um obj literal e o bady suporta so string - necessario conversao
    usar metod  o json.stringify(passando o obj q é o pedido)

                                                                3º -argumentos opcionais de uma req http (params
    p q a API saiba como lidar com a req q esta sendo feita para ela) - setar os cabeçalho (headers) 
    usar a instancia de um new RequestOptions( ) - importar esse obj
    usar uma var let headers do tipo Headers q vai receber a instancia de um Headers()  
    encaminhar isso como argumento do RequestOptions 

    usar o content-type - é p API saber o que é que tem no conteudo do request 
    / neste caso o content-type do tipo aplication  json - transferindo o json do front p o backend

    - usar o map( ) p recuperar o response da req http e a partir da resposta
     extrair o conteudo  atraves do metd json - e extrari o id para poder ser 
     usado em outro  template como o numero do pedido
    
    - fazer um subscribe nesta implementacao deste observable para capturar o que é 
    produzido na stream de eventos - la na class de ordem compra efetuar o subscrive
    */