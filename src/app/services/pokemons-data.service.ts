import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonList, PokemonsData } from '../models/pokemon-list';
import { map } from "rxjs/operators";
import { PokemonDetail } from '../models/pokemon-detail';


@Injectable({
  providedIn: 'root'
})
export class PokemonsDataService {

  baseUrl: string = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

    getData(offset:number, limit: number = 20):Observable<PokemonsData> {
      return this.http.get<PokemonsData>(`${this.baseUrl}pokemon/?offset=${offset}&limit=${limit}`)
    }

    getDetails(name: string | number):Observable<PokemonDetail> {
      return this.http.get<PokemonDetail>(`${this.baseUrl}pokemon/${name}`)
    }

}

// .pipe(map((x: any) => x.results))