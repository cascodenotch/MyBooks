import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BooksComponent } from './pages/books/books.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: "home", component:HomeComponent},   
  {path:"registro", component:RegisterComponent},
  {path:"profile", component: ProfileComponent},
  {path:"books", component:BooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 