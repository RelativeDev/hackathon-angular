import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { UserListComponent } from './components/userList/user-list.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'home', component: UserListComponent, canActivate: [AuthGuard] }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
