import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonDetailComponent } from './components/pokemons/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './components/pokemons/pokemon-list/pokemon-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from "@angular/common/http";
import { PokemonsModule } from './components/pokemons/pokemons.module';
import { PokemonsRoutingModule } from './components/pokemons/pokemons-routing.module';
import { UpperCapPipe } from './pipes/upper-cap.pipe';
import { ReplinePipe } from './pipes/repline.pipe';
import { CustomListComponent } from './components/custom/custom-list/custom-list.component';
import { CustomFormComponent } from './components/custom/custom-form/custom-form.component';
import { ReactiveFormsModule } from '@angular/forms';
//
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { AuthComponent } from './components/auth/auth.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailComponent,
    PokemonListComponent,
    NavbarComponent,
    UpperCapPipe,
    ReplinePipe,
    CustomListComponent,
    CustomFormComponent,
    AboutComponent,
    AuthComponent,
    PokedexComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PokemonsModule,
    PokemonsRoutingModule,
    ReactiveFormsModule,
    //
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
