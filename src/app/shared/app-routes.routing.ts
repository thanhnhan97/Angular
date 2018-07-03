import { Routes } from '@angular/router';
import { AdminModule } from '../dashboard/admin/admin.module';
import { DashboardModule } from '../user/dashboard/dashboard.module';
export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => AdminModule
  },
  // {
  //   path: '',
  //   redirectTo: 'user',
  //   pathMatch: 'full'
  // }
  {
    path: '',
    loadChildren: () => DashboardModule
  }
];
