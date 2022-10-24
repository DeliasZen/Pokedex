import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AuthComponent } from './components/auth/auth.component';
import { CustomListComponent } from './components/custom/custom-list/custom-list.component';

const routes: Routes = [
  {path: 'custom', component: CustomListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'auth', component: AuthComponent},
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
