import { AdminModule } from './dashboard/admin/admin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './dashboard/products/products.component';
import { ProductcategoriesComponent } from './dashboard/productcategories/productcategories.component';
import { OrderComponent } from './dashboard/order/order.component';
import { RouterModule } from '@angular/router';
import { routes } from './shared/app-routes.routing';
import { MenuComponent } from './home/menu/menu.component';
import { ListproductComponent } from './home/listproduct/listproduct.component';
import { DetailproductComponent } from './home/detailproduct/detailproduct.component';
import { CartComponent } from './home/cart/cart.component';

@NgModule({ 
  declarations: [
    AppComponent,
    MenuComponent,
    ListproductComponent,
    DetailproductComponent,
    CartComponent,
    ProductsComponent,
    ProductcategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
