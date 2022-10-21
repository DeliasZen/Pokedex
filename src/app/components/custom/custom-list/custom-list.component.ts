import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomDataService } from 'src/app/services/custom-data.service';

@Component({
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.scss']
})
export class CustomListComponent implements OnInit, OnDestroy {

  // pokemons: CustomList[] = [];
  isVisible: boolean = false;


  constructor(public customService: CustomDataService) { }

  ngOnInit(): void {
    this.customService.getData()
  }

  check(s: any) {
    console.log(s);
  }

  ngOnDestroy(): void {
    this.customService.pokemons = []
  }

}
