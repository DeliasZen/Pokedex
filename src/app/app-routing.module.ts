import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomListComponent } from './components/custom/custom-list/custom-list.component';
import { PokemonListComponent } from './components/pokemons/pokemon-list/pokemon-list.component';

const routes: Routes = [
  {path: 'custom', component: CustomListComponent},
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
