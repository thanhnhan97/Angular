import { Routes } from '@angular/router';
import { ProductsComponent } from '../../dashboard/products/products.component';
import { ProductcategoriesComponent } from '../../dashboard/productcategories/productcategories.component';
import { AdminComponent } from '../../dashboard/admin/admin.component';

export const adminRoutes: Routes = [
    {
        path: 'admin/product',
        component: ProductsComponent
    },
    {
        path: 'admin/product-type',
        component: ProductcategoriesComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    }
];
