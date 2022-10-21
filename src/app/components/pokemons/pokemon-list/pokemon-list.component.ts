import { Component, OnInit } from '@angular/core';
import { PokemonDetail } from 'src/app/models/pokemon-detail';
import { PokemonList, PokemonsData } from 'src/app/models/pokemon-list';
import { PokemonsDataService } from 'src/app/services/pokemons-data.service';
import { forkJoin, Observable, of } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  colors: any = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
    ghost: '#5b5f9e',
    ice: '#39b4d3',
    dark: '#7d5886',
    steel: '#ffffff',
  };

  totalPokemons: number = 0;
  // pokemonList!: PokemonList[];
  pokemons: PokemonDetail[] = [];
  offset: number = 0;
  isLoading: boolean = false;

  isSearching: boolean = false;
  searchPokemon!: PokemonDetail;
  // search?: string | number;
  // isLastPage: boolean = false;
  selectedID: any;

  
  constructor(
    private dataService: PokemonsDataService,  
    private router: Router,
    ) { }

  ngOnInit(): void {

    this.getPage(this.offset)
    this.dataService.getData(this.offset).subscribe(
      (res: PokemonsData) => {
        this.totalPokemons = res.count;
      })
  }


  getPage(offset: number): void {
    if(!this.isLoading)
    this.dataService.getData(offset).subscribe((res: PokemonsData) => {
      this.getPokemons(res.results)
    })
    this.isLoading = true;
  }

  getPokemons(res: PokemonList[]):void {
    const pokeHolder: Observable<PokemonDetail>[] = [];
        res.map((result: PokemonList) => {
          pokeHolder.push(this.dataService.getDetails(result.name))
        })
    
    forkJoin([...pokeHolder]).subscribe((res: PokemonDetail[]) => {
      this.pokemons.push(...res);
      this.offset += 20;
      this.isLoading = false;
    })
  }

  onScroll(event: Event):void {
    const element: HTMLDivElement = event.target as HTMLDivElement;
    if(element.scrollHeight - element.scrollTop < 1000) {
      this.getPage(this.offset)
    }
  }

  searchPokemons(value: string) {
    this.isLoading = true;

    if(value === '') {
      this.isSearching = false;
      this.isLoading = false;

    } else {
      this.dataService.getDetails(value)
      .subscribe({next: (pokemon: PokemonDetail) => {
        this.searchPokemon = pokemon
        this.isLoading = false;
        this.isSearching = true;
      },
      error: (error: any) => {
        if(error.status === 404) {
          console.log(error);
        }
          this.isLoading = false;
        }
    })
    }
  }

  getPokemonDetail(list: PokemonList[]) {

  }



  onClick(pokemon:PokemonDetail):void {
    this.router.navigate(['pokemons', pokemon.id], {queryParams: {name: pokemon.name}}).then()
  }

}
