import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

// usado para o estudo de FormsModule 
//import { FormsModule }from '@angular/forms'

import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
registerLocaleData(localePt);

import { CarrinhoService } from './services/carrinho.service'

import { ROUTES as rotas } from './app.routes'

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import { OrdemCompraSucessoComponent } from './ordem-compra-sucesso/ordem-compra-sucesso.component'

//pipe
import { DescricaoReduzida } from './util/desc-reduzida.pipe';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzida,
    OrdemCompraComponent,
    OrdemCompraSucessoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule,  //usado estudo p/controle e validação de forms
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [ {provide: LOCALE_ID, useValue: 'pt-Br'}, CarrinhoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
