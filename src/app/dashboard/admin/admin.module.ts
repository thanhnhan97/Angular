import { ProductcategoriesComponent } from './../productcategories/productcategories.component';
import { ProductsComponent } from './../products/products.component';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { adminRoutes } from '../../shared/routes/admin.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarAdminComponent } from '../navbar-admin/navbar-admin.component';

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes),
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AdminComponent,
    ProductsComponent,
    ProductcategoriesComponent,
    NavbarAdminComponent
  ]
})
export class AdminModule { }
