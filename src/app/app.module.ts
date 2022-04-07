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
import{ HttpClientModule} from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddProductComponent } from './items/add-product/add-product.component'
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './auth/authentication/authentication.component';


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
    ReverseViewComponent,
    UserInfoComponent,
    AddProductComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
