import { ProductcategoriesComponent } from './../productcategories/productcategories.component';
import { ProductsComponent } from './../products/products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ProductsComponent,
    ProductcategoriesComponent
  ],
  declarations: [
    AdminComponent,
    ProductsComponent,
    ProductcategoriesComponent
  ],
  bootstrap: [
    AdminComponent
  ]
})
export class AdminModule { }
