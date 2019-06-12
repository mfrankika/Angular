/* 
1-importar router, os componentes envolvidos
2- criar uma constante , atriburi um array 
3- ter o path e qual o componente que esta associado a ele
4- atribuir o mapa de rotas a appModule
 5- em appModule importar RouterModule de router
 6- nos imports importar RouterModule e dizer  RouterModule.forRoot(ROUTES)
 7- usar router-outlet para mostrar as  os comp deacordo com as rotas
 8- usar routeLink
*/

import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { RestaurantesComponent } from './restaurantes/restaurantes.component'
import { DiversaoComponent } from './diversao/diversao.component'
import { AboutComponent } from './about/about.component'
import { OfertaComponent } from './oferta/oferta.component'
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component'
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component'
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurantes', component: RestaurantesComponent},
  {path: 'diversao', component: DiversaoComponent},
  {path: 'about', component: AboutComponent},
  {path: 'oferta', component: HomeComponent},
  {path: 'oferta/:id', component: OfertaComponent,
    children: [
      {path: '', component: ComoUsarComponent},
      {path: 'como-usar', component: ComoUsarComponent},
      {path: 'onde-fica', component: OndeFicaComponent}
    ]
  },
  {path: 'ordem-compra', component: OrdemCompraComponent}
]
