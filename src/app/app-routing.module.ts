import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserListComponent } from './components/userList/user-list.component';

const routes: Routes = [
  { path: '', component: UserListComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
