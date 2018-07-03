import { CartComponent } from './../../user/dashboard/cart/cart.component';
import { Routes } from '@angular/router';
import { HomeComponent } from '../../user/dashboard/home/home.component';
import { DetailComponent } from '../../user/dashboard/detail/detail.component';

export const userRoute : Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'detail/:id',
        component: DetailComponent
    }
];