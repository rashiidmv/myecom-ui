import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'


import { HomeComponent } from './home/home.component';
import { ProductListItemComponent } from './product/product-list-item/product-list-item.component';
import { ProductListComponent } from './product/product-list/product-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductListItemComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
