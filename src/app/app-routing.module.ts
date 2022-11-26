import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [];
// const routes: Routes = [
//   { path: 'auth', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule), canActivate: [ LoggedInGuard ]},
//   { 
//     path: 'administrator', 
//     loadChildren: () => import('./components/administrator/administrator.module').then(m => m.AdministratorModule), 
//     canActivate: [ AuthGuard, AdminAccessGuard ]
//   },
//   { 
//     path: 'professor', 
//     loadChildren: () => import('./components/students/students.module').then(m => m.StudentsModule), 
//     canActivate: [ AuthGuard, StudentAccessGuard ],
//   },
//   { path: '', redirectTo: 'administrator', pathMatch: 'full' },
//   { path: '**', component: AdministratorComponent }
// ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
