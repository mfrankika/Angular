import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculadoraRoutes } from './calculadora';
import { TarefaRoutes } from './tarefas';
import { JogoDaVelhaRoutes } from './jogo-da-velha';

export const routes: Routes = [
	{ 
		path: '', 
		redirectTo: '/JogoDaVelhaRoutes', 
		pathMatch: 'full' 
	},	
	...CalculadoraRoutes,
	...TarefaRoutes,
	...JogoDaVelhaRoutes
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
