import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './dashboard/user/user.component'
import { ProductsComponent } from './dashboard/products/products.component';
import { ProductcategoriesComponent } from './dashboard/productcategories/productcategories.component';
import { MangementComponent } from './dashboard/mangement/mangement.component';
import { OrderComponent } from './dashboard/order/order.component';
import { OrderdetailComponent } from './dashboard/orderdetail/orderdetail.component';
import { RouterModule } from '@angular/router';
import { routes } from './shared/app-routes.routing';

@NgModule({ 
  declarations: [
    AppComponent,
    UserComponent,
    ProductsComponent,
    ProductcategoriesComponent,
    MangementComponent,
    OrderComponent,
    OrderdetailComponent,
    
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
