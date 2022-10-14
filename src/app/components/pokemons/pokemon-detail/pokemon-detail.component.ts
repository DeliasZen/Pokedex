import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonDetail } from 'src/app/models/pokemon-detail';
import { PokemonsDataService } from 'src/app/services/pokemons-data.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon!:PokemonDetail;

  constructor(private activatedRoute: ActivatedRoute, private router:Router, private dataService: PokemonsDataService ) {

   }

  ngOnInit(): void {
    // Поиск через заданный ID, обновляется после уничтожения компонента.
    // this.dataService.getDetails(this.activatedRoute.snapshot.params['id'])
    // .subscribe((data) => this.pokemon = data)

    // Поиск через queryParams с динамическим обновлением.
    this.activatedRoute.queryParams.subscribe((params) => {
      this.dataService.getDetails(params['name'])
        .subscribe((data) => this.pokemon = data)
      })
  }


  onClose() {
    this.router.navigate(['pokemons']);
  }

}
