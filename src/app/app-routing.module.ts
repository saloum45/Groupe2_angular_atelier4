import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsProduitComponent } from './details-produit/details-produit.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  {
    path:"details",component:DetailsProduitComponent
  }
  ,
  {
    path:"",component:ProduitComponent
  }
  ,
  {
    path:"produit",component:ProduitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
