import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { userRoute } from '../../shared/routes/user.routing';
import { CartComponent } from './cart/cart.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoute),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomeComponent,
    DetailComponent,
    CartComponent,
    UserNavbarComponent
  ]
})
export class DashboardModule { }
