import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  { path: 'books', component: UserListComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books/create-book', redirectTo: 'create-book', pathMatch: 'full' },
  { path: 'create-book', component: UserCreateComponent },
  { path: 'update-book/:id', component: UserUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
