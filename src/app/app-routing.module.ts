import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GridViewComponent } from './items/grid-view-layout.component';
import { HomeLayoutComponent } from './items/home-layout-component';
import { ListViewComponent } from './items/list-view-layout.component';
import { RecentViewComponent } from './items/recent-view-layout.component';
import { ReverseViewComponent } from './items/reverse-purchase-layout.component';
import { AddProductComponent } from './items/add-product/add-product.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

const routes:Routes = [
  {
    path:'' , component: HomeLayoutComponent
  },
  {
    path: 'Grid-View', component: GridViewComponent
  },
  {
    path: 'admin', component: AddProductComponent
  },
  {
    path: 'auth', component: AuthenticationComponent
  },
  {
    path: 'home' , component: HomeLayoutComponent
  },
  {
    path: 'List-View', component: ListViewComponent
  },
  {
    path: 'Recent', component: RecentViewComponent
  },
  {
    path:'Reverse', component: ReverseViewComponent
  }

 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
