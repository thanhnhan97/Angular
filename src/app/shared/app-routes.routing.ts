import { ListproductComponent } from './../home/listproduct/listproduct.component';
import { ProductsComponent } from './../dashboard/products/products.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductcategoriesComponent } from '../dashboard/productcategories/productcategories.component';
import { ModuleWithComponentFactories, ModuleWithProviders } from '@angular/core';
export const routes: Routes = [
  { 
    path: 'product',
    component:  ProductsComponent
   },
   {
     path: 'product-type',
     component: ProductcategoriesComponent
   }
];
