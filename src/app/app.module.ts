import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-router.module';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { IndexComponent } from './admin/produtcs/index/index.component';
import { AddComponent } from './admin/produtcs/add/add.component';
import { UpdateComponent } from './admin/produtcs/update/update.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryComponent } from './components/category/category.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { LayoutAdminComponent } from './pages/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './pages/layout-client/layout-client.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { TopNavigateComponent } from './components/top-navigate/top-navigate.component';
import { CartComponent } from './pages/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    IndexComponent,
    AddComponent,
    UpdateComponent,
    HeaderComponent,
    CategoryComponent,
    SliderComponent,
    FooterComponent,
    ProductsComponent,
    LayoutAdminComponent,
    LayoutClientComponent,
    SigninComponent,
    SignupComponent,
    FilterComponent,
    ProductListComponent,
    TopNavigateComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
