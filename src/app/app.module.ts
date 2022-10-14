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

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailComponent,
    PokemonListComponent,
    NavbarComponent,
    UpperCapPipe,
    ReplinePipe
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PokemonsModule,
    PokemonsRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
