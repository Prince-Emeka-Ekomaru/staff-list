import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { StaffDetailComponent }  from './staff-detail/staff-detail.component';



const routes: Routes = [
  { path: 'staff', component: StaffComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: StaffDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
