import { DashboardModule } from './user/dashboard/dashboard.module';
import { AdminModule } from './dashboard/admin/admin.module';
import { routes } from './shared/app-routes.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({ 
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminModule,
    DashboardModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
