import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonDetailComponent } from './components/pokemons/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './components/pokemons/pokemon-list/pokemon-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailComponent,
    PokemonListComponent,
    NavbarComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
