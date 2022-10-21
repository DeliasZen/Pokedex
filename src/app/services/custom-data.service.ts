import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomList } from '../models/custom-list';

@Injectable({
  providedIn: 'root'
})
export class CustomDataService {

  baseUrl: string = 'https://pokedex-ang-default-rtdb.europe-west1.firebasedatabase.app/data';
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'aplication/json'})}

  pokemons: CustomList[] = [];


  constructor(private http: HttpClient) { }


    // => GET
    getData() {
      this.http.get<CustomList[]>(`${this.baseUrl}.json`, this.httpOptions).subscribe( res => {
          Object.keys(res).forEach(key => this.pokemons.push({key, ...res[<any>key]}))
        }
      )}

      // => POST
      createData(pokemon: CustomList) {
        this.http.post<CustomList>(`${this.baseUrl}.json`, pokemon, this.httpOptions). subscribe(res => {
          this.pokemons.push({...{key: res.name},...pokemon})}
          )
      }
}
