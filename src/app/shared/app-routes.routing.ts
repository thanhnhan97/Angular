import { MangementComponent } from './../dashboard/mangement/mangement.component';
import { AccessManagement } from './models/accessManagement';
import { OrderdetailComponent } from './../dashboard/orderdetail/orderdetail.component';
import { ProductsComponent } from './../dashboard/products/products.component';
import { Routes } from '@angular/router';
import { ProductcategoriesComponent } from '../dashboard/productcategories/productcategories.component';
import { OrderComponent } from '../dashboard/order/order.component';
import { UserComponent } from '../dashboard/user/user.component';

export const routes: Routes = [
  { 
    path: 'product',
    component:  ProductsComponent
   },
   {
     path: 'product-categories',
     component: ProductcategoriesComponent
   },
   {
     path: 'order',
     component: OrderComponent
   },
   {
     path: 'order-detail',
     component: OrderdetailComponent
   },
   {
     path: 'user',
     component: UserComponent
   },
   {
     path: 'access-management',
     component: MangementComponent

   }
];

