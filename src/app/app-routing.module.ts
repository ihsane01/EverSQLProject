import { TableQueryComponent } from './table-query/table-query.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"accueil",component:AccueilComponent},
  {path:"tableQuery",component:TableQueryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
