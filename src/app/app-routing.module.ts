import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomListComponent } from './components/custom/custom-list/custom-list.component';
import { PokemonListComponent } from './components/pokemons/pokemon-list/pokemon-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'},
  {path: 'pokemons', component: PokemonListComponent},
  {path: 'custom', component: CustomListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
