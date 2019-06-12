import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ordem-compra-sucesso',
  templateUrl: './ordem-compra-sucesso.component.html',
  styleUrls: ['./ordem-compra-sucesso.component.css']
})
export class OrdemCompraSucessoComponent implements OnInit {

  //esta apto a receber param externos de um comp parent
  @Input() public idPedidoCompra: number

  constructor() { }

  ngOnInit() {
  }

}
