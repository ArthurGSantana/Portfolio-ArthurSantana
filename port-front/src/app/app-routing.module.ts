import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/components/home/home.component';
import { SobreComponent } from './pages/components/home/components/sobre/sobre.component';
import { ProjetosComponent } from './pages/components/home/components/projetos/projetos.component';
import { DadosComponent } from './pages/components/home/components/dados/dados.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home/dados' },
  { path: 'home', component: HomeComponent, children: [
    { path: 'dados', component: DadosComponent },
    { path: 'projetos', component: ProjetosComponent },
    { path: 'sobre', component: SobreComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
