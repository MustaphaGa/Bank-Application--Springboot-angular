import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { MyTransactionsComponent } from './pages/my-transactions/my-transactions.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MyContactsComponent } from './pages/my-contacts/my-contacts.component';
import { NewTransactionComponent } from './pages/new-transaction/new-transaction.component';
import { NewContactComponent } from './pages/new-contact/new-contact.component';
import { UserComponent } from './pages/user-dashboard/user.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MainAdminComponent } from './admin/main-admin/main-admin.component';
import { UsersManagerComponent } from './admin/users-manager/users-manager.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'user',
    component: MainPageComponent,
    children: [
      { path: 'my-transaction', component: MyTransactionsComponent },
      { path: 'my-contact', component: MyContactsComponent },
      { path: 'new-transaction', component: NewTransactionComponent },
      { path: 'new-contact', component: NewContactComponent },
      { path: 'contact/:idContact', component: NewContactComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'dashboard', component: UserComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  {
    path: 'admin',
    component: MainAdminComponent,
    children: [
      { path: 'clients', component: UsersManagerComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }