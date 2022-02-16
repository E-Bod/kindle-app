import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavBarComponent } from './header/sidenavbar.component';
import { TopNavBarComponent } from './header/topnavbar.component';
import { HorzCardComponent } from './items/horz.card.component';
import { VertCardComponent } from './items/vert.card.component';
import { AppRoutingModule } from './app-routing.module';
import { GridViewComponent } from './items/grid-view-layout.component';
import { HomeLayoutComponent } from './items/home-layout-component';
import { ListViewComponent } from './items/list-view-layout.component';
import { RecentViewComponent } from './items/recent-view-layout.component';
import { ReverseViewComponent } from './items/reverse-purchase-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SideNavBarComponent,
    VertCardComponent,
    HorzCardComponent,
    GridViewComponent,
    HomeLayoutComponent,
    ListViewComponent,
    RecentViewComponent,
    ReverseViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
